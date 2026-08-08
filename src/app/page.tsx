import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/blocks/hero";
import { TrustStrip } from "@/components/blocks/trust-strip";
import { FeatureBlock } from "@/components/blocks/feature-block";
import { Mosaic } from "@/components/blocks/mosaic";
import { CtaBand } from "@/components/blocks/cta-band";
import { Reveal } from "@/components/blocks/reveal";
import { StampMark } from "@/components/home/stamp-mark";
import { SignatureRoutes } from "@/components/home/route-list";
import { TopographyBackground } from "@/components/effects/topography-background";
import { CONTACT } from "@/data/nav";
import {
  HOME_SEO,
  HOME_HERO,
  HOME_TRUST_STATS,
  HOME_TRUST_BADGES,
  HOME_FOUNDER_BLOCK,
  HOME_MOSAIC,
  HOME_SIGNATURE_ROUTES,
} from "@/data/home";

export const metadata: Metadata = {
  // absolute: HOME_SEO.title is the full site title already — this stops
  // the root layout's title.template from appending the brand suffix again.
  title: { absolute: HOME_SEO.title },
  description: HOME_SEO.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: HOME_SEO.title,
    description: HOME_SEO.description,
    url: "/",
    images: [HOME_HERO.image.src],
  },
};

export default function Home() {
  return (
    <main id="main">
      <Hero
        image={HOME_HERO.image}
        eyebrow={HOME_HERO.eyebrow}
        title={
          <span className="misregister">
            Stay and travel to the only place that feels like{" "}
            <span className="text-brand-accent">heaven</span> on earth.
          </span>
        }
        lede={HOME_HERO.lede}
        actions={
          <>
            <Button asChild variant="accent" size="brand">
              <Link href="/contact/">Plan Your Trip</Link>
            </Button>
            <Button asChild variant="brand-ghost" size="brand">
              <a href={CONTACT.phoneHref}>Call {CONTACT.phone}</a>
            </Button>
          </>
        }
      />
      <StampMark />

      <TrustStrip stats={HOME_TRUST_STATS} badges={HOME_TRUST_BADGES} />

      <FeatureBlock data={HOME_FOUNDER_BLOCK} group="founder" />

      <section className="section" id="destinations">
        <div className="container">
          <Reveal className="max-w-[60ch]">
            <h2 className="h2">Seven regions. One operator who knows the roads.</h2>
            <p className="lede" style={{ marginTop: "var(--space-sm)" }}>
              Every region below is built place by place from our own routes, not a brochure
              list. Pick one, or tell us the shape of the trip you&apos;re after.
            </p>
          </Reveal>
          <div style={{ marginTop: "var(--space-xl)" }}>
            <Mosaic tiles={HOME_MOSAIC} />
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <Reveal className="max-w-[60ch]">
            <h2 className="h2">Trips we&apos;ve already built, ready to adapt to you.</h2>
          </Reveal>
          <div style={{ marginTop: "var(--space-xl)" }}>
            <hr className="rule" style={{ marginTop: 0 }} />
            <SignatureRoutes routes={HOME_SIGNATURE_ROUTES} />
          </div>
        </div>
      </section>

      <CtaBand
        heading="Know where you want to go? Let's build the route."
        background={<TopographyBackground />}
        actions={
          <>
            <Button asChild variant="accent" size="brand">
              <Link href="/contact/">Start Planning</Link>
            </Button>
            <Button asChild variant="brand-ghost" size="brand">
              <a href={CONTACT.whatsappHref} target="_blank" rel="noopener">
                WhatsApp Us
              </a>
            </Button>
          </>
        }
      />
    </main>
  );
}
