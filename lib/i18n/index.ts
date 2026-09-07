import english from "./en.json";
import type { Locale } from "./routing";

const translations: Record<string, string> = english;

/** Portuguese source copy is the fallback for names and other language-neutral text. */
export function t(locale: Locale, text: string): string {
  return locale === "en" ? translations[text] ?? text : text;
}
