/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["randomuser.me", "avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
