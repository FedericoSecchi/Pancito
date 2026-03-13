"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { products } from "@/data/products";
import type { Product } from "@/data/products";
import { copy } from "@/data/copy";
import { assetUrl } from "@/lib/assetUrl";

function formatPrice(n: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

/** Small hand-drawn bread icon for product cards */
function ProductIcon({ id }: { id: string }) {
  const isFocaccia = id === "focaccia";
  const isCompota = id === "compotas";
  const isRoll = id === "roll-canela";
  return (
    <span className="mb-3 inline-block text-moss-pillow/60" aria-hidden>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg">
        {isCompota ? (
          <path d="M14 6v16M10 10h8M9 14h10M10 18h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        ) : isFocaccia ? (
          <>
            <rect x="6" y="10" width="16" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none" />
            <circle cx="10" cy="14" r="1" fill="currentColor" />
            <circle cx="14" cy="14" r="1" fill="currentColor" />
            <circle cx="18" cy="14" r="1" fill="currentColor" />
          </>
        ) : isRoll ? (
          <path d="M14 8c-3 0-5 2-5 5v5c0 2 2 4 5 4s5-2 5-4v-5c0-3-2-5-5-5z" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M8 14c0-3 3-6 6-6s6 3 6 6v4c0 2-1 4-4 4H12c-3 0-4-2-4-4v-4z" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </span>
  );
}

/** Centered overlay media: video with playbackRate 0.6 */
function OverlayVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, [src]);
  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      aria-hidden
    >
      <source src={assetUrl(src)} type="video/mp4" />
    </video>
  );
}

export function Products() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const hoveredProduct = activeCardId ? products.find((p) => p.id === activeCardId) ?? null : null;

  return (
    <Section id="productos" stagger={0} className="relative overflow-hidden bg-surface py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.65]"
        style={{
          backgroundImage: `url(${assetUrl("/assets/palette-reference.png")})`,
        }}
      />
      <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8">
        <motion.h2
          className="font-display text-3xl font-bold text-pnw-breeze sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {copy.productos.title}
        </motion.h2>
        <motion.p
          className="mt-4 max-w-xl text-lg text-pnw-breeze/85"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          {copy.productos.intro}
        </motion.p>
        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => {
            const isActive = activeCardId === product.id;
            return (
              <motion.li
                key={product.id}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-field-notes/60 border-trail-dust/40 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isActive
                    ? "scale-[1.08] z-20 shadow-2xl shadow-black/20 border-moss-pillow/50"
                    : "scale-100 opacity-100"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                onMouseEnter={() => {
                  if (!activeCardId) {
                    setActiveCardId(product.id);
                  }
                }}
                onMouseLeave={() => setActiveCardId(null)}
              >
              {/* Media preview: pattern base + product image/video; opacity by active state */}
              <div className="relative h-24 w-full flex-shrink-0 overflow-hidden">
                <Image
                  src={assetUrl("/assets/pattern-bakery.png")}
                  alt=""
                  fill
                  loading="lazy"
                  className="object-cover opacity-20"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-b from-field-notes/40 to-field-notes/80" />
                {product.mediaPath && product.mediaType === "video" ? (
                  <video
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? "opacity-100" : "opacity-30"}`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-hidden
                  >
                    <source src={assetUrl(product.mediaPath)} type="video/mp4" />
                  </video>
                ) : product.mediaPath && product.mediaType === "image" ? (
                  <img
                    src={assetUrl(product.mediaPath)}
                    alt={product.name}
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? "opacity-100" : "opacity-30"}`}
                    aria-hidden
                  />
                ) : null}
              </div>
              <div className="flex flex-1 flex-col p-6">
                {product.label && (
                  <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-moss-pillow/80">
                    {product.label}
                  </span>
                )}
                <ProductIcon id={product.id} />
                <h3 className="font-display text-xl font-bold text-pnw-breeze">
                  {product.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-pnw-breeze/80">
                  {product.description}
                </p>
                <p className="mt-4 font-semibold text-moss-pillow">
                  {formatPrice(product.price_ars)}
                </p>
              </div>
            </motion.li>
          );
          })}
        </ul>
      </div>

      {/* Centered focus overlay on card hover */}
      <AnimatePresence>
        {hoveredProduct && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              aria-hidden
              style={{ pointerEvents: "none" }}
            />
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{ pointerEvents: "none" }}
            >
              <motion.div
                className="w-full max-w-2xl overflow-hidden rounded-2xl bg-field-notes/95 shadow-2xl"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <p className="px-6 pt-6 text-center font-display text-2xl font-bold text-pnw-breeze sm:text-3xl">
                  {hoveredProduct.name}
                </p>
                <div className="relative aspect-video w-full overflow-hidden">
                  {hoveredProduct.mediaType === "video" && hoveredProduct.mediaPath ? (
                    <OverlayVideo src={hoveredProduct.mediaPath} />
                  ) : hoveredProduct.mediaType === "image" && hoveredProduct.mediaPath ? (
                    <img
                      src={assetUrl(hoveredProduct.mediaPath)}
                      alt={hoveredProduct.name}
                      className="h-full w-full object-cover"
                      aria-hidden
                    />
                  ) : null}
                </div>
                <p className="px-6 pb-6 text-center text-pnw-breeze/90">
                  {hoveredProduct.description}
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Section>
  );
}
