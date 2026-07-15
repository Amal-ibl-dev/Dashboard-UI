import { Zap, BookOpen, ClipboardList } from "lucide-react";

export const STATS = [
  { id: "presentation", label: "Presentation", value: 8, total: 20, icon: Zap, iconBg: "bg-accent" },
  { id: "examination", label: "Examination", value: 3, total: 10, icon: BookOpen, iconBg: "bg-success" },
  { id: "reports", label: "Reports", value: 6, total: 15, icon: ClipboardList, iconBg: "bg-maintextcolor dark:bg-zinc-700" },
];

export const PROGRESS = [
  { label: "Done", value: 45, bar: "bg-accent" },
  { label: "On Progress", value: 85, bar: "bg-success" },
  // NOTE: was "dark:bg-maintextcolor" — but maintextcolor already flips to
  // white in dark mode (it's aliased to --color-text), so that rendered a
  // solid white bar in dark mode instead of a muted gray. Hardcoded here
  // to match the intended muted look in both themes.
  { label: "To Do", value: 32, bar: "bg-zinc-900 dark:bg-zinc-500" },
];