"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Button } from "./Button";
import { products } from "@/data/products";
import { copy } from "@/data/copy";
import { getWhatsAppOrderUrl, type CartItem } from "@/lib/whatsapp";
import { assetUrl } from "@/lib/assetUrl";

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
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  useEffect(() => {
    if (!showConfirmModal) setAnimateModal(false);
  }, [showConfirmModal]);

  useEffect(() => {
    if (showConfirmModal) {
      const id = setTimeout(() => setAnimateModal(true), 50);
      return () => clearTimeout(id);
    }
  }, [showConfirmModal]);

  const openWhatsAppOrder = useCallback(() => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setShowConfirmModal(false);
  }, [whatsappUrl]);

  return (
    <Section id="pedidos" stagger={0} className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${assetUrl("/assets/pedidos-background.png")})`,
        }}
      />
      <div className="absolute inset-0 bg-black/20" aria-hidden />
      <div className="relative z-10 mx-auto max-w-3xl px-6 sm:px-8">
        <motion.h2
          className="font-display text-3xl font-bold text-field-notes sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {copy.pedidos.title}
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-field-notes/90"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          {copy.pedidos.intro}
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
                <p className="text-sm text-field-notes/75">
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
              {totalItems} {copy.pedidos.productsLabel(totalItems)}
            </p>
            <p className="font-display text-xl font-bold text-field-notes">
              {copy.pedidos.totalLabel} {formatPrice(totalPrice)}
            </p>
          </div>
          {totalItems > 0 ? (
            <Button
              type="button"
              onClick={() => setShowConfirmModal(true)}
              className="bg-field-notes text-pnw-breeze hover:bg-trail-dust"
            >
              {copy.pedidos.ctaSend}
            </Button>
          ) : (
            <span className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-field-notes/40 bg-field-notes/10 px-6 py-3.5 font-display text-lg font-semibold text-field-notes/70">
              {copy.pedidos.ctaEmpty}
            </span>
          )}
        </motion.div>

        {totalItems === 0 && (
          <p className="mt-4 text-center text-sm text-field-notes/75">
            {copy.pedidos.hintEmpty}
          </p>
        )}
      </div>

      {/* Confirmation modal before sending to WhatsApp */}
      {showConfirmModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-modal-title"
        >
          <div className="max-w-md w-full rounded-2xl bg-surface p-8 text-center shadow-xl">
            <div className="mb-6 overflow-hidden rounded-xl">
              <img
                src={assetUrl("/assets/pan-masa-madre-recipiente.png")}
                alt=""
                className={`w-full object-cover transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  animateModal ? "translate-y-0 opacity-100 blur-0" : "translate-y-5 opacity-0 blur-[8px]"
                }`}
              />
            </div>
            <h3 id="confirm-modal-title" className="font-display text-xl font-bold text-pnw-breeze">
              Este es su pedido
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-pnw-breeze/90">
              Revise su pedido antes de enviarlo. Al confirmar se abrirá WhatsApp con el mensaje listo. Solo presione enviar y coordinaremos el pago. Muchas gracias por su compra.
            </p>

            {/* Dynamic order summary */}
            <div
              className={`mt-6 transition-all duration-700 ease-out ${
                animateModal ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
              style={{ transitionDelay: animateModal ? "150ms" : "0ms" }}
            >
              <ul className="space-y-2 text-left">
                {cart
                  .filter((item) => item.quantity > 0)
                  .map((item) => (
                    <li
                      key={item.product.id}
                      className="flex justify-between text-sm text-pnw-breeze/90"
                    >
                      <span>
                        {item.quantity} × {item.product.name}
                      </span>
                      <span className="font-semibold text-field-notes">
                        {formatPrice(item.product.price_ars * item.quantity)}
                      </span>
                    </li>
                  ))}
              </ul>
              <p className="mt-3 border-t border-pnw-breeze/20 pt-3 font-display text-lg font-bold text-pnw-breeze">
                {copy.pedidos.totalLabel} {formatPrice(totalPrice)}
              </p>
            </div>

            <div className="mt-6 flex justify-center gap-4">
              <Button
                variant="primary"
                onClick={openWhatsAppOrder}
                className="bg-field-notes text-pnw-breeze hover:bg-trail-dust"
              >
                Confirmar pedido
              </Button>
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="rounded-full border-2 border-field-notes/40 bg-transparent px-6 py-3 font-display text-lg font-semibold text-field-notes transition-colors hover:bg-field-notes/10"
              >
                Volver
              </button>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
