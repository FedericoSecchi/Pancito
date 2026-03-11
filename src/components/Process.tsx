"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { copy } from "@/data/copy";
import { assetUrl } from "@/lib/assetUrl";

export function Process() {
  return (
    <Section id="proceso" stagger={0} className="relative overflow-hidden bg-field-notes py-20 sm:py-28">
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={assetUrl("/assets/video/proceso-masa.mp4")} type="video/mp4" />
      </video>
      <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8">
        <motion.h2
          className="font-display text-3xl font-bold text-pnw-breeze sm:text-4xl md:text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {copy.proceso.title}
        </motion.h2>
        <motion.p
          className="mt-4 max-w-2xl text-lg text-pnw-breeze/85 md:mx-auto md:text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          {copy.proceso.intro}
        </motion.p>
        <ul className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {copy.proceso.steps.map((step, i) => (
            <motion.li
              key={step.title}
              className="rounded-2xl bg-surface/80 p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <h3 className="font-display text-lg font-bold text-moss-pillow">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-pnw-breeze/85">
                {step.text}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
