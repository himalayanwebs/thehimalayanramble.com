import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RegionIndexTemplate } from "@/components/templates/region-index-template";
import { getAllRegions, getRegion } from "@/data";

type Params = Promise<{ region: string }>;

export function generateStaticParams() {
  return getAllRegions().map((region) => ({ region: region.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { region: regionSlug } = await params;
  const region = getRegion(regionSlug);
  if (!region) return {};
  return {
    // region.seo.title is already a complete "X | The Himalayan Ramble"
    // string — `absolute` stops the root layout's title.template from
    // appending the suffix a second time.
    title: { absolute: region.seo.title },
    description: region.seo.description,
    alternates: { canonical: `/${region.slug}/` },
    openGraph: {
      title: region.seo.title,
      description: region.seo.description,
      url: `/${region.slug}/`,
      images: [region.hero.image.src],
    },
  };
}

export default async function RegionPage({ params }: { params: Params }) {
  const { region: regionSlug } = await params;
  const region = getRegion(regionSlug);
  if (!region) notFound();
  return <RegionIndexTemplate region={region} />;
}
