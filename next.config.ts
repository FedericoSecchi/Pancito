import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Pancito",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
