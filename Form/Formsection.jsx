import React from "react";

/**
 * FormSection — a labeled section wrapper (eyebrow + title + description on
 * the left, fields on the right) used to organize the showcase form.
 */
export function FormSection({ eyebrow, title, description, children }) {
  return (
    <section className="flex flex-col gap-6 border-b border-[var(--color-border)] py-8 first:pt-0 last:border-none last:pb-0 lg:flex-row lg:gap-12">
      <div className="lg:w-64 lg:shrink-0">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-1 text-base font-semibold text-[var(--color-foreground)]">{title}</h2>
        {description && (
          <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted-text)]">{description}</p>
        )}
      </div>
      <div className="flex-1">{children}</div>
    </section>
  );
}

export default FormSection;