"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { OrnamentalRule } from "@/components/ui/OrnamentalRule";
import { seasonMilestones } from "@/lib/stats";

export function SeasonTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const cardOpacity0 = useTransform(
    scrollYProgress,
    [0, 0.12, 0.28, 0.34],
    [1, 1, 0.15, 0],
  );
  const cardOpacity1 = useTransform(
    scrollYProgress,
    [0.28, 0.4, 0.6, 0.72],
    [0, 0.15, 1, 0.15],
  );
  const cardOpacity2 = useTransform(
    scrollYProgress,
    [0.64, 0.76, 1, 1],
    [0, 0.15, 1, 1],
  );
  const cardOpacities = [cardOpacity0, cardOpacity1, cardOpacity2];

  if (reduceMotion) {
    return (
      <section className="border-y border-[var(--color-border-subtle)] px-4 py-10 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-[11px] tracking-[2.5px] text-[var(--color-brass)] uppercase">
            Road to Stockholm
          </p>
          <h2 className="mb-10 text-[clamp(24px,6vw,30px)] leading-none font-light tracking-[1px] text-[var(--color-sail)]">
            Season 2026
          </h2>
          <div className="space-y-4">
            {seasonMilestones.map((milestone) => (
              <article
                key={milestone.title}
                className="border border-[var(--color-card-border)] p-4"
              >
                <p className="mb-1 text-[12px] tracking-[2px] text-[var(--color-brass)] uppercase">
                  {milestone.date}
                </p>
                <h3 className="text-[clamp(17px,4vw,20px)] tracking-[0.5px] text-[var(--color-sail)]">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-[16px] leading-[1.65] text-[var(--color-text-muted)]">
                  {milestone.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative h-[220vh] border-y border-[var(--color-border-subtle)]"
      aria-label="Season 2026 timeline"
    >
      <div className="sticky top-0 flex h-screen items-center px-4 sm:px-6">
        <div className="mx-auto grid w-full max-w-5xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative border border-[var(--color-card-border)] bg-[var(--color-bg)] p-6 sm:p-8">
            <OrnamentalRule className="mb-4" />
            <p className="mb-3 text-[11px] tracking-[2.5px] text-[var(--color-brass)] uppercase">
              Road to Stockholm
            </p>
            <h2 className="text-[clamp(24px,6vw,30px)] leading-none font-light tracking-[1px] text-[var(--color-sail)]">
              Season 2026
            </h2>
            <p className="mt-4 text-[16px] leading-[1.65] text-[var(--color-text-muted)]">
              From the Spring Cup to the World Championship on home waters —
              scroll to follow the campaign.
            </p>
            <div className="mt-8 space-y-5 border-l border-[var(--color-border)] pl-5">
              {seasonMilestones.map((milestone) => (
                <div key={milestone.date}>
                  <p className="text-[12px] tracking-[2px] text-[var(--color-brass)] uppercase">
                    {milestone.date}
                  </p>
                  <p className="mt-1 text-[14px] text-[var(--color-sail)]">
                    {milestone.title}
                  </p>
                </div>
              ))}
            </div>
            <OrnamentalRule className="mt-8" />
          </div>

          <div className="relative min-h-[280px] sm:min-h-[320px]">
            {seasonMilestones.map((milestone, index) => (
              <motion.article
                key={milestone.title}
                style={{ opacity: cardOpacities[index] }}
                className="absolute inset-0 border border-[var(--color-card-border)] bg-[var(--color-bg)] p-5 sm:p-6"
              >
                <p className="mb-2 text-[12px] tracking-[2px] text-[var(--color-brass)] uppercase">
                  {milestone.date}
                </p>
                <h3 className="text-[clamp(20px,4vw,24px)] tracking-[0.5px] text-[var(--color-sail)]">
                  {milestone.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.65] text-[var(--color-text-muted)]">
                  {milestone.body}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
