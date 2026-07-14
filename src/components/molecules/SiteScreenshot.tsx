interface SiteScreenshotProps {
  src: string;
  alt: string;
  domain: string;
}

export function SiteScreenshot({ src, alt, domain }: SiteScreenshotProps) {
  return (
    <div className="site-shot">
      <div className="site-shot__chrome" aria-hidden="true">
        <span className="site-shot__dots">
          <i />
          <i />
          <i />
        </span>
        <span className="site-shot__address">{domain}</span>
        <span className="site-shot__status">Live</span>
      </div>
      <div className="site-shot__viewport">
        <img src={src} alt={alt} loading="lazy" />
      </div>
      <span className="site-shot__caption" aria-hidden="true">
        Homepage / live build
      </span>
    </div>
  );
}
