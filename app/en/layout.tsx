import DocumentLayout from "@/components/layout/document-layout";
import { siteMetadata } from "@/lib/metadata";
import { localizedMetadata } from "@/lib/i18n/metadata";
export { viewport } from "@/components/layout/document-layout";

export const metadata = localizedMetadata(siteMetadata, "en");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DocumentLayout locale="en">{children}</DocumentLayout>;
}
