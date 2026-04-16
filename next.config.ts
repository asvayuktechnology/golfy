import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gofly-next-js.vercel.app",
        pathname: "/**",
      },
    ],
    // Allows relative paths from /public
    unoptimized: false,
  },
  // Enable strict mode
  reactStrictMode: true,
};

export default nextConfig;
