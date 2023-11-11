/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'template.canva.com',
      },
      {
        protocol: 'https',
        hostname: 'edit.org',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: process.env.DEBUG === 'true',
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: process.env.OPEN_ANALYZER === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
