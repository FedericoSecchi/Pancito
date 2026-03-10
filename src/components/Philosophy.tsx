"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { copy } from "@/data/copy";

export function Philosophy() {
  return (
    <Section id="filosofia" stagger={0} className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <motion.h2
          className="font-display text-3xl font-bold text-pnw-breeze sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {copy.filosofia.title}
        </motion.h2>
        <motion.div
          className="mt-8 space-y-6 text-lg leading-relaxed text-pnw-breeze/90"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p>{copy.filosofia.paragraph1}</p>
          <p>{copy.filosofia.paragraph2}</p>
        </motion.div>
      </div>
    </Section>
  );
}
