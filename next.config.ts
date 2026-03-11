import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages: site is served at https://federicosecchi.github.io/Pancito
  basePath: process.env.NODE_ENV === "production" ? "/Pancito" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/Pancito/" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
