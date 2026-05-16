import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // For static export (GitHub Pages, Netlify, Render, etc.)
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Disable Turbopack for build (use webpack for static export)
  // Turbopack doesn't support static export yet
};

export default nextConfig;
