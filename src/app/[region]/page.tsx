import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RegionIndexTemplate } from "@/components/templates/region-index-template";
import { getAllRegions, getRegion } from "@/data";

type Params = Promise<{ region: string }>;

const SITE_URL = "https://thehimalayanramble.com";

export function generateStaticParams() {
  return getAllRegions().map((region) => ({ region: region.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { region: regionSlug } = await params;
  const region = getRegion(regionSlug);
  if (!region) return {};

  const imageUrl = region.hero.image.src.startsWith("http")
    ? region.hero.image.src
    : `${SITE_URL}${region.hero.image.src}`;

  return {
    // region.seo.title is already a complete "X | The Himalayan Ramble"
    // string — `absolute` stops the root layout's title.template from
    // appending the suffix a second time.
    title: { absolute: region.seo.title },
    description: region.seo.description,
    alternates: { canonical: `${SITE_URL}/${region.slug}/` },
    openGraph: {
      title: region.seo.title,
      description: region.seo.description,
      url: `${SITE_URL}/${region.slug}/`,
      images: [imageUrl],
    },
  };
}

export default async function RegionPage({ params }: { params: Params }) {
  const { region: regionSlug } = await params;
  const region = getRegion(regionSlug);
  if (!region) notFound();
  return <RegionIndexTemplate region={region} />;
}