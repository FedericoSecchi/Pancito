"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import { copy } from "@/data/copy";
import { getWhatsAppOrderUrl } from "@/lib/whatsapp";
import { Button } from "./Button";

export function Footer() {
  const whatsappUrl = getWhatsAppOrderUrl([]);

  return (
    <footer className="bg-pnw-breeze text-field-notes">
      <div className="mx-auto max-w-5xl px-6 py-14 sm:px-8 sm:py-18">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="#" className="font-display text-2xl font-bold">
              {site.name}
            </Link>
            <p className="mt-2 max-w-xs text-sm text-field-notes/80">
              {copy.footer.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button
                href={whatsappUrl}
                variant="secondary"
                external
                className="border-field-notes text-field-notes hover:bg-field-notes hover:text-pnw-breeze"
              >
                WhatsApp
              </Button>
              <Button
                href={site.instagram}
                variant="ghost"
                external
                className="text-field-notes hover:bg-field-notes/10 hover:text-field-notes"
              >
                Instagram
              </Button>
            </div>
          </div>
          <nav aria-label="Enlaces del sitio">
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {copy.footer.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-field-notes/90 underline-offset-4 transition hover:text-field-notes hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <motion.div
          className="mt-12 border-t border-field-notes/20 pt-8 text-center text-sm text-field-notes/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} {site.name}. {copy.footer.rights}</p>
        </motion.div>
      </div>
    </footer>
  );
}
