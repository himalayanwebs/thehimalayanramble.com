import type { MetadataRoute } from "next";
import { getAllRegions, getAllPlaces } from "@/data";

// Required by output: "export" — without this, Next can't confirm the
// route is fully static at build time and the export fails.
export const dynamic = "force-static";

const SITE_URL = "https://thehimalayanramble.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/about/`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/blog/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact/`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/terms/`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  const regionRoutes: MetadataRoute.Sitemap = getAllRegions().map((region) => ({
    url: `${SITE_URL}/${region.slug}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const placeRoutes: MetadataRoute.Sitemap = getAllPlaces().map((place) => ({
    url: `${SITE_URL}/${place.region}/${place.slug}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...regionRoutes, ...placeRoutes];
}
