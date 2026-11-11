import type { NextConfig } from "next";

const HOME_LINK =
  '<https://thehimalayanramble.com/llms.txt>; rel="llms"; type="text/plain", ' +
  '<https://thehimalayanramble.com/index.md>; rel="alternate"; type="text/markdown"';

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    turbopackPluginRuntimeStrategy: "workerThreads",
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [{ key: "Link", value: HOME_LINK }],
      },
      {
        source: "/index.md",
        headers: [{ key: "Link", value: HOME_LINK }],
      },
    ];
  },
};

export default nextConfig;
