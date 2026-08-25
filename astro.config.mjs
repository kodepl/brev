import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import rehypeSlug from "rehype-slug";

export default defineConfig({
  site: "https://www.brev.pl",
  trailingSlash: "always",
  compressHTML: true,
  markdown: { rehypePlugins: [rehypeSlug] },
  integrations: [tailwind()],
});
