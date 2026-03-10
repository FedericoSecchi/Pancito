"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="concepto" stagger={0} className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
        <motion.h2
          className="font-display text-3xl font-bold text-pnw-breeze sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          No somos una panadería tradicional
        </motion.h2>
        <motion.div
          className="mt-8 space-y-6 text-lg leading-relaxed text-pnw-breeze/90"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p>
            Pancito es un obrador obsesivo construido alrededor del tiempo, la fermentación, la precisión y la transformación. Creemos en ingredientes simples y resultados complejos: cada pan nace de una fermentación lenta; cada conserva respeta el mismo principio.
          </p>
          <p>
            Trabajamos en pequeñas tandas. No industrializamos. Aplicamos una precisión casi científica al oficio, pero el resultado es profundamente humano.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
