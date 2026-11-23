import { defineSecret } from 'firebase-functions/params';
import { onRequest } from 'firebase-functions/v2/https';

/**
 * Allowlists match src/data/inquiries.ts.
 * Live mail needs the RESEND_API_KEY secret. webnrd.me is verified in Resend.
 */
const resendApiKey = defineSecret('RESEND_API_KEY');
const resendFrom = 'Nate Martinez <hello@webnrd.me>';

const TO = 'nrd.martinezz@gmail.com';
const MAX_BODY = 20_000;

const SERVICES = new Map<string, string>([
  ['web-development', 'Web development'],
  ['local-seo', 'Local SEO'],
  ['social-media', 'Social media'],
  ['unsure', 'Not sure yet'],
]);

const CITIES = new Map<string, string>([
  ['lake-elsinore', 'Lake Elsinore'],
  ['temecula', 'Temecula'],
  ['murrieta', 'Murrieta'],
  ['menifee', 'Menifee'],
  ['wildomar', 'Wildomar'],
  ['corona', 'Corona'],
  ['other', 'Somewhere else'],
]);

interface Reply {
  status: number;
  ok: boolean;
  error?: string;
}

function cleanLine(value: string): string {
  return value
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanMessage(value: string): string {
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim();
}

function asText(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

function readPayload(body: unknown, rawBody: Buffer | undefined): Record<string, unknown> {
  if (body && typeof body === 'object' && !Buffer.isBuffer(body) && !Array.isArray(body)) {
    return body as Record<string, unknown>;
  }

  const raw = typeof body === 'string' ? body : rawBody?.toString('utf8');
  if (!raw) return {};

  const trimmed = raw.trim();
  if (trimmed.startsWith('{')) {
    try {
      const parsed: unknown = JSON.parse(trimmed);
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
        return parsed as Record<string, unknown>;
      }
    } catch {
      return {};
    }
  }

  return Object.fromEntries(new URLSearchParams(raw));
}

function wantsJson(accept: string | undefined, contentType: string | undefined): boolean {
  return (
    (accept ?? '').includes('application/json') || (contentType ?? '').includes('application/json')
  );
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function sendReply(
  res: {
    status: (code: number) => {
      json: (body: unknown) => void;
      type: (type: string) => { send: (body: string) => void };
    };
    set: (field: string, value: string) => void;
  },
  json: boolean,
  reply: Reply,
) {
  if (json) {
    res.status(reply.status).json(reply.ok ? { ok: true } : { ok: false, error: reply.error });
    return;
  }

  const title = reply.ok ? 'Message sent' : 'Message not sent';
  const text = reply.ok ? 'Your message is on its way.' : (reply.error ?? 'Message not sent.');
  res
    .status(reply.status)
    .type('html')
    .send(
      `<!doctype html><meta charset="utf-8"><title>${title}</title><p>${escapeHtml(text)}</p><p><a href="/#contact">Back to the site</a></p>`,
    );
}

export const contact = onRequest(
  {
    region: 'us-west1',
    secrets: [resendApiKey],
    invoker: 'public',
    cors: false,
    memory: '256MiB',
    timeoutSeconds: 15,
    maxInstances: 2,
  },
  async (req, res) => {
    res.set('Cache-Control', 'no-store');
    const json = wantsJson(req.get('accept'), req.get('content-type'));

    if (req.method !== 'POST') {
      res.set('Allow', 'POST');
      sendReply(res, json, { status: 405, ok: false, error: 'Method not allowed.' });
      return;
    }

    const declaredLength = Number(req.get('content-length') ?? 0);
    if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY) {
      sendReply(res, json, { status: 413, ok: false, error: 'Message is too long.' });
      return;
    }

    const payload = readPayload(req.body, req.rawBody);
    if (cleanLine(asText(payload.hp_field))) {
      sendReply(res, json, { status: 200, ok: true });
      return;
    }

    const name = cleanLine(asText(payload.name));
    const email = cleanLine(asText(payload.email)).toLowerCase();
    const phone = cleanLine(asText(payload.phone));
    const service = cleanLine(asText(payload.service));
    const city = cleanLine(asText(payload.city));
    const message = cleanMessage(asText(payload.message));

    const serviceLabel = SERVICES.get(service);
    const cityLabel = CITIES.get(city);
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 200;
    const phoneOk = phone === '' || /^[0-9+().\-\s]{7,40}$/.test(phone);

    if (
      name.length < 2 ||
      name.length > 80 ||
      !emailOk ||
      !phoneOk ||
      !serviceLabel ||
      !cityLabel ||
      message.length < 10 ||
      message.length > 4000
    ) {
      sendReply(res, json, {
        status: 400,
        ok: false,
        error: 'Check the name, email, service, city, and message.',
      });
      return;
    }

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || 'Not provided'}`,
      `Service: ${serviceLabel}`,
      `City: ${cityLabel}`,
      '',
      message,
    ].join('\n');

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey.value()}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: resendFrom,
          to: [TO],
          reply_to: email,
          subject: `Inquiry from ${name} — ${serviceLabel}, ${cityLabel}`,
          text,
        }),
        signal: AbortSignal.timeout(8000),
      });

      if (!response.ok) {
        console.error('Resend rejected the message', response.status);
        sendReply(res, json, {
          status: 502,
          ok: false,
          error: 'Message not sent. Call or email instead.',
        });
        return;
      }
    } catch (error) {
      console.error('Resend request failed', error instanceof Error ? error.name : 'unknown');
      sendReply(res, json, {
        status: 502,
        ok: false,
        error: 'Message not sent. Call or email instead.',
      });
      return;
    }

    sendReply(res, json, { status: 200, ok: true });
  },
);
