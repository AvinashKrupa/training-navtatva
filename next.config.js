/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    HOST_NAME: process.env.HOST_NAME,
    API_BASE_URL: process.env.API_BASE_URL,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  pageExtensions: ["tsx", "ts", "jsx", "js"],
};

module.exports = nextConfig;
