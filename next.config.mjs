/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    // Will be available on both server and client
    hostName: process.env.NEXTAUTH_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
