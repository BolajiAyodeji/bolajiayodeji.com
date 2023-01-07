import { writeFileSync } from "fs";
import { globby } from "globby";
import prettier from "prettier";

async function generate() {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");
  const pages = await globby([
    "pages/**/*.{js,jsx,ts,tsx,mdx}",
    "app/**/*.{js,jsx,ts,tsx,mdx}",
    "!app/**/[*.{js,jsx,ts,tsx,mdx}",
    "!pages/_*.{js,jsx,ts,tsx,mdx}",
    "!pages/api"
  ]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            const path = page.replace("app", "").replace(/\.[^/.]+$/, ""); // Remove "/app" and file extension
            const indexPath = path === "/index";
            const route = indexPath ? path.replace("/index", "/") : path;
            const changeFreq = "<changefreq>weekly</changefreq>";
            const priority = indexPath ? "<priority>1.00</priority>" : "<priority>0.80</priority>";

            return `
            <url>
            <loc>${`bolajiayodeji.com${route}`}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            ${changeFreq}
            ${priority}
        </url>
            `;
          })
          .join("")}
    </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html"
  });

  writeFileSync("public/sitemap.xml", formatted);
}

generate();
