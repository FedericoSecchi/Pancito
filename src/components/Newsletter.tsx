"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Button } from "./Button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Placeholder: no backend yet. Simulate success.
    setTimeout(() => {
      setStatus("done");
      setEmail("");
    }, 600);
  };

  return (
    <Section id="newsletter" stagger={0} className="bg-field-notes py-20 sm:py-28">
      <div className="mx-auto max-w-xl px-6 text-center sm:px-8">
        <motion.h2
          className="font-display text-3xl font-bold text-pnw-breeze sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Avisos de horneadas
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-pnw-breeze/85"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Dejá tu correo y te avisamos cuando haya nuevas tandas y productos disponibles.
        </motion.p>
        <motion.form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Correo electrónico
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@correo.com"
            required
            disabled={status === "done"}
            className="w-full rounded-full border-2 border-pnw-breeze/30 bg-surface px-5 py-3.5 text-pnw-breeze placeholder:text-pnw-breeze/50 focus:border-moss-pillow focus:outline-none focus:ring-2 focus:ring-moss-pillow/30 sm:w-80"
          />
          <Button
            type="submit"
            variant="primary"
            className="w-full sm:w-auto"
          >
            {status === "loading" ? "Enviando…" : status === "done" ? "Listo" : "Anotarme"}
          </Button>
        </motion.form>
        {status === "done" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-sm text-moss-pillow"
          >
            Gracias. Te avisamos en la próxima horneada.
          </motion.p>
        )}
      </div>
    </Section>
  );
}
