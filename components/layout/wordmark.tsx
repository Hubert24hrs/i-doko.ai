import { cn } from "@/lib/utils";

// Original monoline wordmark drawn from primitives. Width follows the height class.
export function Wordmark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 127 32"
      role="img"
      aria-label="i-doko.ai"
      className={cn("h-6 w-auto", className)}
      fill="none"
    >
      <g stroke="currentColor" strokeWidth="4.4">
        <path d="M2.2 12v18" />
        <path d="M8 21h8.5" />
        <circle cx="27" cy="21" r="6.8" />
        <path d="M33.8 2v28" />
        <circle cx="47.5" cy="21" r="6.8" />
        <path d="M61.2 2v28" />
        <path d="M61.2 23.5 71 12" />
        <path d="M64.8 19.5 72 30" />
        <circle cx="83.5" cy="21" r="6.8" />
        <circle cx="110.5" cy="21" r="6.8" />
        <path d="M117.3 12v18" />
        <path d="M124.2 12v18" />
      </g>
      <g fill="currentColor">
        <rect x="0" y="3.6" width="4.4" height="4.4" />
        <rect x="122" y="3.6" width="4.4" height="4.4" />
      </g>
      <rect x="95" y="25.6" width="4.4" height="4.4" fill="var(--accent)" />
    </svg>
  );
}
