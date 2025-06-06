import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['upload.wikimedia.org'],
  },
  /* config options here */
};

export default nextConfig;
