import Page, { generateMetadata as pageMetadata, generateStaticParams as pageParams } from "@/components/pages/servicos-slug";
import { localizedMetadata } from "@/lib/i18n/metadata";

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const params = await pageParams();
  return params;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return localizedMetadata(await pageMetadata({ params: Promise.resolve({ slug: slug }) }), "pt");
}

export default async function LocalizedPage({ params }: Props) {
  const { slug } = await params;
  return <Page locale="pt" params={Promise.resolve({ slug: slug })} />;
}
