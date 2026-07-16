import React, { useId, forwardRef } from "react";

/**
 * ToggleField — a modern iOS-style toggle/switch component.
 * Props: label, description, error, checked, onChange(nextBool), disabled.
 */
export const ToggleField = forwardRef(
  ({ label, description, error, checked, onChange, id, disabled, className = "", ...rest }, ref) => {
    const autoId = useId();
    const fieldId = id || autoId;
    return (
      <div className={`flex items-start justify-between gap-4 ${className}`}>
        <div className="flex flex-col gap-0.5">
          {label && (
            <label htmlFor={fieldId} className="text-sm font-medium text-[var(--color-foreground)]">
              {label}
            </label>
          )}
          {description && <p className="text-xs text-[var(--color-muted-text)]">{description}</p>}
          {error && <p className="text-xs font-medium text-[var(--color-danger)]">{error}</p>}
        </div>
        <button
          ref={ref}
          id={fieldId}
          type="button"
          role="switch"
          aria-checked={checked}
          disabled={disabled}
          onClick={() => onChange?.(!checked)}
          className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-ring)]/25 disabled:cursor-not-allowed disabled:opacity-50 ${
            checked ? "bg-[var(--color-primary)]" : "bg-[var(--color-border-strong)]"
          }`}
          {...rest}
        >
          <span
            className={`inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-sm transition-transform duration-200 ${
              checked ? "translate-x-[22px]" : "translate-x-[3px]"
            }`}
          />
        </button>
      </div>
    );
  }
);
ToggleField.displayName = "ToggleField";

export default ToggleField;