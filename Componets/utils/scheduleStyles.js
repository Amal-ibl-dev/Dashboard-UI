// Pulls directly from the --color-* variables defined in :root / .dark
// inside index.css, using Tailwind's arbitrary-value syntax: bg-[var(--x)].

export const SCHEDULE_CARD =
  "bg-[var(--color-surface)] text-[var(--color-text)] rounded-3xl p-6 " +
  "border border-[var(--color-border)] shadow-sm shadow-zinc-100 dark:shadow-black/10 " +
  "transition-colors duration-300";

export const ICON_BUTTON =
  "flex items-center justify-center w-9 h-9 rounded-full " +
  "bg-[var(--color-border)] text-[var(--color-text-muted)] " +
  "hover:text-[var(--color-text)] hover:bg-[var(--color-border)]/80 transition-colors shrink-0";

export const HEADER_BUTTON =
  "flex items-center justify-center w-8 h-8 rounded-full " +
  "text-[var(--color-text-muted)] hover:text-[var(--color-text)] " +
  "hover:bg-[var(--color-border)] transition-colors shrink-0";