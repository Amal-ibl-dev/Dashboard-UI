export default function DateCard({ day, month, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center h-16 rounded-2xl text-sm transition-colors duration-200
      ${
        active
          ? "bg-[var(--color-secondary)] text-[var(--color-white)] shadow-sm"
          : "bg-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-border)]/80"
      }`}
    >
      <span className="font-bold">{day}</span>

      <span
        className={`text-[11px] ${
          active ? "text-[var(--color-white)]/80" : "text-[var(--color-text-muted)]"
        }`}
      >
        {month}
      </span>
    </button>
  );
}