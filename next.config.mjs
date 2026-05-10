import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  allowedDevOrigins: ['m4-pro.local', '192.168.0.126'],
  async headers() {
    return [
      {
        source: '/opengraph-image',
        headers: [{ key: 'Content-Type', value: 'image/png' }],
      },
      {
        source: '/api/search',
        headers: [{ key: 'Content-Type', value: 'application/json' }],
      },
      {
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};

export default withMDX(config);
