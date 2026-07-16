import React, { useState, useId, forwardRef } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FieldShell, controlBase, controlStateClasses } from "./FieldShell";

/**
 * InputField — standard <input> supporting text, email, password, tel,
 * number, and date. Password fields get a show/hide toggle icon.
 *
 * Props: label, description, error, required, icon (lucide component),
 * wrapperClassName, plus any native <input> props (value, onChange, type…).
 */
export const InputField = forwardRef(
  (
    {
      label,
      description,
      error,
      required,
      className = "",
      wrapperClassName = "",
      icon: Icon,
      type = "text",
      id,
      ...rest
    },
    ref
  ) => {
    const autoId = useId();
    const fieldId = id || autoId;
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    const resolvedType = isPassword ? (showPassword ? "text" : "password") : type;

    return (
      <FieldShell
        id={fieldId}
        label={label}
        description={description}
        error={error}
        required={required}
        className={wrapperClassName}
      >
        <div className="relative flex items-center">
          {Icon && (
            <Icon
              size={16}
              strokeWidth={2}
              className="pointer-events-none absolute left-3.5 text-[var(--color-muted-text)]"
            />
          )}
          <input
            ref={ref}
            id={fieldId}
            type={resolvedType}
            aria-invalid={!!error}
            className={`${controlBase} ${controlStateClasses(error)} ${
              Icon ? "pl-10" : ""
            } ${isPassword ? "pr-10" : ""} ${className}`}
            {...rest}
          />
          {isPassword && (
            <button
              type="button"
              tabIndex={-1}
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-3 text-[var(--color-muted-text)] transition-colors hover:text-[var(--color-foreground)]"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          )}
        </div>
      </FieldShell>
    );
  }
);
InputField.displayName = "InputField";

export default InputField;