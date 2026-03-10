"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";

const steps = [
  {
    title: "Masa madre viva",
    text: "Nuestra masa madre es un sistema vivo. La alimentamos, la observamos y la dejamos trabajar con tiempo.",
  },
  {
    title: "Fermentación lenta",
    text: "Cada pan y cada conserva siguen el mismo principio: dejar que el tiempo transforme los ingredientes.",
  },
  {
    title: "Pequeñas tandas",
    text: "Horneamos en cantidades controladas. Sin prisas, con atención al detalle en cada pieza.",
  },
  {
    title: "Compotas con la misma lógica",
    text: "Las conservas y compotas se elaboran con la misma filosofía de tiempo, fermentación y transformación.",
  },
];

export function Process() {
  return (
    <Section id="proceso" stagger={0} className="bg-field-notes py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <motion.h2
          className="font-display text-3xl font-bold text-pnw-breeze sm:text-4xl md:text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Cómo trabajamos
        </motion.h2>
        <motion.p
          className="mt-4 max-w-2xl text-lg text-pnw-breeze/85 md:mx-auto md:text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Cada pan nace de una fermentación lenta. Cada conserva respeta el mismo principio: dejar que el tiempo transforme los ingredientes.
        </motion.p>
        <ul className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
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
