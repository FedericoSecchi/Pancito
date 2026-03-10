"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { products } from "@/data/products";

function formatPrice(n: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
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
          Productos
        </motion.h2>
        <motion.p
          className="mt-4 max-w-xl text-lg text-pnw-breeze/85"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Pan de masa madre, focaccia, rolls y compotas. Todo con fermentación lenta y pequeñas tandas.
        </motion.p>
        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <motion.li
              key={product.id}
              className="flex flex-col rounded-2xl border border-trail-dust/40 bg-field-notes/50 p-6 transition-shadow hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
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
