import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Sitemap from "vite-plugin-sitemap";

const sitemapRoutes = [
  "/",
  "/brand-history",
  "/r-and-d-manufacturing-capabilities",
  "/products-and-solutions",
  "/innovation",
  "/sustainable-development-and-esg",
  "/ethics-and-corporate-responsibility",
  "/corporate-culture-and-values",
  "/news",
  "/corporate-honors",
  "/global-presence",
  "/contacts-by-region",
  "/partners",
  "/collaboration-opportunities",
  "/investors",
  "/at-zft-group",
  "/career-opportunities-and-development",
  "/non-discrimination-policy",
];

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: "https://www.zft-group.com",
      dynamicRoutes: sitemapRoutes,
      generateRobotsTxt: false,
    }),
  ],
});
