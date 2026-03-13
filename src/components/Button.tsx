"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
}

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  external,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-moss-pillow focus-visible:ring-offset-2";

  const variants = {
    primary:
      "relative overflow-hidden text-field-notes px-6 py-3.5 font-display text-lg active:scale-[0.98] bg-[url('/assets/palette-reference.png')] bg-cover bg-center before:absolute before:inset-0 before:bg-black/40 before:content-[''] hover:before:bg-black/25",
    secondary:
      "border-2 border-pnw-breeze text-pnw-breeze hover:bg-pnw-breeze hover:text-field-notes px-6 py-3.5 font-display text-lg",
    ghost:
      "text-pnw-breeze hover:text-leather hover:bg-pnw-breeze/10 px-4 py-2.5",
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <Link href={href} className={cls}>
        <motion.span
          className="inline-flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={cls}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
