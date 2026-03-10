"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { Button } from "./Button";
import { site } from "@/data/site";
import { getWhatsAppOrderUrl } from "@/lib/whatsapp";

export function Hero() {
  const whatsappUrl = getWhatsAppOrderUrl([]);

  return (
    <Section id="hero" className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-pnw-breeze" />
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5c-2 4-4 8-4 12s2 8 4 10c2-2 4-6 4-10s-2-8-4-12z' fill='%23f4eee6' fill-opacity='1'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center sm:px-8 md:py-28">
        <motion.h1
          className="font-display text-4xl font-extrabold tracking-tight text-field-notes sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {site.name}
        </motion.h1>
        <motion.p
          className="mt-4 font-display text-xl font-semibold text-field-notes/95 sm:text-2xl md:mt-6 md:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {site.tagline}
        </motion.p>
        <motion.p
          className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-field-notes/85 sm:mt-6 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Pancito es un micro-obrador de masa madre y conservas lentas. Trabajamos con precisión, tiempo y obsesión por el detalle.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button href={whatsappUrl} variant="primary" external className="bg-field-notes text-pnw-breeze hover:bg-trail-dust">
            Pedir por WhatsApp
          </Button>
          <Button href="#productos" variant="secondary" className="border-field-notes text-field-notes hover:bg-field-notes hover:text-pnw-breeze">
            Ver productos
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
