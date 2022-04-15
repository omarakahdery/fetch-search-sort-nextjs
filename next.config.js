/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "randomuser.me",
      "avatars.githubusercontent.com",
      "picsum.photos",
    ],
  },
};

module.exports = nextConfig;
