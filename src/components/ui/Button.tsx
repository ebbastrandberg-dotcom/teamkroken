"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({
  variant = "primary",
  className = "",
  children,
  type = "button",
  disabled,
  onClick,
  ...props
}: ButtonProps) {
  const reduceMotion = useReducedMotion();
  const base =
    "cursor-pointer px-5 py-[10px] text-[13px] font-semibold uppercase tracking-[3px] transition-[filter] duration-150";

  const variants = {
    primary:
      "border-none bg-[var(--color-brass)] text-[var(--color-btn-text)] hover:brightness-110",
    secondary:
      "glass border-[var(--color-ghost-border)] text-[var(--color-brass)] hover:brightness-110",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (reduceMotion) {
    return (
      <button
        type={type}
        className={classes}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
    >
      {children}
    </motion.button>
  );
}
