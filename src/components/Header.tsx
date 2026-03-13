"use client";

import Link from "next/link";
import { site } from "@/data/site";
import { copy } from "@/data/copy";
import { Button } from "./Button";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full overflow-hidden border-b border-pnw-breeze/10 bg-field-notes/95 backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-0 bg-[url('/assets/process-illustrations.png')] bg-cover bg-center opacity-20" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-4 sm:px-8">
        <div className="flex items-center justify-between">
          <Link href="#" className="font-display text-xl font-bold text-pnw-breeze">
            {site.name}
          </Link>
          <nav className="flex items-center gap-4 sm:gap-6" aria-label="Principal">
            <Link
              href="#productos"
              className="hidden text-sm font-medium text-pnw-breeze/90 transition hover:text-pnw-breeze sm:block"
            >
              {copy.header.navProductos}
            </Link>
            <Link
              href="#pedidos"
              className="hidden text-sm font-medium text-pnw-breeze/90 transition hover:text-pnw-breeze sm:block"
            >
              {copy.header.navPedidos}
            </Link>
            <Button href="#pedidos" variant="primary" className="py-2.5 text-base">
              {copy.header.cta}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
