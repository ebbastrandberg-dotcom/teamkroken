import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { TeamGallery } from "@/components/sections/TeamGallery";
import { teamGroupPhoto, teamMembers } from "@/lib/team";

function MemberPhoto({
  name,
  image,
  initials,
  grayscale = true,
  sizes = "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw",
}: {
  name: string;
  image?: string;
  initials?: string;
  grayscale?: boolean;
  sizes?: string;
}) {
  if (image) {
    return (
      <Image
        src={image}
        alt={name}
        fill
        className={`object-cover brightness-[1.05] contrast-[1.05] ${grayscale ? "grayscale" : ""}`}
        sizes={sizes}
      />
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-[var(--color-bg)]">
      <span className="text-[48px] font-light tracking-[4px] text-[var(--color-brass)]">
        {initials}
      </span>
    </div>
  );
}

export function Team() {
  return (
    <section id="team" className="px-4 py-10 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-3 text-[11px] tracking-[2.5px] text-[var(--color-brass)] uppercase">
            The crew
          </p>
          <h2 className="mb-10 text-[clamp(24px,6vw,30px)] leading-none font-light tracking-[1px] text-[var(--color-sail)]">
            Meet the team
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <figure className="mb-10 overflow-hidden border border-[var(--color-card-border)]">
            <div className="relative aspect-[16/9] w-full">
              <MemberPhoto
                name="Team Kroken celebrating with trophy"
                image={teamGroupPhoto}
                grayscale={false}
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
            <figcaption className="px-3.5 py-3 text-center text-[11px] leading-[1.6] tracking-[1.5px] text-[var(--color-text-muted)] uppercase sm:text-[13px] sm:tracking-[2px]">
              Team Kroken · Gamla Stan Yacht Club · Sommarcupen May 2026
            </figcaption>
          </figure>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.05} className="h-full">
              <article className="flex h-full flex-col border border-[var(--color-card-border)]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <MemberPhoto
                    name={member.name}
                    image={member.image}
                    initials={member.initials}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/80 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-3.5">
                  <p
                    className={`mb-1 min-h-[14px] text-[10px] leading-[14px] tracking-[3px] uppercase ${
                      member.role
                        ? "text-[var(--color-brass)]"
                        : "text-transparent"
                    }`}
                    aria-hidden={!member.role}
                  >
                    {member.role ?? "\u00A0"}
                  </p>
                  <h3 className="text-[clamp(16px,4vw,20px)] tracking-[0.5px] text-[var(--color-sail)]">
                    {member.name}
                  </h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <TeamGallery />
        </Reveal>
      </div>
    </section>
  );
}
