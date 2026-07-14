import { motion } from "framer-motion";
import { SectionLabel } from "../atoms/SectionLabel";
import { VisualArtwork } from "../molecules/VisualArtwork";
import { CapabilityItem, Capability } from "../molecules/CapabilityItem";
import { useReveal } from "../../lib/animations";

export interface CapabilitiesSectionProps {
  tag: { index: string; label: string };
  artVariant: string;
  artLabel: string;
  artCaption: string;
  heading: string;
  intro: string;
  items: Capability[];
}

export function CapabilitiesSection({
  tag,
  artVariant,
  artLabel,
  artCaption,
  heading,
  intro,
  items,
}: CapabilitiesSectionProps) {
  const reveal = useReveal();
  return (
    <section id="capabilities" className="capabilities-section section-pad" aria-labelledby="capabilities-title">
      <SectionLabel index={tag.index}>{tag.label}</SectionLabel>

      <div className="capabilities-layout">
        <motion.div className="capabilities-art" {...reveal}>
          <VisualArtwork variant={artVariant} label={artLabel} />
          <span>{artCaption}</span>
        </motion.div>

        <div className="capabilities-copy">
          <motion.div className="section-intro section-intro--stacked" {...reveal}>
            <h2 id="capabilities-title">{heading}</h2>
            <p>{intro}</p>
          </motion.div>

          <div className="capability-list">
            {items.map((item) => (
              <CapabilityItem key={item.number} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
