import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";
import { SignalStack } from "../atoms/SignalStack";
import { useReveal } from "../../lib/animations";

export interface HeroSectionProps {
  eyebrow: string;
  headlineMain: string;
  headlineHighlight: string;
  intro: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  artSrc: string;
  artAlt: string;
  artNoteLabel: string;
  artNoteValue: string;
  footerLine1: string;
  footerLine2: string;
}

export function HeroSection({
  eyebrow,
  headlineMain,
  headlineHighlight,
  intro,
  primaryCta,
  secondaryCta,
  artSrc,
  artAlt,
  artNoteLabel,
  artNoteValue,
  footerLine1,
  footerLine2,
}: HeroSectionProps) {
  const reveal = useReveal();
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero section-pad" aria-labelledby="hero-title">
      <div className="hero__grid">
        <motion.div className="hero__copy" {...reveal}>
          <div className="eyebrow">
            <SignalStack horizontal />
            <span>{eyebrow}</span>
          </div>
          <h1 id="hero-title">
            {headlineMain}
            <br />
            <span>{headlineHighlight}</span>
          </h1>
          <p className="hero__intro">{intro}</p>
          <div className="hero__actions">
            <a className="button button--primary" href={primaryCta.href}>
              {primaryCta.label} <ArrowDownRight size={18} aria-hidden="true" />
            </a>
            <a className="text-link" href={secondaryCta.href} target="_blank" rel="noreferrer">
              {secondaryCta.label} <Download size={17} aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__art"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.72, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
        >
          <img src={artSrc} alt={artAlt} />
          <div className="hero__art-note">
            <span>{artNoteLabel}</span>
            <strong>{artNoteValue}</strong>
          </div>
        </motion.div>
      </div>

      <div className="hero__footer">
        <p>{footerLine1}</p>
        <p>{footerLine2}</p>
        <a href={primaryCta.href}>
          Scroll to work <ArrowDownRight size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
