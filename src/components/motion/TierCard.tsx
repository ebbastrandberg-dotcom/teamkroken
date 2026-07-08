"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

type TierCardProps = {
  children: ReactNode;
  className?: string;
};

export function TierCard({ children, className = "" }: TierCardProps) {
  const reduceMotion = useReducedMotion();
  const cardClassName = `glass flex h-full flex-col p-3.5 ${className}`.trim();

  if (reduceMotion) {
    return <article className={cardClassName}>{children}</article>;
  }

  return (
    <motion.article
      className={cardClassName}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.article>
  );
}
