import { useReducedMotion } from "framer-motion";

/** Shared scroll-reveal animation. Used by all motion.* elements that enter on scroll. */
export function useReveal() {
  const reduceMotion = useReducedMotion();
  return {
    initial: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: {
      duration: 0.58,
      ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
    },
  };
}
