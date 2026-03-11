"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ANIMATION_DURATION_MS = 1800;
const FADE_OUT_DURATION_MS = 500;
const FADE_OUT_START_MS = 1800;

export function OvenLoader({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const [phase, setPhase] = useState<"animating" | "fading">("animating");

  useEffect(() => {
    const startFade = setTimeout(() => setPhase("fading"), FADE_OUT_START_MS);
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
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-surface"
      initial={{ opacity: 1 }}
      animate={{
        opacity: phase === "fading" ? 0 : 1,
      }}
      transition={{
        duration: FADE_OUT_DURATION_MS / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
      aria-live="polite"
      aria-label="Cargando"
    >
      <svg
        width="160"
        height="120"
        viewBox="0 0 160 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <defs>
          <filter id="steam-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>

        {/* Oven body */}
        <rect
          x="20"
          y="40"
          width="120"
          height="70"
          rx="8"
          fill="#8B7355"
          stroke="#6B5344"
          strokeWidth="2"
        />

        {/* Oven inner cavity */}
        <rect
          x="28"
          y="48"
          width="104"
          height="54"
          rx="4"
          fill="#3D2C1E"
        />

        {/* Oven door - rotates open from bottom */}
        <motion.g
          style={{ transformOrigin: "80px 102px" }}
          initial={{ rotate: 0 }}
          animate={{ rotate: -70 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <rect
            x="28"
            y="54"
            width="104"
            height="48"
            rx="4"
            fill="#A08060"
            stroke="#6B5344"
            strokeWidth="1.5"
          />
          <rect
            x="38"
            y="64"
            width="84"
            height="28"
            rx="2"
            fill="#2A1F18"
            opacity="0.9"
          />
        </motion.g>

        {/* Steam - 3 circles rising with blur */}
        <g filter="url(#steam-blur)">
          <motion.circle
            cx="55"
            cy="52"
            r="12"
            fill="white"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.35, 0],
              y: [0, -25, -45],
            }}
            transition={{
              duration: 1.4,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
          <motion.circle
            cx="80"
            cy="48"
            r="14"
            fill="white"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.4, 0],
              y: [0, -30, -55],
            }}
            transition={{
              duration: 1.4,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
          <motion.circle
            cx="105"
            cy="52"
            r="11"
            fill="white"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.3, 0],
              y: [0, -22, -42],
            }}
            transition={{
              duration: 1.4,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </g>
      </svg>
    </motion.div>
  );
}
