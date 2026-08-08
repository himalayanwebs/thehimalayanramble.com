import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlaceTemplate } from "@/components/templates/place-template";
import { getAllPlaces, getPlace } from "@/data";
import { NAV_REGIONS } from "@/data/nav";

type Params = Promise<{ region: string; place: string }>;

export function generateStaticParams() {
  return getAllPlaces().map((place) => ({ region: place.region, place: place.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { region: regionSlug, place: placeSlug } = await params;
  const place = getPlace(regionSlug, placeSlug);
  if (!place) return {};
  return {
    // place.seo.title is already a complete "X | The Himalayan Ramble"
    // string — `absolute` stops the root layout's title.template from
    // appending the suffix a second time.
    title: { absolute: place.seo.title },
    description: place.seo.description,
    alternates: { canonical: `/${place.region}/${place.slug}/` },
    openGraph: {
      title: place.seo.title,
      description: place.seo.description,
      url: `/${place.region}/${place.slug}/`,
      images: [place.hero.image.src],
    },
  };
}

export default async function PlacePage({ params }: { params: Params }) {
  const { region: regionSlug, place: placeSlug } = await params;
  const place = getPlace(regionSlug, placeSlug);
  if (!place) notFound();
  const regionName = NAV_REGIONS.find((r) => r.slug === place.region)?.name ?? place.region;
  return <PlaceTemplate place={place} regionName={regionName} />;
}
