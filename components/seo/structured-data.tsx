import { faqItems } from "@/lib/site-data";

const siteUrl = "https://digitalmax.pt";

export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Digital Max",
        url: siteUrl,
        email: "geral@digitalmax.pt",
        telephone: "+351XXXXXXXXX",
        slogan: "Criamos presença online que gera clientes.",
        description:
          "A Digital Max ajuda negócios em Portugal a ganhar visibilidade online, atrair mais contactos e crescer através de websites, redes sociais e campanhas digitais."
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Digital Max",
        inLanguage: "pt-PT",
        publisher: {
          "@id": `${siteUrl}/#organization`
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#professional-service`,
        name: "Digital Max",
        url: siteUrl,
        areaServed: {
          "@type": "Country",
          name: "Portugal"
        },
        email: "geral@digitalmax.pt",
        telephone: "+351XXXXXXXXX",
        description:
          "Serviços de criação de websites, gestão de redes sociais, tráfego pago, SEO local e presença digital para pequenos e médios negócios em Portugal."
      },
      {
        "@type": "Service",
        serviceType: "Criação de websites",
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: "Portugal"
      },
      {
        "@type": "Service",
        serviceType: "Landing pages",
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: "Portugal"
      },
      {
        "@type": "Service",
        serviceType: "Gestão de redes sociais",
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: "Portugal"
      },
      {
        "@type": "Service",
        serviceType: "Tráfego pago",
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: "Portugal"
      },
      {
        "@type": "Service",
        serviceType: "SEO local",
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: "Portugal"
      },
      {
        "@type": "Service",
        serviceType: "Google Business Profile",
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: "Portugal"
      },
      {
        "@type": "Service",
        serviceType: "Acompanhamento mensal",
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: "Portugal"
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer
          }
        }))
      }
    ]
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
