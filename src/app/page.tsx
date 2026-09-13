import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ParallaxStatement } from "@/components/home/ParallaxStatement";
import { TeamPreview } from "@/components/home/TeamPreview";
import { Advantages } from "@/components/home/Advantages";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { Testimonials } from "@/components/home/Testimonials";
import { PatientInfoPreview } from "@/components/home/PatientInfoPreview";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesPreview />
      <ParallaxStatement />
      <TeamPreview />
      <Advantages />
      <ProcessSteps />
      <Testimonials />
      <PatientInfoPreview />
      <ContactSection />
    </>
  );
}
