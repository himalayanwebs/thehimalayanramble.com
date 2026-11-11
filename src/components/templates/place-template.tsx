import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/blocks/hero";
import { FeatureBlock } from "@/components/blocks/feature-block";
import { InfoGrid } from "@/components/blocks/info-grid";
import { CtaBand } from "@/components/blocks/cta-band";
import { Reveal } from "@/components/blocks/reveal";
import type { PlaceData } from "@/data/schema";

const SITE_URL = "https://thehimalayanramble.com";

export function PlaceTemplate({ place, regionName }: { place: PlaceData; regionName: string }) {
  const destinationHref = `/contact/?destination=${encodeURIComponent(place.destinationValue)}`;
  const pageUrl = `${SITE_URL}/${place.region}/${place.slug}/`;
  const imageUrl = place.hero.image.src.startsWith("http")
    ? place.hero.image.src
    : `${SITE_URL}${place.hero.image.src}`;
  const dateModified = new Date().toISOString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: place.seo.title,
        description: place.seo.description,
        image: imageUrl,
        url: pageUrl,
        mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
        dateModified,
        inLanguage: "en-IN",
        author: {
          "@type": "Organization",
          name: "The Himalayan Ramble",
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: "The Himalayan Ramble",
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/assets/logo.webp`,
          },
        },
        about: { "@id": `${pageUrl}#destination` },
      },
      {
        "@type": "TouristDestination",
        "@id": `${pageUrl}#destination`,
        name: place.name,
        description: place.seo.description,
        image: imageUrl,
        url: pageUrl,
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: regionName,
          url: `${SITE_URL}/${place.region}/`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${SITE_URL}/blog/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: regionName,
            item: `${SITE_URL}/${place.region}/`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: place.name,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main">
        <Hero
          variant="place"
          image={place.hero.image}
          breadcrumbs={[
            { label: "Blog", href: "/blog/" },
            { label: regionName, href: `/${place.region}/` },
            { label: place.name },
          ]}
          title={place.name}
          lede={place.hero.lede}
          actions={
            <Button asChild variant="accent" size="brand">
              <Link href={destinationHref}>{place.hero.ctaLabel}</Link>
            </Button>
          }
        />

        {place.blocks.map((block, i) => (
          <FeatureBlock key={i} data={block} group={`block-${i}`} />
        ))}

        <section className="section">
          <div className="container">
            <Reveal>
              <h2 className="h2">{place.infoGridHeading ?? "Best time & getting here."}</h2>
            </Reveal>
            <InfoGrid cards={place.infoGrid} />
          </div>
        </section>

        <CtaBand
          heading={place.cta.heading}
          actions={
            <Button asChild variant="accent" size="brand">
              <Link href={destinationHref}>{place.hero.ctaLabel}</Link>
            </Button>
          }
        />
      </main>
    </>
  );
}
