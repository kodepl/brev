import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { rubricSlug } from "../site.config";

const origin = "https://www.brev.pl";

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog");
  const cats = [...new Set(posts.map((p) => p.data.category).filter(Boolean))] as string[];
  const pages = ["/", "/blog/", "/dzialy/", "/o-nas/", "/kontakt/", "/polityka-prywatnosci/", "/regulamin/"];
  const urls = [
    ...pages.map((p) => `${origin}${p}`),
    ...cats.map((c) => `${origin}/dzialy/${rubricSlug(c)}/`),
    ...posts.map((p) => `${origin}/blog/${p.slug}/`),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}
</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
