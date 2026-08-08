import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Media } from "@/components/blocks/media";
import { CtaBand } from "@/components/blocks/cta-band";
import { Reveal } from "@/components/blocks/reveal";
import { getAllRegions } from "@/data";

export const metadata: Metadata = {
  title: { absolute: "Blog — Field Notes by Region | The Himalayan Ramble" },
  description:
    "Region-by-region field notes from The Himalayan Ramble — Himachal Pradesh, Ladakh, Jammu & Kashmir, Uttarakhand, Sikkim, Delhi, and Chandigarh.",
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: "Blog — Field Notes by Region | The Himalayan Ramble",
    description:
      "Region-by-region field notes from The Himalayan Ramble, organized the way we actually think about the Himalaya.",
    url: "/blog/",
    images: ["/graphics/himachal-pradesh/kinnaur/pexels-ivan-larin-77752766-10081668.jpg"],
  },
};

const regions = getAllRegions();

// The blog index's per-region intro is its own distinct copy, not the same
// text as that region's own index page (region.placesLede) — ported
// verbatim from legacy blog.html.
const BLOG_LEDES: Record<string, string> = {
  "himachal-pradesh":
    "Our home turf. Shimla is where the office has always been — these five places are where most of our trips actually go.",
  ladakh:
    "A high-altitude desert on the Tibetan Plateau — monasteries, passes above 5,000m, and a lake that changes colour through the day.",
  "jammu-and-kashmir":
    "Houseboats on Dal Lake, ski slopes at Gulmarg, and the pilgrim road to Vaishno Devi.",
  uttarakhand: "Lake-side hill stations, the Ganges at Rishikesh, and skiing under Nanda Devi.",
  sikkim: "Kangchenjunga on the skyline, and a border pass that once carried the Silk Route.",
  delhi: "The gateway most Himalaya-bound trips pass through first.",
  chandigarh: "India's first planned city, and the last stop before Himachal on most routes north.",
};

export default function BlogPage() {
  return (
    <main id="main">
      <section className="hero" style={{ minHeight: "56vh" }}>
        <div className="hero__media">
          <Media
            image={{
              src: "/graphics/himachal-pradesh/kinnaur/pexels-ivan-larin-77752766-10081668.jpg",
              alt: "Terraced valley and mountain roads, Kinnaur, Himachal Pradesh",
            }}
            aspect="21x9"
            priority
          />
        </div>
        <div className="hero__scrim" aria-hidden="true" />
        <div className="hero__content on-dark">
          <p className="meta meta--on-dark hero__eyebrow">The Blog</p>
          <h1 className="h1">Field notes from twenty-five years in the mountains.</h1>
          <p className="lede hero__lede">
            Organized the way we actually think about the Himalaya — by region, then by place. All
            seven regions we operate in, one route at a time.
          </p>
        </div>
      </section>

      {regions.map((region, i) => (
        <div key={region.slug}>
          <section className="section">
            <div className="container">
              <p className="meta">
                Region {i + 1} of {regions.length}
              </p>
              <h2 className="h2">{region.name}</h2>
              <p className="lede" style={{ marginTop: "var(--space-sm)" }}>
                {BLOG_LEDES[region.slug]}
              </p>

              <div className="mosaic" style={{ marginTop: "var(--space-xl)" }}>
                {region.places.map((place) => (
                  <Reveal key={place.slug} group={region.slug} asChild>
                    <Link href={`/${region.slug}/${place.slug}/`} className="mosaic__tile">
                      <Media image={place.image} aspect="4x5" />
                      <div className="mosaic__name">
                        <h3 className="h3">{place.name}</h3>
                      </div>
                      {place.hook && <p className="mosaic__hook">{place.hook}</p>}
                    </Link>
                  </Reveal>
                ))}
                <Reveal group={region.slug} asChild>
                  <Link href={`/${region.slug}/`} className="mosaic__tile">
                    <div className="media media--4x5">
                      <div className="flex flex-col items-center gap-2 px-4 text-center">
                        <span className="h3" style={{ marginBottom: "var(--space-3xs)" }}>
                          View All {region.name} &rarr;
                        </span>
                        <span className="mosaic__hook" style={{ margin: 0 }}>
                          Full region overview
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              </div>
            </div>
          </section>

          {i < regions.length - 1 && <hr className="rule container" style={{ marginBlock: 0 }} />}
        </div>
      ))}

      <CtaBand
        heading="Found the region? Let's build the route."
        actions={
          <Button asChild variant="accent" size="brand">
            <Link href="/contact/">Start Planning</Link>
          </Button>
        }
      />
    </main>
  );
}
