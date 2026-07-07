import { LogoMark } from "@/components/ui/LogoMark";

const navLinks = [
  { label: "Racing", href: "#calendar" },
  { label: "Team", href: "#team" },
  { label: "Sponsorship", href: "#sponsorship", active: true },
];

export function Nav() {
  return (
    <nav className="flex min-h-[64px] items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-3">
      <div className="flex items-center gap-[11px]">
        <LogoMark />
        <div>
          <div className="text-[14px] leading-[1.1] tracking-[3px] text-[var(--color-brass)] uppercase">
            Team Kroken
          </div>
          <div className="text-[10px] tracking-[2px] text-[var(--color-label-muted)] uppercase">
            Gamla Stan Yacht Club
          </div>
        </div>
      </div>
      <div className="hidden items-center gap-[18px] sm:flex">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`text-[12px] tracking-[2px] uppercase transition-opacity duration-150 hover:opacity-100 ${
              link.active
                ? "border-b-[0.75px] border-[var(--color-brass)] pb-0.5 text-[var(--color-brass)]"
                : "text-[var(--color-nav-muted)] hover:text-[var(--color-sail)]"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
