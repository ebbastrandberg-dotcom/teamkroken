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
    src: "/team/gallery/trwc-regatta-start.png",
    alt: "Multiple teams racing at the Team Racing World Championship",
    caption: "Team Racing World Championship · Regatta",
  },
  {
    src: "/team/gallery/team-racing-crew.png",
    alt: "Team Kroken crew hiking on the rail in Gamla Stan Yacht Club vests",
    caption: "Team Kroken · Gamla Stan Yacht Club",
  },
  {
    src: "/team/gallery/team-kroken-group.png",
    alt: "Team Kroken squad in team jackets on the dock",
    caption: "Team Kroken · Team photo",
  },
  {
    src: "/team/gallery/team-championship-group.png",
    alt: "Team Kroken and squad in blazers at a championship venue",
    caption: "Team Kroken · Championship",
  },
  {
    src: "/team/gallery/team-blazers.png",
    alt: "Team Kroken members in club blazers at a championship",
    caption: "Team Kroken · Gamla Stan Yacht Club",
    fit: "contain",
  },
  {
    src: "/team/gallery/team-dock.png",
    alt: "Team Kroken members on the dock between races",
    caption: "Team Kroken · Between races",
    fit: "contain",
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
