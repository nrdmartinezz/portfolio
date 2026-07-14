import { motion } from "framer-motion";
import { ArrowUpRight, Download, Phone, ExternalLink } from "lucide-react";
import { useReveal } from "../../lib/animations";

export interface ContactLinkItem {
  href: string;
  icon: "phone" | "external" | "download";
  label: string;
  value: string;
  external?: boolean;
}

export interface ContactSectionProps {
  kicker: string;
  heading: string;
  body: string;
  email: string;
  links: ContactLinkItem[];
}

function LinkIcon({ type }: { type: ContactLinkItem["icon"] }) {
  if (type === "phone") return <Phone size={17} aria-hidden="true" />;
  if (type === "download") return <Download size={17} aria-hidden="true" />;
  return <ExternalLink size={17} aria-hidden="true" />;
}

export function ContactSection({ kicker, heading, body, email, links }: ContactSectionProps) {
  const reveal = useReveal();
  return (
    <section id="contact" className="contact-section section-pad" aria-labelledby="contact-title">
      <div className="contact-rail" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <motion.div className="contact-content" {...reveal}>
        <p className="contact-kicker">{kicker}</p>
        <h2 id="contact-title">{heading}</h2>
        <p>{body}</p>
        <a className="contact-email" href={`mailto:${email}`}>
          {email} <ArrowUpRight aria-hidden="true" />
        </a>
      </motion.div>

      <div className="contact-links">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            <LinkIcon type={link.icon} />
            <span>{link.label}</span>
            <strong>{link.value}</strong>
          </a>
        ))}
      </div>
    </section>
  );
}
