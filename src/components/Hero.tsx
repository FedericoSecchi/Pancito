"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Button } from "./Button";
import { site } from "@/data/site";
import { copy } from "@/data/copy";
import { getWhatsAppOrderUrl } from "@/lib/whatsapp";
import { assetUrl } from "@/lib/assetUrl";

export function Hero() {
  const whatsappUrl = getWhatsAppOrderUrl([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <Section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden"
    >
      {/* 1. Base background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${assetUrl("/assets/hero-pan-recipient.png")})`,
        }}
      />
      {/* 2. Background video layer */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      >
        <source
          src={assetUrl("/assets/video/hero-bread-baking.mp4")}
          type="video/mp4"
        />
      </video>
      {/* 3. Dark overlay for text readability (40–50%) */}
      <div
        className="absolute inset-0 bg-pnw-breeze"
        style={{ opacity: 0.45 }}
        aria-hidden
      />
      {/* 4. Subtle SVG dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='6' cy='6' r='1.2' fill='%23f4eee6'/%3E%3Ccircle cx='18' cy='14' r='1' fill='%23f4eee6'/%3E%3Ccircle cx='10' cy='22' r='1.2' fill='%23f4eee6'/%3E%3Ccircle cx='26' cy='8' r='0.8' fill='%23f4eee6'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
      {/* 5. Content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-20 text-center lg:py-28">
        <motion.p
          className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-field-notes/70"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Micro-obrador
        </motion.p>
        <motion.h1
          className="mt-2 font-display text-4xl font-extrabold tracking-tight text-field-notes sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          {site.name}
        </motion.h1>
        <motion.p
          className="mt-5 font-display text-xl font-semibold text-field-notes/95 sm:text-2xl md:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
        >
          {site.tagline}
        </motion.p>
        <motion.p
          className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-field-notes/85"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
        >
          {copy.hero.subheadline}
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
        >
          <Button
            href={whatsappUrl}
            variant="primary"
            external
            className="bg-moss-pillow text-field-notes transition-all duration-500 ease-out hover:bg-[#d4b36a] hover:shadow-lg hover:shadow-black/20"
          >
            {copy.hero.ctaPrimary}
          </Button>
          <Button
            href="#productos"
            variant="secondary"
            className="border-2 border-white/80 text-white transition-all duration-500 ease-out hover:bg-white hover:text-field-notes"
          >
            {copy.hero.ctaSecondary}
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
