"use client";

/**
 * Hand-drawn style section divider – bread loaf and organic line.
 * Aligns with brand: organic playful icons, intentional accents.
 */
export function DividerLine() {
  return (
    <div className="flex justify-center py-10" aria-hidden>
      <svg
        width="64"
        height="40"
        viewBox="0 0 64 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-moss-pillow/50"
      >
        {/* Simple bread loaf outline – hand-drawn feel */}
        <path
          d="M12 20c0-4 4-8 10-8s10 4 10 8c0 2-1 6-4 8H16c-3-2-4-6-4-8z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M18 18v6M26 18v6M22 16v8"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        {/* Wavy line */}
        <path
          d="M4 32c6-2 10-2 16 0 6 2 10 2 16 0 6-2 10-2 16 0 6 2 10 2 16 0"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
