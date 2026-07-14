import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "../atoms/SectionLabel";
import { SignalStack } from "../atoms/SignalStack";
import { ProjectCard, FeaturedProject } from "../molecules/ProjectCard";
import { useReveal } from "../../lib/animations";

export interface AdditionalProject {
  number: string;
  title: string;
  meta: string;
  url: string;
}

export interface WorkSectionProps {
  tag: { index: string; label: string };
  heading: string;
  intro: string;
  featured: FeaturedProject[];
  additional: AdditionalProject[];
}

export function WorkSection({ tag, heading, intro, featured, additional }: WorkSectionProps) {
  const reveal = useReveal();
  return (
    <section id="work" className="work-section section-pad" aria-labelledby="work-title">
      <SectionLabel index={tag.index}>{tag.label}</SectionLabel>

      <motion.div className="section-intro" {...reveal}>
        <h2 id="work-title">{heading}</h2>
        <p>{intro}</p>
      </motion.div>

      <div className="project-list">
        {featured.map((project, index) => (
          <ProjectCard key={project.title} project={project} reverse={index % 2 === 1} />
        ))}
      </div>

      <div className="project-index" aria-label="Additional projects">
        <div className="project-index__heading">
          <span>Also in the folio</span>
          <SignalStack horizontal />
        </div>
        {additional.map((project) => (
          <a key={project.title} href={project.url} target="_blank" rel="noreferrer">
            <span>{project.number}</span>
            <strong>{project.title}</strong>
            <small>{project.meta}</small>
            <ArrowUpRight aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
}
