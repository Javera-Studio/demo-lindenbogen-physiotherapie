import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Stimmen" title="Beispielhafte Rückmeldungen" />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.quote} delay={index * 70}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-line bg-surface p-6">
                <blockquote className="text-sm leading-relaxed text-ink sm:text-base">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-5 text-xs font-medium uppercase tracking-wide text-terracotta-dark">
                  {testimonial.context}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
