import type { NextConfig } from "next";
import path from "path";
import withBundleAnalyzer from '@next/bundle-analyzer';

const apiUrl = process.env.NEXT_PUBLIC_API_URL ? new URL(process.env.NEXT_PUBLIC_API_URL) : null;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tekiro.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      ...(apiUrl ? [{
        protocol: apiUrl.protocol.replace(':', '') as 'http' | 'https',
        hostname: apiUrl.hostname,
        port: apiUrl.port || undefined,
        pathname: "/uploads/**",
      }] : []),
    ]
  },
  turbopack: {
    root: path.join(__dirname)
  }
};

const configWithAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);

export default configWithAnalyzer;
