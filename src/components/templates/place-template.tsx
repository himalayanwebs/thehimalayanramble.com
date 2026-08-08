import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/blocks/hero";
import { FeatureBlock } from "@/components/blocks/feature-block";
import { InfoGrid } from "@/components/blocks/info-grid";
import { CtaBand } from "@/components/blocks/cta-band";
import { Reveal } from "@/components/blocks/reveal";
import type { PlaceData } from "@/data/schema";

export function PlaceTemplate({ place, regionName }: { place: PlaceData; regionName: string }) {
  const destinationHref = `/contact/?destination=${encodeURIComponent(place.destinationValue)}`;

  return (
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
  );
}
