interface WordmarkProps {
  logoSrc: string;
}

export function Wordmark({ logoSrc }: WordmarkProps) {
  return (
    <a className="wordmark" href="#top" aria-label="Nate Martinez, back to top">
      <img src={logoSrc} alt="Nate Martinez monogram" />
      <span className="wordmark__type">
        <strong>NATE</strong>
        <strong>MARTINEZ</strong>
      </span>
    </a>
  );
}
