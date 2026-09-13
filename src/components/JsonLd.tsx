import { practice } from "@/lib/data/practice";
import { services } from "@/lib/data/services";
import { faqItems } from "@/lib/data/faq";

/**
 * Schema.org JSON-LD für die Konzeptstudie. Da alle Angaben (Adresse,
 * Telefonnummer, Bewertungen) fiktiv sind, wird bewusst kein Review-Schema
 * und keine Aggregate-Rating eingebunden.
 */
export function JsonLd() {
  const url = "https://lindenbogen-physiotherapie.example";

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    additionalType: "https://schema.org/PhysicalTherapy",
    name: practice.name,
    url,
    telephone: practice.phoneDisplay,
    email: practice.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: practice.street,
      postalCode: practice.postalCode,
      addressLocality: practice.addressLocality,
      addressRegion: practice.addressRegion,
      addressCountry: practice.country,
    },
    openingHoursSpecification: practice.openingHoursSchema.map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.dayOfWeek,
      opens: entry.opens,
      closes: entry.closes,
    })),
  };

  const serviceSchema = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.shortDescription,
    areaServed: practice.addressLocality,
    provider: { "@type": "MedicalBusiness", name: practice.name },
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      {serviceSchema.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
