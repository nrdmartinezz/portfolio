import { motion } from "framer-motion";
import { useReveal } from "../../lib/animations";

export interface Capability {
  number: string;
  title: string;
  body: string;
  tools: string;
}

export function CapabilityItem({ number, title, body, tools }: Capability) {
  const reveal = useReveal();
  return (
    <motion.article {...reveal}>
      <span>{number}</span>
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
        <small>{tools}</small>
      </div>
    </motion.article>
  );
}
