"use client";

/**
 * Subtle hand-drawn pattern background for sections.
 * Uses the bakery pattern asset with low opacity for texture without clutter.
 */
import { assetUrl } from "@/lib/assetUrl";

interface PatternBackgroundProps {
  className?: string;
  opacity?: number;
}

export function PatternBackground({ className = "", opacity = 0.04 }: PatternBackgroundProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 bg-cover bg-center bg-repeat ${className}`}
      style={{
        backgroundImage: `url(${assetUrl("/assets/pattern-bakery.png")})`,
        opacity,
      }}
    />
  );
}
