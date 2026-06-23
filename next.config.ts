import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Next.js 16 - turbopack at the top level of nextConfig
  turbopack: {
    root: path.join(__dirname, "./"),
  },
};

export default nextConfig;
