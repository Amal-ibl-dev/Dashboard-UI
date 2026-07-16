import React, { useId, forwardRef } from "react";
import { Check } from "lucide-react";

/**
 * CheckboxField — a single checkbox with label, description, and error state.
 * Props: label, description, error, plus any native <input type="checkbox"> props.
 */
export const CheckboxField = forwardRef(
  ({ label, description, error, className = "", id, ...rest }, ref) => {
    const autoId = useId();
    const fieldId = id || autoId;
    return (
      <div className={`flex flex-col gap-1 ${className}`}>
        <label htmlFor={fieldId} className="flex cursor-pointer items-start gap-2.5 group">
          <span className="relative mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center">
            <input
              ref={ref}
              id={fieldId}
              type="checkbox"
              className="peer h-[18px] w-[18px] shrink-0 cursor-pointer appearance-none rounded-[5px] border-2 border-[var(--color-border-strong)] bg-[var(--color-background)] transition-all duration-150 checked:border-[var(--color-primary)] checked:bg-[var(--color-primary)] focus-visible:ring-4 focus-visible:ring-[var(--color-ring)]/20 disabled:cursor-not-allowed disabled:opacity-50"
              {...rest}
            />
            <Check
              size={13}
              strokeWidth={3}
              className="pointer-events-none absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity"
            />
          </span>
          {label && (
            <span className="text-sm text-[var(--color-foreground)] select-none">{label}</span>
          )}
        </label>
        {description && (
          <p className="ml-6.5 pl-1 text-xs text-[var(--color-muted-text)]">{description}</p>
        )}
        {error && (
          <p className="ml-6.5 pl-1 text-xs font-medium text-[var(--color-danger)]">{error}</p>
        )}
      </div>
    );
  }
);
CheckboxField.displayName = "CheckboxField";

/**
 * CheckboxGroupField — a set of checkboxes for multiple selections.
 * Props: label, description, error, options ({value, label}[]), values (array),
 * onChange(nextValuesArray), columns (grid column count).
 */
export function CheckboxGroupField({
  label,
  description,
  error,
  options = [],
  values = [],
  onChange,
  columns = 1,
  wrapperClassName = "",
}) {
  const toggle = (val) => {
    if (values.includes(val)) onChange?.(values.filter((v) => v !== val));
    else onChange?.([...values, val]);
  };

  return (
    <div className={`flex flex-col gap-2.5 ${wrapperClassName}`}>
      {label && (
        <span className="text-sm font-medium text-[var(--color-foreground)]">{label}</span>
      )}
      {description && <p className="-mt-1 text-xs text-[var(--color-muted-text)]">{description}</p>}
      <div
        className="grid gap-x-4 gap-y-2.5"
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      >
        {options.map((opt) => (
          <CheckboxField
            key={opt.value}
            label={opt.label}
            checked={values.includes(opt.value)}
            onChange={() => toggle(opt.value)}
          />
        ))}
      </div>
      {error && <p className="text-xs font-medium text-[var(--color-danger)]">{error}</p>}
    </div>
  );
}

export default CheckboxField;