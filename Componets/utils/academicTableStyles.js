// export const TABLE_CARD =
//   "bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-100 dark:border-zinc-800 shadow-sm shadow-zinc-100 dark:shadow-black/10 transition-colors duration-300";

// export const TABLE_HEADER =
//   "text-left text-zinc-400 dark:text-zinc-500 font-medium";

// export const TABLE_CELL =
//   "py-3.5 pr-4";

// export const ACTION_BUTTON = {
//   primary:
//     "h-8 px-4 rounded-full text-xs font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors",

//   secondary:
//     "h-8 px-4 rounded-full text-xs font-medium bg-orange-50 dark:bg-orange-500/10 text-orange-500 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-500/20 transition-colors",
// };

// Pulls directly from the --color-* variables defined in :root / .dark
// inside index.css, using Tailwind's arbitrary-value syntax: bg-[var(--x)].
// Change a color once in index.css and every class below updates with it.

export const TABLE_CARD =
  "bg-[var(--color-surface)] text-[var(--color-text)] rounded-3xl p-6 " +
  "border border-[var(--color-border)] shadow-sm shadow-zinc-100 dark:shadow-black/10 " +
  "transition-colors duration-300";

export const TABLE_HEADER = "text-left text-[var(--color-text-muted)] font-medium";

export const TABLE_CELL = "py-3.5 pr-4";

export const ACTION_BUTTON = {
  primary:
    "h-8 px-4 rounded-full text-xs font-medium " +
    "bg-[var(--color-primary)] text-[var(--color-white)] hover:opacity-90 transition-opacity",

  secondary:
    "h-8 px-4 rounded-full text-xs font-medium " +
    "bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/20 transition-colors",
};