import React, { useId, useRef, forwardRef } from "react";
import { FieldShell, controlBase, controlStateClasses } from "./FieldShell";

/**
 * TextareaField — multi-line text input with optional auto-resize.
 *
 * Props: label, description, error, required, autoResize (default true),
 * wrapperClassName, plus any native <textarea> props.
 */
export const TextareaField = forwardRef(
  (
    {
      label,
      description,
      error,
      required,
      className = "",
      wrapperClassName = "",
      autoResize = true,
      id,
      onInput,
      rows = 4,
      ...rest
    },
    ref
  ) => {
    const autoId = useId();
    const fieldId = id || autoId;
    const innerRef = useRef(null);

    const setRefs = (node) => {
      innerRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    };

    const handleInput = (e) => {
      if (autoResize && innerRef.current) {
        innerRef.current.style.height = "auto";
        innerRef.current.style.height = `${innerRef.current.scrollHeight}px`;
      }
      onInput?.(e);
    };

    return (
      <FieldShell
        id={fieldId}
        label={label}
        description={description}
        error={error}
        required={required}
        className={wrapperClassName}
      >
        <textarea
          ref={setRefs}
          id={fieldId}
          rows={rows}
          aria-invalid={!!error}
          onInput={handleInput}
          className={`${controlBase} ${controlStateClasses(
            error
          )} resize-none leading-relaxed ${className}`}
          {...rest}
        />
      </FieldShell>
    );
  }
);
TextareaField.displayName = "TextareaField";

export default TextareaField;