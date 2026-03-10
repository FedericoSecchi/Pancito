/**
 * Build WhatsApp order message from cart.
 * Kept modular for future checkout/subscription integration.
 */

import type { Product } from "@/data/products";
import { WHATSAPP_NUMBER } from "@/data/site";

export interface CartItem {
  product: Product;
  quantity: number;
}

import { copy } from "@/data/copy";

export function buildWhatsAppOrderMessage(items: CartItem[]): string {
  const lines = items
    .filter((i) => i.quantity > 0)
    .map((i) => `- ${i.quantity} ${i.product.name}`);
  const body = [
    copy.whatsapp.messageIntro,
    ...lines,
    copy.whatsapp.messageThanks,
  ].join("\n");
  return encodeURIComponent(body);
}

export function getWhatsAppOrderUrl(items: CartItem[]): string {
  const message = buildWhatsAppOrderMessage(items);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}
