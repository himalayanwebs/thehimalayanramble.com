import type { MetadataRoute } from "next";

// Required by output: "export" — without this, Next can't confirm the
// route is fully static at build time and the export fails.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      {
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/partners/", "/partner-resources/"],
      },
    ],
    sitemap: "https://www.thehimalayanramble.com/sitemap.xml",
  };
}
