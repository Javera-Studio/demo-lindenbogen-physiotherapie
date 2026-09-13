export type PriceItem = {
  label: string;
  duration: string;
  price: string;
};

// Unverbindliche Musterpreise dieser fiktiven Konzeptpraxis – keine realen Angebote.
export const selfPayPrices: PriceItem[] = [
  { label: "Physiotherapeutische Befundung", duration: "60 Minuten", price: "95 €" },
  { label: "Krankengymnastik", duration: "30 Minuten", price: "52 €" },
  { label: "Manuelle Therapie", duration: "30 Minuten", price: "58 €" },
  { label: "Manuelle Lymphdrainage", duration: "30 Minuten", price: "55 €" },
  { label: "Manuelle Lymphdrainage", duration: "60 Minuten", price: "105 €" },
  { label: "Krankengymnastik am Gerät", duration: "60 Minuten", price: "75 €" },
  { label: "Sportphysiotherapie", duration: "60 Minuten", price: "98 €" },
  { label: "CMD- und Kieferbehandlung", duration: "30 Minuten", price: "58 €" },
];
