// Pulls directly from the --color-* variables defined in :root / .dark
// inside index.css, using Tailwind's arbitrary-value syntax: bg-[var(--x)].

export const CHART_CARD =
  "bg-[var(--color-surface)] text-[var(--color-text)] rounded-3xl p-6 " +
  "border border-[var(--color-border)] shadow-sm shadow-zinc-100 dark:shadow-black/10 " +
  "transition-colors duration-300";

export const LEGEND_ITEM = "flex items-center gap-2 text-sm text-[var(--color-text-muted)]";

export const ICON_BUTTON =
  "flex items-center justify-center w-9 h-9 rounded-full " +
  "bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] " +
  "hover:bg-[var(--color-secondary)]/20 transition-colors";

export const CHART_LABEL =
  "absolute left-1/2 -translate-x-1/2 -top-1 z-10 " +
  "bg-[var(--color-secondary)] text-[var(--color-white)] text-xs font-semibold " +
  "px-3 py-1.5 rounded-lg shadow-md";