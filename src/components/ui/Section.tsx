import { type ReactNode } from "react";

type SectionProps = {
  id?: string;
  tone?: "base" | "muted";
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
};

const toneClasses = {
  base: "bg-[var(--color-bg)]",
  muted: "bg-[var(--color-section-muted)]",
};

export function Section({
  id,
  tone = "base",
  children,
  className = "",
  "aria-label": ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`border-t border-[var(--color-border-subtle)] px-4 py-10 sm:px-6 sm:py-12 ${toneClasses[tone]} ${className}`}
    >
      {children}
    </section>
  );
}
