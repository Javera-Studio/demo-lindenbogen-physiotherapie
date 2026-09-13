import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";

const hints = [
  "Rezept und vorhandene Befunde mitbringen",
  "Bequeme Kleidung anziehen",
  "Handtücher werden bereitgestellt",
  "Bei Verhinderung bitte rechtzeitig absagen",
];

export function PatientInfoPreview() {
  return (
    <section className="bg-cream-soft py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-12">
          <Reveal>
            <SectionHeading
              eyebrow="Gut vorbereitet"
              title="Kurz erklärt: Ihr erster Termin"
            />
          </Reveal>
          <Reveal delay={80}>
            <ul className="space-y-3">
              {hints.map((hint) => (
                <li key={hint} className="flex items-start gap-3 text-sm text-ink sm:text-base">
                  <span
                    aria-hidden="true"
                    className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta"
                  />
                  {hint}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <LinkButton href="/patienteninformationen" variant="secondary">
                Alle Patienteninformationen
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
