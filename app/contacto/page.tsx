import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ContactSection } from "@/components/sections/contact-section";
import { MobileWhatsAppCta } from "@/components/sections/mobile-whatsapp-cta";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Peça um diagnóstico gratuito à DigitalMax. Fale connosco para melhorar a presença online do seu negócio em Portugal.",
  alternates: {
    canonical: "https://digitalmax.pt/contacto"
  }
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <ContactSection />
      </main>
      <MobileWhatsAppCta />
      <SiteFooter />
    </>
  );
}

