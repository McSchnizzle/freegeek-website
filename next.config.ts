import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable image optimization for the scraped images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "freegeek.org",
      },
    ],
  },
};

export default nextConfig;
