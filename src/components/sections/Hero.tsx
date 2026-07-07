"use client";

import Image from "next/image";
import { StaggerWords } from "@/components/motion/StaggerWords";
import { OrnamentalRule } from "@/components/ui/OrnamentalRule";
import { worldChampionship } from "@/lib/event";
import { themes, useTheme } from "@/providers/ThemeProvider";

export function Hero() {
  const { theme } = useTheme();
  const config = themes[theme];

  return (
    <section className="relative h-[min(70vh,520px)] overflow-hidden">
      <Image
        src={config.heroImage}
        alt="Team Kroken racing on the water"
        fill
        priority
        className="object-cover brightness-[1.05] contrast-[1.05]"
        style={{ objectPosition: config.heroPosition }}
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(175deg, var(--color-hero-overlay-start) 0%, var(--color-hero-overlay-end) 100%)`,
        }}
      />
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center sm:px-6">
        <OrnamentalRule className="mb-3.5" />
        <p className="mb-3 max-w-xs text-[10px] tracking-[3px] text-[var(--color-brass)] uppercase sm:max-w-none sm:text-[11px] sm:tracking-[5px]">
          Gamla Stan Yacht Club · Sweden
        </p>
        <h1
          className="text-[clamp(28px,8vw,54px)] leading-[0.92] font-light tracking-[4px] text-[var(--color-sail)] uppercase sm:tracking-[7px]"
          style={{ textShadow: "0 2px 24px var(--color-hero-shadow)" }}
        >
          Team
          <br />
          Kroken
        </h1>
        <OrnamentalRule className="mt-3.5 mb-2.5" />
        <p
          className="max-w-md px-2 text-[12px] leading-[1.6] tracking-[2px] text-[var(--color-sail)] uppercase sm:text-[13px] sm:tracking-[3px]"
          style={{ textShadow: "0 2px 16px var(--color-hero-shadow)" }}
        >
          <StaggerWords text={worldChampionship.title} delay={0.35} />
        </p>
        <a
          href={worldChampionship.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1.5 block max-w-md px-2 text-[11px] tracking-[2px] text-[var(--color-brass)] uppercase transition-opacity duration-150 hover:opacity-80 sm:text-[12px] sm:tracking-[3px]"
        >
          <StaggerWords text={worldChampionship.subtitle} delay={0.65} />
        </a>
      </div>
    </section>
  );
}
