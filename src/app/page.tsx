import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { TrustBar } from "@/components/home/TrustBar";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ParallaxStatement } from "@/components/home/ParallaxStatement";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { TeamPreview } from "@/components/home/TeamPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { PatientInfo } from "@/components/home/PatientInfo";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Intro />
      <ServicesPreview />
      <ParallaxStatement />
      <ProcessSteps />
      <TeamPreview />
      <Testimonials />
      <PatientInfo />
      <ContactSection />
    </>
  );
}
