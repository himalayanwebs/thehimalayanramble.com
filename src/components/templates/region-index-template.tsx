import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/blocks/hero";
import { TrustStrip } from "@/components/blocks/trust-strip";
import { Mosaic } from "@/components/blocks/mosaic";
import { CtaBand } from "@/components/blocks/cta-band";
import { Reveal } from "@/components/blocks/reveal";
import type { RegionData } from "@/data/schema";

const SITE_URL = "https://thehimalayanramble.com";

export function RegionIndexTemplate({ region }: { region: RegionData }) {
  const pageUrl = `${SITE_URL}/${region.slug}/`;
  const imageUrl = region.hero.image.src.startsWith("http")
    ? region.hero.image.src
    : `${SITE_URL}${region.hero.image.src}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristDestination",
        "@id": `${pageUrl}#destination`,
        name: region.name,
        description: region.seo.description,
        image: imageUrl,
        url: pageUrl,
        includesAttraction: region.places.map((place) => ({
          "@type": "TouristAttraction",
          name: place.name,
          url: `${SITE_URL}/${region.slug}/${place.slug}/`,
          description: place.hook,
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#places`,
        name: `${region.name} destinations`,
        numberOfItems: region.places.length,
        itemListElement: region.places.map((place, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: place.name,
          url: `${SITE_URL}/${region.slug}/${place.slug}/`,
        })),
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
            name: region.name,
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
          image={region.hero.image}
          breadcrumbs={[
            { label: "Blog", href: "/blog/" },
            { label: region.name },
          ]}
          title={region.name}
          lede={region.hero.lede}
        />

        <TrustStrip stats={region.trust} />

        <section className="section" id="places">
          <div className="container">
            <Reveal>
              <h2 className="h2">{region.placesHeading}</h2>
              <p className="lede" style={{ marginTop: "var(--space-sm)" }}>
                {region.placesLede}
              </p>
            </Reveal>
            <div style={{ marginTop: "var(--space-xl)" }}>
              <Mosaic
                group="places"
                tiles={region.places.map((place, i) => ({
                  href: `/${region.slug}/${place.slug}/`,
                  name: place.name,
                  meta: place.meta,
                  hook: place.hook,
                  image: place.image,
                  large: i === 0,
                }))}
              />
            </div>
          </div>
        </section>

        {region.intro && (
          <section className="section section-dark">
            <div className="container">
              <div className="feature">
                <Reveal group="intro">
                  <h2 className="h2">{region.intro.heading}</h2>
                </Reveal>
                <Reveal group="intro" className="prose stone-text">
                  {region.intro.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </Reveal>
              </div>
            </div>
          </section>
        )}

        <CtaBand
          heading={region.cta.heading}
          actions={
            <Button asChild variant="accent" size="brand">
              <Link
                href={
                  region.cta.destinationValue
                    ? `/contact/?destination=${encodeURIComponent(region.cta.destinationValue)}`
                    : "/contact/"
                }
              >
                {region.cta.label}
              </Link>
            </Button>
          }
        />
      </main>
    </>
  );
}
