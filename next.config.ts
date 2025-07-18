/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "randomuser.me",
      "northwestriders.com",
      "sanfranpsycho.com",
      "partsandlaborshop.com",
      "cdn.example.com"
    ],
  },
};

export default nextConfig;
