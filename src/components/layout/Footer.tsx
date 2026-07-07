import { LogoMark } from "@/components/ui/LogoMark";
import { worldChampionship } from "@/lib/event";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-subtle)] bg-[var(--color-section-muted)] px-4 py-10 pb-24 sm:px-6 sm:py-12 sm:pb-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <LogoMark />
          <div>
            <div className="text-[13px] tracking-[2px] text-[var(--color-brass)] uppercase">
              Gamla Stan Yacht Club
            </div>
            <div className="text-[14px] text-[var(--color-text-muted)]">
              Stockholm, Sweden
            </div>
          </div>
        </div>
        <p className="max-w-xs text-[11px] leading-[1.5] tracking-[1px] text-[var(--color-text-faint)] uppercase sm:max-w-none sm:text-[13px]">
          © 2026 Team Kroken · {worldChampionship.title}
        </p>
      </div>
    </footer>
  );
}
