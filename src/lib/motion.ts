// src/lib/motion.ts
import { Variants } from "framer-motion";

/**
 * Small shared motion utilities (framer-motion)
 */

export const stagger = (staggerDelay = 0.06): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: staggerDelay,
    },
  },
});

export const fadeInUp = (delay = 0) => {
  const v: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay,
        ease: [0.2, 0.8, 0.2, 1],
      },
    },
  };
  return v;
};

export const fadeIn = (delay = 0): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.45, delay },
  },
});
