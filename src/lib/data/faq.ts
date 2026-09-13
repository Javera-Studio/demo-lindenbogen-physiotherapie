export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Benötige ich ein Rezept?",
    answer:
      "Für die meisten Behandlungen benötigen Sie eine ärztliche Verordnung (Rezept). Bringen Sie diese bitte zu Ihrem ersten Termin mit. Einzelne Leistungen sind auch als Selbstzahlerbehandlung nach vorheriger Vereinbarung möglich.",
  },
  {
    question: "Behandeln Sie gesetzlich und privat Versicherte?",
    answer:
      "Ja, wir behandeln sowohl gesetzlich als auch privat Versicherte. Die Abrechnung erfolgt jeweils nach den geltenden Vergütungsvereinbarungen bzw. Ihrem individuellen Versicherungstarif.",
  },
  {
    question: "Kann ich auch als Selbstzahler kommen?",
    answer:
      "Ja, Selbstzahlerbehandlungen sind nach vorheriger Vereinbarung möglich. Sie erhalten vorab eine transparente Übersicht der Kosten.",
  },
  {
    question: "Was muss ich zum ersten Termin mitbringen?",
    answer:
      "Bitte bringen Sie Ihr Rezept, vorhandene Befunde sowie bequeme Kleidung mit. Handtücher stellen wir Ihnen in der Praxis zur Verfügung.",
  },
  {
    question: "Wie lange dauert eine Behandlung?",
    answer:
      "Je nach Leistung dauert eine Behandlung zwischen 20 und 60 Minuten. Die genaue Dauer besprechen wir individuell bei der Terminvereinbarung.",
  },
  {
    question: "Was passiert, wenn ich einen Termin absagen muss?",
    answer:
      "Bitte sagen Sie einen Termin so früh wie möglich ab, damit wir die Zeit anderweitig vergeben können. Kurzfristige Absagen sprechen Sie am besten direkt mit unserem Empfang ab.",
  },
  {
    question: "Gibt es Parkplätze?",
    answer:
      "In der Umgebung der Praxis stehen Parkmöglichkeiten zur Verfügung. Details erfahren Sie gerne bei der Terminvereinbarung.",
  },
  {
    question: "Ist die Praxis mit öffentlichen Verkehrsmitteln erreichbar?",
    answer:
      "Die Praxis in Dresden-Plauen ist gut an den öffentlichen Nahverkehr angebunden. Die nächstgelegenen Haltestellen erreichen Sie in wenigen Gehminuten.",
  },
  {
    question: "Kann ich mehrere Termine im Voraus vereinbaren?",
    answer:
      "Ja, insbesondere bei einer Verordnungsserie vereinbaren wir gerne mehrere Termine im Voraus, damit Ihre Behandlung kontinuierlich stattfinden kann.",
  },
];
