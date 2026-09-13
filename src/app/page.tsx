import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ParallaxStatement } from "@/components/home/ParallaxStatement";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { TeamPreview } from "@/components/home/TeamPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesPreview />
      <ParallaxStatement />
      <ProcessSteps />
      <TeamPreview />
      <Testimonials />
      <ContactSection />
    </>
  );
}
