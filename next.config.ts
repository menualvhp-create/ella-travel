import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ['192.168.17.132'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "www.orienthotelsl.com",
      },
      {
        protocol: "https",
        hostname: "flyingravana.eme-devops.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pannellum.org",
      },
    ],
  },
};


export default nextConfig;
