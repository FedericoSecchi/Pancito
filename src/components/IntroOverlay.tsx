"use client";

import { useState, useEffect } from "react";
import { assetUrl } from "@/lib/assetUrl";

const TITLE_DELAY_MS = 400;
const FADE_OUT_START_MS = 2200;
const FADE_OUT_DURATION_MS = 900;

export function IntroOverlay({ onComplete }: { onComplete?: () => void }) {
  const [titleVisible, setTitleVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(true);

  useEffect(() => {
    const showTitle = setTimeout(() => setTitleVisible(true), TITLE_DELAY_MS);
    return () => clearTimeout(showTitle);
  }, []);

  useEffect(() => {
    const startFade = setTimeout(() => setOverlayVisible(false), FADE_OUT_START_MS);
    const complete = setTimeout(
      () => onComplete?.(),
      FADE_OUT_START_MS + FADE_OUT_DURATION_MS
    );
    return () => {
      clearTimeout(startFade);
      clearTimeout(complete);
    };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      style={{
        opacity: overlayVisible ? 1 : 0,
        transition: `opacity ${FADE_OUT_DURATION_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
      }}
      aria-live="polite"
      aria-label="Cargando"
    >
      {/* Video layer: crossfade behind the title */}
      <div className="absolute inset-0 h-full w-full">
        <video
          autoPlay
          muted
          playsInline
          className="h-full w-full object-cover"
          src={assetUrl("/assets/video/Hono.mp4")}
          aria-hidden
        />
      </div>

      {/* Title layer: fixed, centered, no position animation */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <h1
          className={`font-display text-4xl font-extrabold tracking-tight text-field-notes sm:text-5xl md:text-6xl ${
            titleVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transition: "opacity 1200ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          Pancito
        </h1>
      </div>
    </div>
  );
}
