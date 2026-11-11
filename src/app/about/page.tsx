import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FeatureBlock } from "@/components/blocks/feature-block";
import { InfoGrid } from "@/components/blocks/info-grid";
import { TrustStrip } from "@/components/blocks/trust-strip";
import { CtaBand } from "@/components/blocks/cta-band";
import { Reveal } from "@/components/blocks/reveal";
import { TopographyBackground } from "@/components/effects/topography-background";
import { CONTACT, SOCIAL_LINKS } from "@/data/nav";
import { HOME_FOUNDER_BLOCK, HOME_TRUST_STATS } from "@/data/home";

const SITE_URL = "https://thehimalayanramble.com";
const PAGE_URL = `${SITE_URL}/about/`;

export const metadata: Metadata = {
  title: { absolute: "About The Himalayan Ramble | Shimla-Based Since 2000" },
  description:
    "The Himalayan Ramble is a Shimla-based, government-approved travel operator that has planned customized Himalayan trips since 2000. Meet the founder and see how trips are built.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About The Himalayan Ramble | Shimla-Based Since 2000",
    description:
      "A Shimla-based, government-approved operator planning customized Himalayan trips since 2000.",
    url: "/about/",
    images: [HOME_FOUNDER_BLOCK.media.src],
  },
};

const ABOUT_CARDS = [
  {
    title: "Where we are",
    body: "The office has been in Shimla since 2000 — currently on the Dhalli Bypass in Sanjauli. We are not a booking layer in another city reselling someone else's tour; the people who plan your route live on the same roads you will travel.",
  },
  {
    title: "How trips are built",
    body: "Every itinerary starts with a conversation about dates, group size, fitness, and what you actually want to see. We then build the route around seasonal road conditions, permit timelines, and the pace you want — not a fixed departure calendar.",
  },
  {
    title: "Who guides you",
    body: "Licensed local guides and porters who know the terrain, the culture, and the weather. The same people have been running these regions for years, and they are the reason we can tell you which pass is closed before you ask.",
  },
  {
    title: "Approvals",
    body: "The Himalayan Ramble is approved by the Department of Tourism, Himachal Pradesh, and the Ministry of Tourism, Government of India. The business has operated continuously from Shimla since 2000.",
  },
];

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "About The Himalayan Ramble",
        description:
          "The Himalayan Ramble is a Shimla-based, government-approved travel operator that has planned customized Himalayan trips since 2000.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        inLanguage: "en-IN",
      },
      {
        "@type": ["TravelAgency", "LocalBusiness", "Organization"],
        "@id": `${SITE_URL}/#organization`,
        name: "The Himalayan Ramble",
        url: SITE_URL,
        logo: `${SITE_URL}/assets/logo.webp`,
        image: `${SITE_URL}${HOME_FOUNDER_BLOCK.media.src}`,
        description:
          "Shimla-based, government-approved Himalayan travel operator running customized trips since 2000.",
        telephone: CONTACT.phone,
        email: CONTACT.email,
        foundingDate: "2000",
        founder: {
          "@type": "Person",
          name: "Sanjay Thakur",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Ground Floor, Rathore Complex, Dhalli Bypass, Sanjauli",
          addressLocality: "Shimla",
          addressRegion: "Himachal Pradesh",
          postalCode: "171006",
          addressCountry: "IN",
        },
        areaServed: [
          "Himachal Pradesh",
          "Ladakh",
          "Jammu & Kashmir",
          "Uttarakhand",
          "Sikkim",
          "Delhi",
          "Chandigarh",
        ],
        sameAs: SOCIAL_LINKS.map((link) => link.href),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
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
            name: "About",
            item: PAGE_URL,
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
        <section className="section section--tight" style={{ paddingBottom: 0 }}>
          <div className="container">
            <p className="meta">About</p>
            <h1 className="h2">A Shimla operator, not a booking layer.</h1>
            <p className="lede" style={{ marginTop: "var(--space-sm)" }}>
              The Himalayan Ramble has planned customized trips through Himachal, Ladakh, and the
              wider Himalaya from a small Shimla office since 2000. The routes are built by people
              who have driven them in more than one season.
            </p>
          </div>
        </section>

        <TrustStrip stats={HOME_TRUST_STATS} />

        <FeatureBlock data={HOME_FOUNDER_BLOCK} group="about-founder" />

        <section className="section">
          <div className="container">
            <Reveal className="max-w-[60ch]">
              <h2 className="h2">What that means for your trip.</h2>
              <p className="lede" style={{ marginTop: "var(--space-sm)" }}>
                A small operator on the ground can change the plan when the weather does. That is
                the point.
              </p>
            </Reveal>
            <div style={{ marginTop: "var(--space-xl)" }}>
              <InfoGrid cards={ABOUT_CARDS} />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal className="max-w-[60ch]">
              <h2 className="h2">Read the field notes first.</h2>
              <p className="lede" style={{ marginTop: "var(--space-sm)" }}>
                The blog is organized the way we think about the Himalaya — region by region, place
                by place. It is the fastest way to see how a route might fit together.
              </p>
              <p style={{ marginTop: "var(--space-md)" }}>
                <Link href="/blog/" className="link-accent">
                  Browse the field notes &rarr;
                </Link>
              </p>
            </Reveal>
          </div>
        </section>

        <CtaBand
          heading="Tell us where you want to go. We'll build the route."
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
