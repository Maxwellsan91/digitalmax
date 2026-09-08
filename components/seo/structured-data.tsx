import { t } from "@/lib/i18n";
import { type LocaleProps } from "@/lib/i18n/routing";
import { faqItems } from "@/lib/site-data";

const siteUrl = "https://www.digitalmax.pt";

export function StructuredData({ locale = "pt" }: LocaleProps) {
  const localizedUrl = locale === "en" ? `${siteUrl}/en` : siteUrl;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Digital Max",
        url: localizedUrl,
        email: "geral@digitalmax.pt",
        telephone: "+351XXXXXXXXX",
        slogan: t(locale, "Criamos presença online que gera clientes."),
        description:
          t(locale, "A Digital Max ajuda negócios em Portugal a ganhar visibilidade online, atrair mais contactos e crescer através de websites, redes sociais e campanhas digitais.")
      },
      {
        "@type": "WebSite",
        "@id": `${localizedUrl}/#website`,
        url: localizedUrl,
        name: "Digital Max",
        inLanguage: locale === "en" ? "en" : "pt-PT",
        publisher: {
          "@id": `${siteUrl}/#organization`
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#professional-service`,
        name: "Digital Max",
        url: localizedUrl,
        areaServed: {
          "@type": "Country",
          name: "Portugal"
        },
        email: "geral@digitalmax.pt",
        telephone: "+351XXXXXXXXX",
        description:
          t(locale, "Serviços de criação de websites, gestão de redes sociais, tráfego pago, SEO local e presença digital para pequenos e médios negócios em Portugal.")
      },
      {
        "@type": "Service",
        serviceType: t(locale, "Criação de websites"),
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
        serviceType: t(locale, "Gestão de redes sociais"),
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: "Portugal"
      },
      {
        "@type": "Service",
        serviceType: t(locale, "Tráfego pago"),
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: "Portugal"
      },
      {
        "@type": "Service",
        serviceType: t(locale, "SEO local"),
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
        serviceType: t(locale, "Acompanhamento mensal"),
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: "Portugal"
      },
      {
        "@type": "FAQPage",
        "@id": `${localizedUrl}/#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: t(locale, item.question),
          acceptedAnswer: {
            "@type": "Answer",
            text: t(locale, item.answer)
          }
        }))
      }
    ]
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
