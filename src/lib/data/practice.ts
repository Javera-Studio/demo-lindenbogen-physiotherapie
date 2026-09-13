export const practice = {
  name: "LINDENBOGEN Physiotherapie",
  shortName: "LINDENBOGEN",
  claim: "Physiotherapie Dresden-Plauen",
  city: "Dresden-Plauen",
  // Fiktive Adresse für diese Konzeptstudie
  street: "Lindenbogenweg 12",
  postalCode: "01187",
  addressLocality: "Dresden",
  addressRegion: "Sachsen",
  country: "DE",
  phoneDisplay: "0351 / XXX XX XX",
  phoneHref: "tel:+493510000000",
  email: "termin@lindenbogen.example",
  openingHours: [
    { days: "Montag – Donnerstag", hours: "08:00 – 19:00 Uhr" },
    { days: "Freitag", hours: "08:00 – 15:00 Uhr" },
  ],
  openingHoursSchema: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "19:00",
    },
    {
      dayOfWeek: ["Friday"],
      opens: "08:00",
      closes: "15:00",
    },
  ],
} as const;
