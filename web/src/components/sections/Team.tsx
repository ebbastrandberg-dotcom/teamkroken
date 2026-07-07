import Image from "next/image";
import { teamGroupPhoto, teamMembers } from "@/lib/team";

function MemberPhoto({
  name,
  image,
  initials,
  grayscale = true,
  sizes = "(max-width: 640px) 100vw, 25vw",
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
    <section id="team" className="px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-[7.5px] tracking-[2.5px] text-[var(--color-brass)] uppercase">
          The crew
        </p>
        <h2 className="mb-10 text-[30px] leading-none font-light tracking-[1px] text-[var(--color-sail)]">
          Meet the team
        </h2>

        <figure className="mb-10 overflow-hidden border border-[var(--color-card-border)]">
          <div className="relative aspect-[16/9] w-full">
            <MemberPhoto
              name="Team Kroken celebrating with trophy"
              image={teamGroupPhoto}
              grayscale={false}
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
          <figcaption className="px-3.5 py-3 text-[9px] tracking-[2px] text-[var(--color-text-muted)] uppercase">
            Team Kroken · Gamla Stan Yacht Club
          </figcaption>
        </figure>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="border border-[var(--color-card-border)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <MemberPhoto
                  name={member.name}
                  image={member.image}
                  initials={member.initials}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/80 to-transparent" />
              </div>
              <div className="p-3.5">
                <h3 className="text-[17px] tracking-[0.5px] text-[var(--color-sail)]">
                  {member.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
