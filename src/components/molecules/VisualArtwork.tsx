import { SignalStack } from "../atoms/SignalStack";

interface VisualArtworkProps {
  variant: string;
  label: string;
}

export function VisualArtwork({ variant, label }: VisualArtworkProps) {
  return (
    <div className={`visual-art visual-art--${variant}`} role="img" aria-label={label}>
      <div className="visual-art__grid" aria-hidden="true" />
      <div className="visual-art__plane visual-art__plane--one" aria-hidden="true" />
      <div className="visual-art__plane visual-art__plane--two" aria-hidden="true" />
      <div className="visual-art__arc" aria-hidden="true" />
      <div className="visual-art__disc" aria-hidden="true" />
      <div className="visual-art__line" aria-hidden="true" />
      <SignalStack />
      <span className="visual-art__stamp" aria-hidden="true">NM / SYS</span>
    </div>
  );
}
