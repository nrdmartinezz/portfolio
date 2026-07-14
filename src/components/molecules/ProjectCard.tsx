import { ExternalLink, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SiteScreenshot } from "./SiteScreenshot";
import { useReveal } from "../../lib/animations";

export interface FeaturedProject {
  number: string;
  title: string;
  category: string;
  description: string;
  outcome: string;
  image: string;
  domain: string;
  url: string;
  imageAlt: string;
  tone: "yellow" | "blue" | "red";
}

interface ProjectCardProps {
  project: FeaturedProject;
  reverse?: boolean;
}

export function ProjectCard({ project, reverse = false }: ProjectCardProps) {
  const reveal = useReveal();
  return (
    <motion.article
      className={`project project--${project.tone}${reverse ? " project--reverse" : ""}`}
      {...reveal}
    >
      <a
        className="project__image"
        href={project.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit ${project.title}`}
      >
        <SiteScreenshot src={project.image} alt={project.imageAlt} domain={project.domain} />
        <span className="project__screen-index" aria-hidden="true">
          {project.number}
        </span>
        <span className="project__visit">
          Visit live site <ExternalLink size={17} aria-hidden="true" />
        </span>
      </a>
      <div className="project__copy">
        <div className="project__meta">
          <span>{project.number}</span>
          <span>{project.category}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project__outcome">
          <span>Focus</span>
          <strong>{project.outcome}</strong>
        </div>
        <a className="project__link" href={project.url} target="_blank" rel="noreferrer">
          Open project <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}
