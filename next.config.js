/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['template.canva.com', 'edit.org'],
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
