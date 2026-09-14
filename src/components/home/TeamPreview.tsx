import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { PracticeImage } from "@/components/ui/PracticeImage";
import { team } from "@/lib/data/team";

export function TeamPreview() {
  return (
    <section className="bg-mist py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <Reveal>
            <PracticeImage
              src="/images/team-gruppenfoto.webp"
              alt="Das Team von LINDENBOGEN Physiotherapie gemeinsam in den Praxisräumen"
              aspect="16/10"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </Reveal>
          <Reveal delay={80}>
            <SectionHeading
              eyebrow="Praxis & Team"
              title="Ein kleines Team, das Sie persönlich kennt"
              description="Bei LINDENBOGEN behandelt Sie kein wechselndes Fließband, sondern ein überschaubares, eingespieltes Team mit klaren Zuständigkeiten und genug Zeit pro Termin."
            />
            <ul className="mt-6 space-y-2 text-sm text-ink-soft sm:text-base">
              {team.map((member) => (
                <li key={member.slug} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sage" />
                  <span>
                    <span className="font-medium text-ink">{member.name}</span>{" "}
                    – {member.role}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <LinkButton href="/praxis-team" variant="secondary">
                Praxis & Team kennenlernen
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
