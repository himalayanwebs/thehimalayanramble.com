import type { ImageRef } from "@/components/blocks/media";
import type { FeatureBlockData } from "@/components/blocks/feature-block";
import type { InfoCardData } from "@/components/blocks/info-grid";
import type { TrustStat } from "@/components/blocks/trust-strip";

export interface Seo {
  title: string;
  description: string;
}

export interface PlaceSummary {
  slug: string;
  name: string;
  meta?: string;
  hook: string;
  image: ImageRef;
}

export interface PlaceData {
  slug: string;
  region: string;
  name: string;
  /** Value that must exactly match (case-insensitively) an <option> in the
   * contact form's destination select — most places fall back to their
   * region name there (only Himachal's 5 places and Zanskar get their own
   * dropdown entry), so this is NOT always place.name. See contact.html's
   * original select list. */
  destinationValue: string;
  seo: Seo;
  hero: {
    image: ImageRef;
    lede: string;
    ctaLabel: string;
  };
  blocks: FeatureBlockData[];
  /** Defaults to "Best time & getting here." when omitted — a couple of
   * pages (e.g. Dehradun) replace this section with a themed heading and
   * a mixed attraction/practical-info card set instead of the standard 4. */
  infoGridHeading?: string;
  infoGrid: InfoCardData[];
  cta: { heading: string };
}

export interface RegionData {
  slug: string;
  name: string;
  seo: Seo;
  hero: { image: ImageRef; lede: string };
  trust: TrustStat[];
  placesHeading: string;
  placesLede: string;
  /** Omitted entirely on regions with no dark "why us" section between the
   * mosaic and the CTA band (e.g. Delhi, a stopover guide, not a region we
   * "operate in"). */
  intro?: { heading: string; body: string[] };
  places: PlaceSummary[];
  /** destinationValue is omitted when the region has no matching option in
   * the contact form's destination select (e.g. Himachal Pradesh, whose
   * places are individually listed there instead of a region-level entry). */
  cta: { heading: string; label: string; destinationValue?: string };
}
