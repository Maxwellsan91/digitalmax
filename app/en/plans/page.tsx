import Page, { metadata as pageMetadata } from "@/components/pages/planos";
import { localizedMetadata } from "@/lib/i18n/metadata";

export const metadata = localizedMetadata(pageMetadata, "en");

export default function LocalizedPage() {
  return <Page locale="en" />;
}
