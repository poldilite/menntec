/** @type {import('next').NextConfig} */
const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3000'
const cmsHostname = (() => {
  try { return new URL(cmsUrl).hostname } catch { return 'localhost' }
})()

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'http',  hostname: 'cms' },
      { protocol: 'http',  hostname: 'localhost' },
      { protocol: 'https', hostname: cmsHostname },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  env: {
    NEXT_PUBLIC_CMS_URL: cmsUrl,
  },
};

module.exports = nextConfig;
