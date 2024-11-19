import NewsService from "@/services/NewsService";
import { NewsItem } from "@/types/news";
import getConfig from "next/config";

const { publicRuntimeConfig: { hostName } = { hostName: "" } } =
  getConfig() || ({} as any);

const staticPages: {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: string;
}[] = [
  {
    loc: `${hostName}`,
    priority: "1.0",
  },
  {
    loc: `${hostName}contact`,
  },
  {
    loc: `${hostName}privacy-policy`,
  },
];

export const GET = async () => {
  const newNews = (await NewsService.getData().catch(() => {}))?.data || [];

  const now = new Date();
  const today = [now.getFullYear(), now.getMonth(), now.getDate()].join("-");
  const urls = staticPages.map(
    (page) => `
    <url>
      <loc>${page.loc}</loc>
      <lastmod>${page.lastmod || today}</lastmod>
      <changefreq>${page.changefreq || "monthly"}</changefreq>
      <priority>${page.priority || "0.8"}</priority>
    </url>
  `
  );

  const newsList = newNews.map(
    (news: NewsItem) => `
    <url>
      <loc>${hostName}${news.slug_key}</loc>
      <lastmod>${news.createdAt}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.9</priority>
    </url>
  `
  );
  const content = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.join("\n")}
      ${newsList.join("\n")}
    </urlset> `;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/xml",
    },
  });
};
