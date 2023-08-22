/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  output: "export",
  // Disable Image Optimazation API since it doesn't work with static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
