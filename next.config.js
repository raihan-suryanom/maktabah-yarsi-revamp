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
      {
        protocol: 'https',
        hostname: 'ebooks.gramedia.com',
      },
      {
        protocol: 'https',
        hostname: 'toko-bukumuslim.com',
      },
      {
        protocol: 'https',
        hostname: 'toko-muslim.com',
      },
      {
        protocol: 'https',
        hostname: 'digilib.smkislam1blitar.sch.id',
      },
      {
        protocol: 'https',
        hostname: 'online.fliphtml5.com',
      },
      {
        protocol: 'https',
        hostname: 'icp.sch.id',
      },
      {
        protocol: 'https',
        hostname: 'emir.co.id',
      },
      {
        protocol: 'https',
        hostname: 'inc.mizanstore.com',
      },
      {
        protocol: 'https',
        hostname: 'opac.atmaluhur.ac.id',
      },
      {
        protocol: 'https',
        hostname: 'deepublishstore.com',
      },
      {
        protocol: 'https',
        hostname: 'www.belbuk.com',
      },
      {
        protocol: 'https',
        hostname: 'eperpus.kemenag.go.id',
      },
      {
        protocol: 'https',
        hostname: 'ia802303.us.archive.org',
      },
      {
        protocol: 'https',
        hostname: 'perpustakaan.gunungsitolikota.go.id',
      },
      {
        protocol: 'https',
        hostname: 'www.bukukita.com',
      },
      {
        protocol: 'https',
        hostname: 'pustakabahasariau.kemdikbud.go.id',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
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
