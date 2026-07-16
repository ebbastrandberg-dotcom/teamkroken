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

export const teamGroupPhoto = "/team/team-group-sommarcupen.png";

export const teamGalleryPhotos: TeamGalleryPhoto[] = [
  {
    src: "/team/gallery/team-kroken-group.png",
    alt: "Team Kroken squad in team jackets on the dock",
    caption: "Team Kroken · Partner visibility on the dock",
  },
  {
    src: "/team/gallery/trwc-racing-fleet.png",
    alt: "Team racing fleet at the Team Racing World Championship",
    caption: "Team Racing World Championship · Fleet racing",
  },
  {
    src: "/team/gallery/trwc-racing-action.png",
    alt: "Team Kroken boat racing through chop at a world championship",
    caption: "Team Racing World Championship · On the water",
  },
  {
    src: "/team/gallery/team-racing-crew.png",
    alt: "Team Kroken crew hiking on the rail in Gamla Stan Yacht Club vests",
    caption: "Team Kroken · Gamla Stan Yacht Club",
  },
  {
    src: "/team/gallery/racing-crew-four.png",
    alt: "Team Kroken crew racing for Gamla Stan Yacht Club",
    caption: "Team Kroken · Gamla Stan Yacht Club",
  },
  {
    src: "/team/gallery/team-championship-group.png",
    alt: "Team Kroken and squad in blazers at a championship venue",
    caption: "Team Kroken · Championship",
  },
  {
    src: "/team/gallery/trwc-regatta-start.png",
    alt: "Multiple teams racing at the Team Racing World Championship",
    caption: "Team Racing World Championship · Regatta",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Fabian Bergman",
    image: "/team/fabian-bergman.jpeg",
    role: "Team Captain · Helmsman",
  },
  { name: "Filippa Larsson", image: "/team/filippa-larsson.jpeg" },
  { name: "Viktor", initials: "V" },
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
