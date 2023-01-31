/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["robohash.org", "firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig
