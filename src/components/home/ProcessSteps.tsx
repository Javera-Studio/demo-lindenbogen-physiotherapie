import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    title: "Termin vereinbaren",
    description:
      "Rufen Sie an, schreiben Sie uns eine E-Mail oder nutzen Sie das Kontaktformular – wir melden uns zeitnah zurück.",
  },
  {
    title: "Befund und gemeinsames Ziel",
    description:
      "Im ersten Termin erheben wir gemeinsam mit Ihnen den Befund und klären, was Sie im Alltag oder Sport erreichen möchten.",
  },
  {
    title: "Individuelle Behandlung und aktive Begleitung",
    description:
      "Auf Basis von Befund und Zielen beginnt eine Behandlung, die zu Ihnen passt – mit verständlichen Übungen für zu Hause.",
  },
];

export function ProcessSteps() {
  return (
    <section className="bg-cream-soft py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Ablauf" title="In drei Schritten zu Ihrer Behandlung" />
        </Reveal>
        <ol className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 90}>
              <li className="relative h-full rounded-2xl border border-line bg-surface p-6">
                <span
                  aria-hidden="true"
                  className="font-serif text-4xl text-terracotta/60"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-lg font-semibold text-petrol-dark">
                  {step.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
