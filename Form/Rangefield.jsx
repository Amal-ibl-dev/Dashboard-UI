import React, { useId } from "react";
import { FieldShell } from "./FieldShell";

/**
 * RangeField — styled slider input showing the current value.
 * Requires the `.range-slider` thumb styles defined in index.css.
 *
 * Props: label, description, error, min, max, step, value, onChange(number),
 * formatValue(value) => string, wrapperClassName.
 */
export function RangeField({
  label,
  description,
  error,
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  formatValue = (v) => v,
  wrapperClassName = "",
}) {
  const fieldId = useId();
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <FieldShell id={fieldId} error={error} className={wrapperClassName}>
      <div className="flex items-center justify-between">
        {label && (
          <label htmlFor={fieldId} className="text-sm font-medium text-[var(--color-foreground)]">
            {label}
          </label>
        )}
        <span className="rounded-md bg-[var(--color-primary-soft)] px-2 py-0.5 text-xs font-semibold text-[var(--color-primary)]">
          {formatValue(value)}
        </span>
      </div>
      {description && <p className="-mt-1 text-xs text-[var(--color-muted-text)]">{description}</p>}
      <input
        id={fieldId}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange?.(Number(e.target.value))}
        className="range-slider h-1.5 w-full cursor-pointer appearance-none rounded-full outline-none"
        style={{
          background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${percent}%, var(--color-border) ${percent}%, var(--color-border) 100%)`,
        }}
      />
      <div className="flex justify-between text-[10px] text-[var(--color-muted-text)]">
        <span>{formatValue(min)}</span>
        <span>{formatValue(max)}</span>
      </div>
    </FieldShell>
  );
}

export default RangeField;