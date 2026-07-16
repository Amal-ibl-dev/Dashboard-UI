import React, { useState, useRef, useId, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { FieldShell, controlBase, controlStateClasses } from "./FieldShell";

/**
 * CustomSelectField — a custom-styled simulated dropdown for extra visual
 * flair (supports color swatches per option, animated chevron, etc).
 *
 * Props: label, description, error, required, options ({value, label, swatch?}[]),
 * value, onChange, placeholder, wrapperClassName.
 */
export function CustomSelectField({
  label,
  description,
  error,
  required,
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
  wrapperClassName = "",
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const fieldId = useId();
  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <FieldShell
      id={fieldId}
      label={label}
      description={description}
      error={error}
      required={required}
      className={wrapperClassName}
    >
      <div className="relative" ref={containerRef}>
        <button
          type="button"
          id={fieldId}
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="listbox"
          aria-expanded={open}
          className={`${controlBase} ${controlStateClasses(
            error
          )} flex items-center justify-between text-left ${
            !selected ? "text-[var(--color-muted-text)]/70" : ""
          }`}
        >
          <span className="flex items-center gap-2">
            {selected?.swatch && (
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: selected.swatch }}
              />
            )}
            {selected ? selected.label : placeholder}
          </span>
          <ChevronDown
            size={16}
            className={`text-[var(--color-muted-text)] transition-transform duration-150 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {open && (
          <ul
            role="listbox"
            className="absolute z-20 mt-2 max-h-60 w-full overflow-auto rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] p-1.5 shadow-lg shadow-black/5"
          >
            {options.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange?.(opt.value);
                    setOpen(false);
                  }}
                  className={`flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm transition-colors duration-100 ${
                    isSelected
                      ? "bg-[var(--color-primary-soft)] text-[var(--color-primary)] font-medium"
                      : "text-[var(--color-foreground)] hover:bg-[var(--color-background)]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {opt.swatch && (
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: opt.swatch }}
                      />
                    )}
                    {opt.label}
                  </span>
                  {isSelected && <Check size={14} />}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </FieldShell>
  );
}

export default CustomSelectField;