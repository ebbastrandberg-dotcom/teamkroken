"use client";

import { themes, useTheme } from "@/providers/ThemeProvider";
import type { ThemeId } from "@/lib/themes";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="fixed right-4 bottom-4 z-50 flex flex-col gap-2 rounded border border-[var(--color-card-border)] bg-[var(--color-bg)]/95 p-3 shadow-lg backdrop-blur-sm sm:right-6 sm:bottom-6"
      role="group"
      aria-label="Theme selector"
    >
      <p className="text-[10px] tracking-[2.5px] text-[var(--color-brass)] uppercase">
        Compare themes
      </p>
      {(Object.keys(themes) as ThemeId[]).map((id) => {
        const active = theme === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => setTheme(id)}
            aria-pressed={active}
            className={`cursor-pointer border px-3 py-2 text-left transition-colors ${
              active
                ? "border-[var(--color-brass)] bg-[var(--color-brass)]/10"
                : "border-[var(--color-border)] hover:border-[var(--color-brass)]/50"
            }`}
          >
            <span className="block text-[12px] tracking-[1px] text-[var(--color-sail)]">
              {themes[id].label}
            </span>
            <span className="block text-[10px] text-[var(--color-text-muted)]">
              {themes[id].description}
            </span>
          </button>
        );
      })}
    </div>
  );
}
