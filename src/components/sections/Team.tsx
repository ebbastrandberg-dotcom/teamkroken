import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { teamMembers } from "@/lib/team";

function MemberPhoto({
  name,
  image,
  initials,
  grayscale = true,
  quality = 75,
  sizes = "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw",
}: {
  name: string;
  image?: string;
  initials?: string;
  grayscale?: boolean;
  quality?: number;
  sizes?: string;
}) {
  if (image) {
    return (
      <Image
        src={image}
        alt={name}
        fill
        quality={quality}
        className={`object-cover ${grayscale ? "grayscale brightness-[1.05] contrast-[1.05]" : "contrast-[1.06]"}`}
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
    <Section id="team" tone="base">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-3 text-[11px] tracking-[2.5px] text-[var(--color-brass)] uppercase">
            The crew
          </p>
          <h2 className="mb-10 text-[clamp(24px,6vw,30px)] leading-none font-light tracking-[1px] text-[var(--color-sail)]">
            Meet the team
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.05} className="h-full">
              <article className="glass flex h-full flex-col overflow-hidden">
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
      </div>
    </Section>
  );
}
