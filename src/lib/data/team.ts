export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  qualifications: string[];
  bio: string;
  imageSrc: string;
  imageAlt: string;
  aspect: "portrait" | "wide";
};

export const team: TeamMember[] = [
  {
    slug: "jana-richter",
    name: "Jana Richter",
    role: "Physiotherapeutin & Inhaberin",
    qualifications: [
      "Bachelor of Science Physiotherapie",
      "Manuelle Therapie",
      "Manuelle Lymphdrainage",
      "Krankengymnastik am Gerät",
      "CMD-Behandlung",
      "Sektorale Heilpraktikererlaubnis für Physiotherapie",
    ],
    bio: "Jana Richter hat LINDENBOGEN mit dem Anspruch gegründet, Physiotherapie mit Zeit, Struktur und einem klaren Blick auf die individuellen Ziele jedes Menschen zu verbinden.",
    imageSrc: "/images/team-jana-richter.webp",
    imageAlt:
      "Porträt von Jana Richter, Physiotherapeutin und Inhaberin von LINDENBOGEN Physiotherapie",
    aspect: "portrait",
  },
  {
    slug: "leon-wagner",
    name: "Leon Wagner",
    role: "Physiotherapeut",
    qualifications: [
      "Sportphysiotherapie",
      "Krankengymnastik am Gerät",
      "Funktionelle Rehabilitation",
      "Medizinisches Aufbautraining",
    ],
    bio: "Leon Wagner begleitet Patientinnen und Patienten von der ersten Bewegung nach einer Verletzung bis zurück in Training und Alltag.",
    imageSrc: "/images/team-leon-wagner.webp",
    imageAlt: "Porträt von Leon Wagner, Physiotherapeut bei LINDENBOGEN Physiotherapie",
    aspect: "portrait",
  },
  {
    slug: "miriam-scholz",
    name: "Miriam Scholz",
    role: "Praxisorganisation & Empfang",
    qualifications: [
      "Terminorganisation",
      "Patientenbetreuung",
      "Rezept- und Verwaltungsfragen",
    ],
    bio: "Miriam Scholz ist die erste Ansprechpartnerin am Empfang und sorgt für einen reibungslosen Ablauf rund um Termine und Verwaltung.",
    imageSrc: "/images/team-miriam-scholz.webp",
    imageAlt: "Porträt von Miriam Scholz, Praxisorganisation und Empfang bei LINDENBOGEN Physiotherapie",
    aspect: "portrait",
  },
];
