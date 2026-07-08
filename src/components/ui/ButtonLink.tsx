import Link from "next/link";
import { type ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
  children: ReactNode;
  external?: boolean;
  onClick?: () => void;
};

export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
  external = false,
  onClick,
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center px-5 py-[10px] text-[13px] font-semibold uppercase tracking-[3px] transition-[filter] duration-150";

  const variants = {
    primary:
      "border-none bg-[var(--color-brass)] text-[var(--color-btn-text)] hover:brightness-110",
    secondary:
      "glass border border-[var(--color-ghost-border)] text-[var(--color-brass)] hover:brightness-110",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
