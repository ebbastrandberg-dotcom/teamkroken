"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { teamGalleryPhotos } from "@/lib/team";

const AUTOPLAY_MS = 6000;

export function TeamGallery() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = teamGalleryPhotos.length;

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + total) % total);
    },
    [total],
  );

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    if (reduceMotion || paused || total <= 1) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [index, paused, reduceMotion, total]);

  const photo = teamGalleryPhotos[index];

  return (
    <div
      className="mt-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <p className="mb-3 text-[11px] tracking-[2.5px] text-[var(--color-brass)] uppercase">
        On the water
      </p>
      <h3 className="mb-2 text-[clamp(20px,4vw,24px)] leading-none font-light tracking-[1px] text-[var(--color-sail)]">
        On the water
      </h3>
      <p className="mb-6 max-w-2xl text-[15px] leading-[1.65] text-[var(--color-text-muted)]">
        Partner brands visible alongside Team Kroken at regattas, training, and
        the road to the World Championship.
      </p>

      <figure className="glass overflow-hidden">
        <div className="relative aspect-[16/9] w-full bg-[var(--color-bg)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={photo.src}
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className={`${photo.fit === "contain" ? "object-contain" : "object-cover"} brightness-[1.03] contrast-[1.03]`}
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority={index === 0}
              />
            </motion.div>
          </AnimatePresence>

          {total > 1 ? (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous photo"
                className="glass absolute top-1/2 left-3 z-10 -translate-y-1/2 px-2.5 py-2 text-[18px] leading-none text-[var(--color-brass)] transition-opacity hover:opacity-80"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next photo"
                className="glass absolute top-1/2 right-3 z-10 -translate-y-1/2 px-2.5 py-2 text-[18px] leading-none text-[var(--color-brass)] transition-opacity hover:opacity-80"
              >
                ›
              </button>
            </>
          ) : null}
        </div>

        {photo.caption ? (
          <figcaption className="px-3.5 py-3 text-center text-[11px] leading-[1.6] tracking-[1.5px] text-[var(--color-text-muted)] uppercase sm:text-[13px] sm:tracking-[2px]">
            {photo.caption}
          </figcaption>
        ) : null}
      </figure>

      {total > 1 ? (
        <div className="mt-4 flex items-center justify-center gap-2">
          {teamGalleryPhotos.map((item, dotIndex) => (
            <button
              key={item.src}
              type="button"
              aria-label={`Show photo ${dotIndex + 1}`}
              aria-current={dotIndex === index ? "true" : undefined}
              onClick={() => goTo(dotIndex)}
              className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                dotIndex === index
                  ? "bg-[var(--color-brass)]"
                  : "bg-[var(--color-border)] hover:bg-[var(--color-brass)]/50"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
