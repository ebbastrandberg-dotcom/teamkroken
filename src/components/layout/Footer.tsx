import { LogoMark } from "@/components/ui/LogoMark";
import { worldChampionship } from "@/lib/event";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-subtle)] px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <LogoMark />
          <div>
            <div className="text-[13px] tracking-[2px] text-[var(--color-brass)] uppercase">
              Gamla Stan Yacht Club
            </div>
            <div className="text-[11px] text-[var(--color-text-muted)]">
              Stockholm, Sweden
            </div>
          </div>
        </div>
        <p className="text-[11px] tracking-[1px] text-[var(--color-text-faint)] uppercase">
          © 2026 Team Kroken · {worldChampionship.title}
        </p>
      </div>
    </footer>
  );
}
