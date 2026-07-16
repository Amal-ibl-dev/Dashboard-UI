import React, { useId } from "react";
import { Check } from "lucide-react";

/**
 * RadioGroupField — radio buttons in two visual variants:
 *   variant="classic" → traditional circular radios
 *   variant="cards"   → modern selectable tile cards (great for pricing plans)
 *
 * Props: label, description, error, options, value, onChange(value), name,
 * variant, columns (for "cards" grid), wrapperClassName.
 *
 * Card option shape: { value, label, description?, price?, priceSuffix?,
 * badge?, features?: string[] }
 */
export function RadioGroupField({
  label,
  description,
  error,
  options = [],
  value,
  onChange,
  name,
  variant = "classic", // "classic" | "cards"
  columns = 1,
  wrapperClassName = "",
}) {
  const groupName = useId();
  const resolvedName = name || groupName;

  return (
    <div className={`flex flex-col gap-2.5 ${wrapperClassName}`}>
      {label && (
        <span className="text-sm font-medium text-[var(--color-foreground)]">{label}</span>
      )}
      {description && <p className="-mt-1 text-xs text-[var(--color-muted-text)]">{description}</p>}

      {variant === "classic" ? (
        <div className="flex flex-col gap-2.5">
          {options.map((opt) => {
            const checked = value === opt.value;
            return (
              <label key={opt.value} className="flex cursor-pointer items-start gap-2.5">
                <span className="relative mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center">
                  <input
                    type="radio"
                    name={resolvedName}
                    checked={checked}
                    onChange={() => onChange?.(opt.value)}
                    className="peer h-[18px] w-[18px] cursor-pointer appearance-none rounded-full border-2 border-[var(--color-border-strong)] bg-[var(--color-background)] transition-all duration-150 checked:border-[var(--color-primary)] focus-visible:ring-4 focus-visible:ring-[var(--color-ring)]/20"
                  />
                  <span className="pointer-events-none absolute h-2 w-2 scale-0 rounded-full bg-[var(--color-primary)] transition-transform duration-150 peer-checked:scale-100" />
                </span>
                <span className="flex flex-col">
                  <span className="text-sm text-[var(--color-foreground)]">{opt.label}</span>
                  {opt.description && (
                    <span className="text-xs text-[var(--color-muted-text)]">{opt.description}</span>
                  )}
                </span>
              </label>
            );
          })}
        </div>
      ) : (
        <div
          className="grid gap-3"
          style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
        >
          {options.map((opt) => {
            const checked = value === opt.value;
            return (
              <label
                key={opt.value}
                className={`relative flex cursor-pointer flex-col gap-1 rounded-xl border-2 p-4 transition-all duration-150 ${
                  checked
                    ? "border-[var(--color-primary)] bg-[var(--color-primary-soft)] shadow-sm"
                    : "border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-border-strong)]"
                }`}
              >
                <input
                  type="radio"
                  name={resolvedName}
                  checked={checked}
                  onChange={() => onChange?.(opt.value)}
                  className="sr-only"
                />
                {opt.badge && (
                  <span className="absolute -top-2.5 right-4 rounded-full bg-[var(--color-primary)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                    {opt.badge}
                  </span>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[var(--color-foreground)]">
                    {opt.label}
                  </span>
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-150 ${
                      checked
                        ? "border-[var(--color-primary)] bg-[var(--color-primary)]"
                        : "border-[var(--color-border-strong)]"
                    }`}
                  >
                    {checked && <Check size={12} strokeWidth={3} className="text-white" />}
                  </span>
                </div>
                {opt.price && (
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="text-2xl font-bold tracking-tight text-[var(--color-foreground)]">
                      {opt.price}
                    </span>
                    {opt.priceSuffix && (
                      <span className="text-xs text-[var(--color-muted-text)]">{opt.priceSuffix}</span>
                    )}
                  </div>
                )}
                {opt.description && (
                  <p className="mt-0.5 text-xs leading-relaxed text-[var(--color-muted-text)]">
                    {opt.description}
                  </p>
                )}
                {opt.features && (
                  <ul className="mt-2 flex flex-col gap-1.5 border-t border-[var(--color-border)] pt-2.5">
                    {opt.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-1.5 text-xs text-[var(--color-foreground)]"
                      >
                        <Check size={12} className="shrink-0 text-[var(--color-primary)]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </label>
            );
          })}
        </div>
      )}
      {error && <p className="text-xs font-medium text-[var(--color-danger)]">{error}</p>}
    </div>
  );
}

export default RadioGroupField;