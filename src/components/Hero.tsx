"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { Button } from "./Button";
import { site } from "@/data/site";
import { copy } from "@/data/copy";
import { getWhatsAppOrderUrl } from "@/lib/whatsapp";

export function Hero() {
  const whatsappUrl = getWhatsAppOrderUrl([]);

  return (
    <Section id="hero" className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Dark brown hero background – palette: PNW Breeze / Leather */}
      <div className="absolute inset-0 bg-pnw-breeze" />
      {/* Subtle organic dot texture – cream on dark for editorial feel */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='6' cy='6' r='1.2' fill='%23f4eee6'/%3E%3Ccircle cx='18' cy='14' r='1' fill='%23f4eee6'/%3E%3Ccircle cx='10' cy='22' r='1.2' fill='%23f4eee6'/%3E%3Ccircle cx='26' cy='8' r='0.8' fill='%23f4eee6'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center sm:px-8 md:py-28">
        <motion.p
          className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-field-notes/70"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Micro-obrador
        </motion.p>
        <motion.h1
          className="mt-2 font-display text-4xl font-extrabold tracking-tight text-field-notes sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          {site.name}
        </motion.h1>
        <motion.p
          className="mt-5 font-display text-xl font-semibold text-field-notes/95 sm:text-2xl md:mt-6 md:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
        >
          {site.tagline}
        </motion.p>
        <motion.p
          className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-field-notes/85 sm:mt-6 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
        >
          {copy.hero.subheadline}
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
        >
          <Button
            href={whatsappUrl}
            variant="primary"
            external
            className="bg-field-notes text-pnw-breeze hover:bg-trail-dust"
          >
            {copy.hero.ctaPrimary}
          </Button>
          <Button
            href="#productos"
            variant="secondary"
            className="border-field-notes text-field-notes hover:bg-field-notes hover:text-pnw-breeze"
          >
            {copy.hero.ctaSecondary}
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
