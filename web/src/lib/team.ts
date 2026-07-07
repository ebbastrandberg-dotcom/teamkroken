export type TeamMember = {
  name: string;
  image?: string;
  initials?: string;
};

export const teamGroupPhoto = "/team/team-group.png";

export const teamMembers: TeamMember[] = [
  { name: "Ebba Strandberg", image: "/team/ebba-strandberg.jpeg" },
  { name: "Fabian Bergman", image: "/team/fabian-bergman.jpeg" },
  { name: "Fabian Sund", image: "/team/fabian-sund.jpeg" },
  { name: "Filippa Larsson", image: "/team/filippa-larsson.jpeg" },
  { name: "Johan Bäckman Berg", image: "/team/johan-backman-berg.jpeg" },
  { name: "Lisa Gross", image: "/team/lisa-gross.jpeg" },
  { name: "Lukas Bergman", image: "/team/lukas-bergman.jpeg" },
  { name: "Viktor O", initials: "VO" },
];
