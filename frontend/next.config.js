/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cms', 'localhost', 'via.placeholder.com'],
    formats: ['image/avif', 'image/webp'],
  },
  env: {
    NEXT_PUBLIC_CMS_URL: process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3000',
  },
};

module.exports = nextConfig;
