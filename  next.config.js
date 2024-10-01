// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables React's strict mode for highlighting potential problems
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
  // You can add other Next.js configurations here
  // Example: env: { CUSTOM_KEY: 'value' },
};

module.exports = nextConfig;
