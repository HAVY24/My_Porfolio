import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Friendly for static export / Vercel optimization fallbacks
  },
};

export default nextConfig;
