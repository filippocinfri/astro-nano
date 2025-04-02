import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "http://blackswanpetter.com/",
  integrations: [mdx(), sitemap(), tailwind()],
});
