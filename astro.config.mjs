import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://MarvyK.github.io", // Replace with your GitHub username
  // base: "/SamfordITSolutions",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: "static",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    build: {
      cssMinify: "lightningcss",
    },
  },
});
