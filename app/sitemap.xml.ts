import React from "react";
import fs from "fs";

const Sitemap = () => {};

export const getServerSideProps: (props: any) => any = ({ res }) => {
  const baseUrl = {
    development: "http://localhost:3000",
    production: "http://localhost:3000",
    // production: "http://sanraaj.com",
    test: "http://localhost:5000",
  }[process.env.NODE_ENV];

  const staticPages = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "_app.js",
        "_document.js",
        "_error.js",
        "_app",
        "api",
        "404",
        "_document",
        "_error",
        "sitemap.xml.ts",
        "apply-now",
        "robots.txt.ts",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
