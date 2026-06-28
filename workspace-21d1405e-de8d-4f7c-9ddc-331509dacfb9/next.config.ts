import type { NextConfig } from "next";

// ╔══════════════════════════════════════════════════════════════════╗
// ║  CONFIGURED — replace these with your real values                  ║
// ╚══════════════════════════════════════════════════════════════════╝
const GITHUB_USERNAME = "aaradhyamishra229-debug";
const REPO_NAME = "misbey-digitals";
const BASE_PATH = `/${REPO_NAME}`;

// GitHub Pages project sites need basePath + assetPrefix = /repo-name.
// But in DEV (and on Vercel/Netlify) we want basePath = "" so the
// root URL works. We detect production static-export builds via the
// NEXT_PUBLIC_GITHUB_PAGES env var, which the deploy workflow sets.
const IS_GITHUB_PAGES_BUILD = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  // ─── Required for GitHub Pages: static HTML export ───
  output: "export",
  // basePath must match the repo name on GitHub Pages project sites.
  // Only set during production builds — empty in dev so localhost:3000 works.
  basePath: IS_GITHUB_PAGES_BUILD ? BASE_PATH : "",
  assetPrefix: IS_GITHUB_PAGES_BUILD ? BASE_PATH : "",
  // Disable image optimization — needs a server. Static export uses raw <img>.
  images: {
    unoptimized: true,
  },
  // Generate trailing slashes for clean GitHub Pages URLs
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
