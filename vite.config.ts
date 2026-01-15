import { defineConfig } from "vite";

export default defineConfig({
  base: "/safeconnect-website/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
