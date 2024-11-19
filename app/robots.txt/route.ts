import getConfig from "next/config";

const { publicRuntimeConfig: { hostName } = { hostName: "" } } =
  getConfig() || ({} as any);

export const GET = () => {
  const content = `User-agent: Googlebot
Disallow: /nogooglebot/

User-agent: *
Allow: /

Sitemap: ${hostName}sitemap.xml`;
  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
