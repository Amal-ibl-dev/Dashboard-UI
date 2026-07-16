import React, { useId, forwardRef } from "react";
import { ChevronDown } from "lucide-react";
import { FieldShell, controlBase, controlStateClasses } from "./FieldShell";

/**
 * SelectField — standard styled native <select> dropdown.
 *
 * Props: label, description, error, required, options ({value, label}[]),
 * placeholder, wrapperClassName, plus any native <select> props.
 */
export const SelectField = forwardRef(
  (
    {
      label,
      description,
      error,
      required,
      className = "",
      wrapperClassName = "",
      options = [],
      placeholder = "Select an option",
      id,
      ...rest
    },
    ref
  ) => {
    const autoId = useId();
    const fieldId = id || autoId;

    return (
      <FieldShell
        id={fieldId}
        label={label}
        description={description}
        error={error}
        required={required}
        className={wrapperClassName}
      >
        <div className="relative">
          <select
            ref={ref}
            id={fieldId}
            aria-invalid={!!error}
            defaultValue=""
            className={`${controlBase} ${controlStateClasses(
              error
            )} appearance-none pr-9 ${className}`}
            {...rest}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--color-muted-text)]"
          />
        </div>
      </FieldShell>
    );
  }
);
SelectField.displayName = "SelectField";

export default SelectField;