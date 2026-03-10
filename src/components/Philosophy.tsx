"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";

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
          Obsesión, precisión y tiempo
        </motion.h2>
        <motion.div
          className="mt-8 space-y-6 text-lg leading-relaxed text-pnw-breeze/90"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p>
            La fermentación no es un paso más en la receta: es la identidad del proyecto. Creemos en ingredientes simples transformados con tiempo y control. La masa madre es un sistema vivo; las conservas siguen la misma lógica de espera y transformación.
          </p>
          <p>
            Pequeñas tandas, cocción lenta, obrador antes que fábrica. Sin prisas ni atajos. El resultado es un pan y unas conservas que hablan de proceso, no de producción.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
