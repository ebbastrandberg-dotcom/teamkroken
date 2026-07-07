"use client";

import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { Reveal } from "@/components/motion/Reveal";
import { teamStats } from "@/lib/stats";

export function TeamStats() {
  return (
    <Reveal>
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 border-t border-[var(--color-border-subtle)] pt-10 lg:grid-cols-4">
        {teamStats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.08} className="text-center sm:text-left">
            <p className="text-[clamp(28px,6vw,36px)] leading-none font-light tracking-[1px] text-[var(--color-brass)]">
              <AnimatedCounter value={stat.value} />
            </p>
            <p className="mt-2 text-[14px] leading-[1.5] text-[var(--color-text-muted)]">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </Reveal>
  );
}
