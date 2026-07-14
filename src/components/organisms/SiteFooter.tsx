import { Wordmark } from "../molecules/Wordmark";
import { SignalStack } from "../atoms/SignalStack";

interface SiteFooterProps {
  logoSrc: string;
  tagline: string;
  copyrightName: string;
}

export function SiteFooter({ logoSrc, tagline, copyrightName }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <Wordmark logoSrc={logoSrc} />
      <p>{tagline}</p>
      <div>
        <SignalStack horizontal />
        <span>© {new Date().getFullYear()} {copyrightName}</span>
      </div>
    </footer>
  );
}
