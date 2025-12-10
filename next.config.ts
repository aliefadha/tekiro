import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'localhost',
      'tekiro.com',
      'images.unsplash.com',
      'cdn.shopify.com',
      'via.placeholder.com'
    ]
  },
  turbopack: {
    root: path.join(__dirname)
  }
};

export default nextConfig;
