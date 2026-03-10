"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import { Button } from "./Button";
import { getWhatsAppOrderUrl } from "@/lib/whatsapp";

export function Header() {
  const whatsappUrl = getWhatsAppOrderUrl([]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-pnw-breeze/10 bg-field-notes/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="#" className="font-display text-xl font-bold text-pnw-breeze">
          {site.name}
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6" aria-label="Principal">
          <Link
            href="#productos"
            className="hidden text-sm font-medium text-pnw-breeze/90 transition hover:text-pnw-breeze sm:block"
          >
            Productos
          </Link>
          <Link
            href="#pedidos"
            className="hidden text-sm font-medium text-pnw-breeze/90 transition hover:text-pnw-breeze sm:block"
          >
            Pedidos
          </Link>
          <Button
            href={whatsappUrl}
            variant="primary"
            external
            className="py-2.5 text-base"
          >
            Pedir por WhatsApp
          </Button>
        </nav>
      </div>
    </header>
  );
}
