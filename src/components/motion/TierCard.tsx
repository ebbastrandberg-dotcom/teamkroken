"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

type TierCardProps = {
  children: ReactNode;
};

export function TierCard({ children }: TierCardProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <article className="glass p-3.5">
        {children}
      </article>
    );
  }

  return (
    <motion.article
      className="glass p-3.5"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.article>
  );
}
