"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { copy } from "@/data/copy";
import { assetUrl } from "@/lib/assetUrl";

export function About() {
  return (
    <Section id="concepto" stagger={0} className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${assetUrl("/assets/pan-cortado-cenital.png")})`,
        }}
      />
      <div className="absolute inset-0 bg-black/35" aria-hidden />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center sm:px-8">
        <motion.h2
          className="font-display text-3xl font-bold text-pnw-breeze sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {copy.concepto.title}
        </motion.h2>
        <motion.div
          className="mt-8 space-y-6 text-lg leading-relaxed text-pnw-breeze/90"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p>{copy.concepto.paragraph1}</p>
          <p>{copy.concepto.paragraph2}</p>
        </motion.div>
      </div>
    </Section>
  );
}
