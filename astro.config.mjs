import { defineConfig } from "astro/config";
import relativeLinks from "astro-relative-links";

// https://astro.build/config
export default defineConfig({
  integrations: [relativeLinks()],
  trailingSlash: "never",
  devToolbar: { enabled: false },
  build: {
    format: "file",
    inlineStylesheets: "never",
  },
  compressHTML: false,
  scopedStyleStrategy: "class",
  vite: {
    css: {
      devSourcemap: true,
    },
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.name.includes("css")) return "css/style.css";
            return "_astro/[name]-[hash][extname]";
          },
        },
      },
    },
  },
});
