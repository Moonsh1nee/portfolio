import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // GitHub Pages serves static files only — no Node runtime, so no image
  // optimization server either. Pre-resize/compress images at source
  // instead (see public/about/ and public/projects/).
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
