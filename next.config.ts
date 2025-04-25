import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // REMOVE output: 'export'
  basePath: '', // Remove this if not needed
  images: {
    // You can remove unoptimized: true if using next/image with optimization
    unoptimized: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
