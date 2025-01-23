import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io',"images.remotePatterns"],
  },
};

export default nextConfig;
