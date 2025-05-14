// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        name: "Archivo",
        cssVariable: "--font-archivo",
        provider: fontProviders.fontsource(),
        subsets: ["latin"],
        variationSettings: "'wdth' [62.5, 75, 87.5, 100, 112.5, 125]",
        weights: ["100 900"],
      },
    ],
  },
});
