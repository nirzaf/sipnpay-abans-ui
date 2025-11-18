import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "l4lqatar.blr1.digitaloceanspaces.com",
      },
    ],
  },
};

export default nextConfig;
