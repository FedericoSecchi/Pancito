/**
 * Hand-drawn style divider for section rhythm.
 * Aligns with brand graphic language: organic, simple line.
 */
export function DividerLine() {
  return (
    <div className="flex justify-center py-8" aria-hidden>
      <svg
        width="80"
        height="24"
        viewBox="0 0 80 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-moss-pillow/40"
      >
        <path
          d="M4 12c4-2 8-2 12 0 4 2 8 2 12 0 4-2 8-2 12 0 4 2 8 2 12 0 4-2 8-2 12 0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
