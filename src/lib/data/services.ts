export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  areas: string[];
  duration: string;
  prescription: boolean;
  selfPay: boolean;
};

export const services: Service[] = [
  {
    slug: "krankengymnastik",
    name: "Krankengymnastik",
    shortDescription:
      "Aktive und passive Maßnahmen zur Verbesserung von Beweglichkeit, Kraft und Koordination.",
    description:
      "Krankengymnastik verbindet gezielte aktive Übungen mit passiven Techniken, um Beweglichkeit, Kraft und Koordination gezielt zu verbessern. Der Ablauf richtet sich nach Ihrem individuellen Befund und Ihrer ärztlichen Verordnung.",
    areas: [
      "Bewegungseinschränkungen",
      "Muskuläre Dysbalancen",
      "Nachsorge nach Verletzungen",
    ],
    duration: "ca. 20–30 Minuten",
    prescription: true,
    selfPay: true,
  },
  {
    slug: "manuelle-therapie",
    name: "Manuelle Therapie",
    shortDescription:
      "Gezielte Untersuchung und Behandlung von Funktionsstörungen an Gelenken, Muskeln und Nerven.",
    description:
      "Mit den Händen untersuchen und behandeln wir Funktionsstörungen des Bewegungsapparats – von Gelenken über Muskulatur bis zu neuralen Strukturen. Ziel ist eine spürbare Verbesserung von Beweglichkeit und Belastbarkeit.",
    areas: [
      "Gelenkbeschwerden",
      "Rückenschmerzen",
      "Funktionsstörungen der Wirbelsäule",
    ],
    duration: "ca. 20–30 Minuten",
    prescription: true,
    selfPay: true,
  },
  {
    slug: "manuelle-lymphdrainage",
    name: "Manuelle Lymphdrainage",
    shortDescription:
      "Sanfte Behandlung zur Unterstützung des Lymphabflusses, beispielsweise bei ärztlich diagnostizierten Schwellungen.",
    description:
      "Mit sanften, rhythmischen Grifftechniken unterstützen wir den Lymphabfluss. Die Behandlung erfolgt auf Basis einer ärztlichen Verordnung oder als Selbstzahlerleistung nach Absprache.",
    areas: [
      "Ärztlich diagnostizierte Ödeme",
      "Schwellungen nach Operationen",
      "Begleitung nach Verletzungen",
    ],
    duration: "30 oder 60 Minuten",
    prescription: true,
    selfPay: true,
  },
  {
    slug: "krankengymnastik-am-geraet",
    name: "Krankengymnastik am Gerät",
    shortDescription:
      "Individuell angeleitetes Training an medizinischen Trainingsgeräten.",
    description:
      "An medizinischen Trainingsgeräten bauen Sie unter fachlicher Anleitung gezielt Kraft, Stabilität und Ausdauer auf. Der Trainingsplan wird individuell auf Ihren Befund und Ihre Ziele abgestimmt.",
    areas: [
      "Aufbau nach Operationen",
      "Chronische Rückenbeschwerden",
      "Allgemeiner Kraftaufbau nach Befund",
    ],
    duration: "ca. 60 Minuten",
    prescription: true,
    selfPay: true,
  },
  {
    slug: "sportphysiotherapie",
    name: "Sportphysiotherapie",
    shortDescription:
      "Begleitung bei Sportverletzungen, Belastungsaufbau und Rückkehr in Training und Alltag.",
    description:
      "Wir begleiten Sie nach Sportverletzungen durch den gesamten Belastungsaufbau – von den ersten kontrollierten Bewegungen bis zur schrittweisen Rückkehr in Training und Wettkampf.",
    areas: [
      "Sportverletzungen",
      "Belastungsaufbau nach Verletzungen",
      "Rückkehr in Training und Alltag",
    ],
    duration: "ca. 60 Minuten",
    prescription: true,
    selfPay: true,
  },
  {
    slug: "cmd-kieferbehandlung",
    name: "CMD- und Kieferbehandlung",
    shortDescription:
      "Physiotherapeutische Begleitung bei ärztlich oder zahnärztlich abgeklärten Beschwerden des Kiefergelenks.",
    description:
      "Bei ärztlich oder zahnärztlich abgeklärten Beschwerden des Kiefergelenks unterstützt gezielte Physiotherapie die Beweglichkeit und das Zusammenspiel von Kiefer, Nacken und Kopfhaltung.",
    areas: [
      "Craniomandibuläre Dysfunktion (CMD)",
      "Verspannungen im Kiefer- und Nackenbereich",
      "Begleitung zahnärztlicher Behandlung",
    ],
    duration: "ca. 30 Minuten",
    prescription: true,
    selfPay: true,
  },
];
