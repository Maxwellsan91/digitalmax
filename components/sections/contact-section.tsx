import { type LocaleProps } from "@/lib/i18n/routing";
import { ContactFormSection } from "@/components/sections/contact-form-section";

export function ContactSection({ locale = "pt" }: LocaleProps) {
  return <ContactFormSection locale={locale} />;
}

