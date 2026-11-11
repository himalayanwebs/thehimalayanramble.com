import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/blocks/hero";
import { TrustStrip } from "@/components/blocks/trust-strip";
import { FeatureBlock } from "@/components/blocks/feature-block";
import { Mosaic } from "@/components/blocks/mosaic";
import { CtaBand } from "@/components/blocks/cta-band";
import { InfoGrid } from "@/components/blocks/info-grid";
import { Reveal } from "@/components/blocks/reveal";
import { StampMark } from "@/components/home/stamp-mark";
import { SignatureRoutes } from "@/components/home/route-list";
import { TestimonialsMarquee, Stars } from "@/components/blocks/testimonials-marquee";
import { TopographyBackground } from "@/components/effects/topography-background";
import { GoogleMapCard } from "@/components/map";
import { CONTACT, NAV_REGIONS, SOCIAL_LINKS } from "@/data/nav";
import {
  HOME_SEO,
  HOME_HERO,
  HOME_TRUST_STATS,
  HOME_TRUST_BADGES,
  HOME_FOUNDER_BLOCK,
  HOME_MOSAIC,
  HOME_SIGNATURE_ROUTES,
  HOME_FAQS,
} from "@/data/home";

const SITE_URL = "https://thehimalayanramble.com";

const heroImageUrl = HOME_HERO.image.src.startsWith("http")
  ? HOME_HERO.image.src
  : `${SITE_URL}${HOME_HERO.image.src}`;

export const metadata: Metadata = {
  title: { absolute: HOME_SEO.title },
  description: HOME_SEO.description,
  alternates: {
    canonical: `${SITE_URL}/`,
    types: {
      "text/plain": `${SITE_URL}/llms.txt`,
      "text/markdown": `${SITE_URL}/index.md`,
    },
  },
  openGraph: {
    title: HOME_SEO.title,
    description: HOME_SEO.description,
    url: `${SITE_URL}/`,
    images: [heroImageUrl],
  },
};

export default function Home() {
  const homeUrl = `${SITE_URL}/`;
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const pageId = `${homeUrl}#webpage`;
  const faqId = `${homeUrl}#faq`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TravelAgency", "LocalBusiness", "Organization"],
        "@id": organizationId,
        name: "The Himalayan Ramble",
        image: heroImageUrl,
        logo: `${SITE_URL}/assets/logo.webp`,
        url: SITE_URL,
        telephone: CONTACT.phone,
        email: CONTACT.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Ground Floor, Rathore Complex, Dhalli Bypass, Sanjauli",
          addressLocality: "Shimla",
          addressRegion: "Himachal Pradesh",
          postalCode: "171006",
          addressCountry: "IN",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: CONTACT.phone,
          email: CONTACT.email,
          contactType: "customer service",
          availableLanguage: ["English", "Hindi"],
        },
        priceRange: "₹₹",
        foundingDate: "2000",
        founder: {
          "@type": "Person",
          name: "Sanjay Thakur",
        },
        description: HOME_SEO.description,
        areaServed: NAV_REGIONS.map((region) => ({
          "@type": "AdministrativeArea",
          name: region.name,
        })),
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            name: "Approved by the Department of Tourism, Himachal Pradesh",
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "Approved by the Ministry of Tourism, Government of India",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: 93,
          bestRating: "5",
        },
        sameAs: [
          "https://share.google/9D0WT2HgiJPNx5L6Z",
          ...SOCIAL_LINKS.map((link) => link.href),
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: "The Himalayan Ramble",
        description: HOME_SEO.description,
        publisher: { "@id": organizationId },
        inLanguage: "en-IN",
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url: homeUrl,
        name: HOME_SEO.title,
        description: HOME_SEO.description,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: heroImageUrl,
        },
        breadcrumb: { "@id": `${homeUrl}#breadcrumb` },
        mainEntity: { "@id": faqId },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${homeUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: homeUrl,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${homeUrl}#destinations`,
        name: "Himalayan destinations",
        numberOfItems: NAV_REGIONS.length,
        itemListElement: NAV_REGIONS.map((region, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: region.name,
          url: `${SITE_URL}/${region.slug}/`,
        })),
      },
      ...HOME_SIGNATURE_ROUTES.map((route) => ({
        "@type": "TouristTrip",
        name: route.title,
        description: route.body,
        url: `${SITE_URL}${route.href}`,
        provider: { "@id": organizationId },
        itinerary: {
          "@type": "ItemList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: route.title,
            },
          ],
        },
      })),
      {
        "@type": "FAQPage",
        "@id": faqId,
        mainEntity: HOME_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
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
          image={HOME_HERO.image}
          eyebrow={HOME_HERO.eyebrow}
          title={
            <span className="misregister">
              We know which pass is closed{" "}
              <span className="text-brand-accent">before</span> you ask.
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

        <section className="section" id="reviews">
          <div className="container">
            <Reveal className="max-w-[60ch]">
              <h2 className="h2">What travelers say, straight from Google.</h2>
              <div className="testimonials-source">
                <div className="testimonials-source__rating">
                  <span className="testimonials-source__score">5.0</span>
                  <Stars rating={5} className="testimonials-source__stars" />
                </div>
                <a
                  href="https://share.google/9D0WT2HgiJPNx5L6Z"
                  target="_blank"
                  rel="noopener"
                  className="link-accent"
                >
                  Read all reviews on Google &rarr;
                </a>
              </div>
            </Reveal>
          </div>
          <TestimonialsMarquee />
        </section>

        <section className="section" id="location">
          <div className="container">
            <Reveal className="max-w-[60ch] mb-8">
              <h2 className="h2">Find Us</h2>
            </Reveal>
            <GoogleMapCard />
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <Reveal className="max-w-[60ch]">
              <h2 className="h2">Questions before you plan.</h2>
              <p className="lede" style={{ marginTop: "var(--space-sm)" }}>
                The short answers. For the long version, call or send an enquiry.
              </p>
            </Reveal>
            <div style={{ marginTop: "var(--space-xl)" }}>
              <InfoGrid
                cards={HOME_FAQS.map((faq) => ({
                  title: faq.question,
                  body: faq.answer,
                }))}
              />
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
    </>
  );
}