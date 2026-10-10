import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    turbopackPluginRuntimeStrategy: "workerThreads",
  },
};

export default nextConfig;
