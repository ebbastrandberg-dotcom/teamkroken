export type TeamMember = {
  name: string;
  image?: string;
  initials?: string;
  role?: string;
};

export const teamGroupPhoto = "/team/team-group.png";

export const teamMembers: TeamMember[] = [
  {
    name: "Fabian Bergman",
    image: "/team/fabian-bergman.jpeg",
    role: "Team Captain · Helmsman",
  },
  { name: "Filippa Larsson", image: "/team/filippa-larsson.jpeg" },
  { name: "Viktor O", initials: "VO" },
  { name: "Ebba Strandberg", image: "/team/ebba-strandberg.jpeg" },
  {
    name: "Lukas Bergman",
    image: "/team/lukas-bergman.jpeg",
    role: "Helmsman",
  },
  { name: "Johan Bäckman Berg", image: "/team/johan-backman-berg.jpeg" },
  { name: "Lisa Gross", image: "/team/lisa-gross.jpeg" },
  { name: "Fabian Sund", image: "/team/fabian-sund.jpeg" },
];
