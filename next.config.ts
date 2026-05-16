import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const appRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Ensure Turbopack resolves from the Portfolio app folder, not the parent `port/` directory.
  turbopack: {
    root: appRoot,
  },
};

export default nextConfig;
