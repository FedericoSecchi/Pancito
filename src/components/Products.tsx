"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { products } from "@/data/products";
import { copy } from "@/data/copy";

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
  const isRoll = id === "rolls";
  const isCompota = id === "compotas";
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

export function Products() {
  return (
    <Section id="productos" stagger={0} className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
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
          {products.map((product, i) => (
            <motion.li
              key={product.id}
              className="group flex flex-col rounded-2xl border border-trail-dust/40 bg-field-notes/60 p-6 transition-all duration-300 hover:border-moss-pillow/40 hover:shadow-lg hover:shadow-pnw-breeze/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -2 }}
            >
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
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
