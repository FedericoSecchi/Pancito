"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Button } from "./Button";
import { products } from "@/data/products";
import { getWhatsAppOrderUrl, type CartItem } from "@/lib/whatsapp";

function formatPrice(n: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

export function OrderFlow() {
  const [cart, setCart] = useState<CartItem[]>(
    products.map((product) => ({ product, quantity: 0 }))
  );

  const updateQty = useCallback((productId: string, delta: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item
      )
    );
  }, []);

  const totalItems = cart.reduce((acc, i) => acc + i.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, i) => acc + i.product.price_ars * i.quantity,
    0
  );
  const whatsappUrl = getWhatsAppOrderUrl(cart);

  return (
    <Section id="pedidos" stagger={0} className="bg-moss-pillow py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <motion.h2
          className="font-display text-3xl font-bold text-field-notes sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Armá tu pedido
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-field-notes/90"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Horneamos en pequeñas tandas. Elegí tus productos y armá tu pedido por WhatsApp.
        </motion.p>

        <ul className="mt-10 space-y-4">
          {cart.map((item, i) => (
            <motion.li
              key={item.product.id}
              className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-pnw-breeze/20 px-4 py-4 sm:px-6"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <div>
                <p className="font-display font-semibold text-field-notes">
                  {item.product.name}
                </p>
                <p className="text-sm text-field-notes/80">
                  {formatPrice(item.product.price_ars)} c/u
                </p>
              </div>
              <div className="flex items-center gap-3">
                <motion.button
                  type="button"
                  aria-label="Restar"
                  onClick={() => updateQty(item.product.id, -1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-field-notes/20 text-field-notes transition-colors hover:bg-field-notes/30 disabled:opacity-40"
                  whileTap={{ scale: 0.92 }}
                >
                  −
                </motion.button>
                <span className="min-w-[2rem] text-center font-display text-lg font-bold text-field-notes">
                  {item.quantity}
                </span>
                <motion.button
                  type="button"
                  aria-label="Sumar"
                  onClick={() => updateQty(item.product.id, 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-field-notes/20 text-field-notes transition-colors hover:bg-field-notes/30"
                  whileTap={{ scale: 0.92 }}
                >
                  +
                </motion.button>
              </div>
            </motion.li>
          ))}
        </ul>

        <motion.div
          className="mt-10 flex flex-col items-center gap-6 rounded-2xl bg-pnw-breeze/30 p-6 sm:flex-row sm:justify-between sm:gap-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-center sm:text-left">
            <p className="text-field-notes/90">
              {totalItems} {totalItems === 1 ? "producto" : "productos"}
            </p>
            <p className="font-display text-xl font-bold text-field-notes">
              Total {formatPrice(totalPrice)}
            </p>
          </div>
          {totalItems > 0 ? (
            <Button
              href={whatsappUrl}
              variant="primary"
              external
              className="bg-field-notes text-pnw-breeze hover:bg-trail-dust"
            >
              Enviar pedido por WhatsApp
            </Button>
          ) : (
            <span className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-field-notes/40 bg-field-notes/10 px-6 py-3.5 font-display text-lg font-semibold text-field-notes/70">
              Elegí cantidades arriba
            </span>
          )}
        </motion.div>

        {totalItems === 0 && (
          <p className="mt-4 text-center text-sm text-field-notes/70">
            Sumá cantidades y luego abrí WhatsApp para enviar tu pedido.
          </p>
        )}
      </div>
    </Section>
  );
}
