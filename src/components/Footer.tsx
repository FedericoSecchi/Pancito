"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import { copy } from "@/data/copy";

export function Footer() {
  return (
    <footer className="bg-pnw-breeze text-field-notes">
      <div className="mx-auto max-w-5xl px-6 py-3 sm:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="#" className="font-display text-2xl font-bold">
              {site.name}
            </Link>
            <p className="mt-2 max-w-xs text-sm text-field-notes/80">
              {copy.footer.tagline}
            </p>
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
              {copy.footer.seoLinks.map((link) => (
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
          className="mt-4 border-t border-field-notes/20 pt-3 text-center text-sm text-field-notes/70"
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
