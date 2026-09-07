import Page, { generateMetadata as pageMetadata, generateStaticParams as pageParams } from "@/components/pages/servicos-slug";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { englishSlug, portugueseSlug } from "@/lib/i18n/routing";

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const params = await pageParams();
  return params.map(({ slug }) => ({ slug: englishSlug(slug) }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return localizedMetadata(await pageMetadata({ params: Promise.resolve({ slug: portugueseSlug(slug) }) }), "en");
}

export default async function LocalizedPage({ params }: Props) {
  const { slug } = await params;
  return <Page locale="en" params={Promise.resolve({ slug: portugueseSlug(slug) })} />;
}
