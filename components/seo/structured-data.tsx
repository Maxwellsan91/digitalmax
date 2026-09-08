import { t } from "@/lib/i18n";
import { type LocaleProps } from "@/lib/i18n/routing";
import { faqItems } from "@/lib/site-data";
import { SITE_DESCRIPTION, SITE_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site-config";

const serviceNames = [
  "Criação de websites",
  "Landing pages",
  "Gestão de redes sociais",
  "Tráfego pago",
  "SEO local",
  "Acompanhamento mensal"
];

export function StructuredData({ locale = "pt" }: LocaleProps) {
  const localizedUrl = locale === "en" ? `${SITE_URL}/en` : SITE_URL;
  const organizationId = `${SITE_URL}/#organization`;
  const professionalServiceId = `${SITE_URL}/#professional-service`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: SITE_NAME,
        url: SITE_URL,
        email: SITE_EMAIL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo-icon-512.png`,
          width: 512,
          height: 512
        },
        slogan: t(locale, "Criamos presença online que gera clientes."),
        description: t(
          locale,
          "Agência digital em Portugal especializada em websites, redes sociais, tráfego pago e presença digital para negócios locais."
        )
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: ["pt-PT", "en"],
        publisher: { "@id": organizationId }
      },
      {
        "@type": "ProfessionalService",
        "@id": professionalServiceId,
        name: SITE_NAME,
        url: SITE_URL,
        areaServed: { "@type": "Country", name: "Portugal" },
        email: SITE_EMAIL,
        description: t(locale, SITE_DESCRIPTION),
        parentOrganization: { "@id": organizationId },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: t(locale, "Serviços digitais"),
          itemListElement: serviceNames.map((serviceType) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              serviceType: t(locale, serviceType),
              provider: { "@id": professionalServiceId },
              areaServed: { "@type": "Country", name: "Portugal" }
            }
          }))
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${localizedUrl}/#faq`,
        url: `${localizedUrl}/#faq`,
        inLanguage: locale === "en" ? "en" : "pt-PT",
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  );
}
