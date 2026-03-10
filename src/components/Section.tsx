"use client";

import { motion } from "framer-motion";

const defaultVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  /** Optional delay index for staggered children */
  stagger?: number;
}

export function Section({ id, children, className = "", stagger = 0 }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={defaultVariants}
      custom={stagger}
      className={className}
    >
      {children}
    </motion.section>
  );
}
