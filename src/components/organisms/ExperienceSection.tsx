import { motion } from "framer-motion";
import { SectionLabel } from "../atoms/SectionLabel";
import { SignalStack } from "../atoms/SignalStack";
import { useReveal } from "../../lib/animations";

export interface WorkRole {
  company: string;
  period: string;
  title: string;
}

export interface EducationEntry {
  type: string;
  credential: string;
  detail: string;
  variant?: "credential";
}

export interface ExperienceSectionProps {
  tag: { index: string; label: string };
  register: string;
  heading: string;
  intro: string;
  roles: WorkRole[];
  bodyText: string;
  education: EducationEntry[];
}

export function ExperienceSection({
  tag,
  register,
  heading,
  intro,
  roles,
  bodyText,
  education,
}: ExperienceSectionProps) {
  const reveal = useReveal();
  return (
    <section id="experience" className="experience-section section-pad" aria-labelledby="experience-title">
      <div className="experience-register" aria-hidden="true">
        <span>{register}</span>
        <SignalStack horizontal />
      </div>

      <SectionLabel index={tag.index}>{tag.label}</SectionLabel>

      <div className="experience-layout">
        <motion.div className="experience-statement" {...reveal}>
          <h2 id="experience-title">{heading}</h2>
          <p>{intro}</p>
        </motion.div>

        <motion.div className="experience-record" {...reveal}>
          <div className="experience-record__top">
            {roles.map((role) => (
              <div key={role.title}>
                <span>
                  {role.company} <strong>{role.period}</strong>
                </span>
                <h3>{role.title}</h3>
              </div>
            ))}
          </div>
          <div className="experience-record__body">
            <p>{bodyText}</p>
            <div className="experience-record__education">
              {education.map((entry) => (
                <div
                  key={entry.type}
                  className={`education-entry${entry.variant ? ` education-entry--${entry.variant}` : ""}`}
                >
                  <span>{entry.type}</span>
                  <strong>{entry.credential}</strong>
                  <small>{entry.detail}</small>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
