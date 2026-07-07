import { type ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "cursor-pointer px-5 py-[9px] text-[9.5px] font-semibold uppercase tracking-[3px] transition-[filter] duration-150";

  const variants = {
    primary:
      "border-none bg-[var(--color-brass)] text-[var(--color-btn-text)] hover:brightness-110",
    secondary:
      "border border-[var(--color-ghost-border)] bg-transparent text-[var(--color-brass)] hover:brightness-110",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
