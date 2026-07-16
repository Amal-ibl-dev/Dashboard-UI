import React from "react";

/**
 * FieldShell — common label / description / error chrome wrapped around
 * every form control. Keeps spacing and typography consistent everywhere.
 */
export function FieldShell({
  id,
  label,
  description,
  error,
  required,
  className = "",
  children,
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-[var(--color-foreground)] tracking-tight"
        >
          {label}
          {required && <span className="ml-0.5 text-[var(--color-danger)]">*</span>}
        </label>
      )}
      {children}
      {error ? (
        <p className="flex items-center gap-1 text-xs font-medium text-[var(--color-danger)]">
          {error}
        </p>
      ) : description ? (
        <p className="text-xs text-[var(--color-muted-text)]">{description}</p>
      ) : null}
    </div>
  );
}

/** Shared base classes for box-style controls (input/textarea/select) */
export const controlBase =
  "w-full rounded-lg border bg-[var(--color-background)] px-3.5 py-2.5 text-sm text-[var(--color-foreground)] " +
  "placeholder:text-[var(--color-muted-text)]/70 outline-none transition-all duration-150 " +
  "disabled:cursor-not-allowed disabled:opacity-50";

/** Returns the border/ring classes for a control depending on error state */
export function controlStateClasses(error) {
  return error
    ? "border-[var(--color-danger)] focus:border-[var(--color-danger)] focus:ring-4 focus:ring-[var(--color-danger)]/10"
    : "border-[var(--color-border)] hover:border-[var(--color-border-strong)] focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-ring)]/12";
}