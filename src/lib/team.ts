export type TeamMember = {
  name: string;
  image?: string;
  initials?: string;
  role?: string;
};

export type TeamGalleryPhoto = {
  src: string;
  alt: string;
  caption?: string;
  fit?: "cover" | "contain";
};

export const teamGroupPhoto = "/team/team-group.png";

export const teamGalleryPhotos: TeamGalleryPhoto[] = [
  {
    src: "/team/gallery/racing-cockpit.png",
    alt: "Team Kroken crew working the sails on deck",
    caption: "Team Kroken · On deck",
  },
  {
    src: "/team/gallery/racing-crew-three.png",
    alt: "Team Kroken racing on Stockholm waters",
    caption: "Team Kroken · Stockholm",
  },
  {
    src: "/team/gallery/racing-crew-four.png",
    alt: "Team Kroken crew racing for Gamla Stan Yacht Club",
    caption: "Team Kroken · Gamla Stan Yacht Club",
  },
  {
    src: "/team/gallery/racing-regatta.png",
    alt: "Team Kroken competing in a team racing regatta",
    caption: "Team Kroken · Regatta",
  },
  {
    src: "/team/gallery/racing-stockholm.png",
    alt: "Team Kroken sailing with the Stockholm skyline behind",
    caption: "Team Kroken · Riddarfjärden",
    fit: "contain",
  },
  {
    src: "/team/gallery/stockholm-harbor.png",
    alt: "Team racing on Stockholm harbor",
    caption: "Stockholm · Team racing",
    fit: "contain",
  },
  {
    src: "/team/gallery/team-social.png",
    alt: "Team Kroken squad gathered on the pier",
    caption: "Team Kroken · Gamla Stan Yacht Club",
  },
];

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
