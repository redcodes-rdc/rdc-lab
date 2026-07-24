const fs = require("fs");
const path = require("path");

const SITE_URL = "https://lab.reddelacruz.dev";
const ROOT_DIR = path.resolve(__dirname, "..");
const EXCLUDED_DIRS = new Set([".git", "node_modules"]);
const INDEX_FILE = ["index", "html"].join(".");

function walkHtmlFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (EXCLUDED_DIRS.has(entry.name)) return [];
      return walkHtmlFiles(fullPath);
    }

    return entry.isFile() && entry.name.endsWith(".html") ? [fullPath] : [];
  });
}

function hasNoindex(html) {
  return Array.from(html.matchAll(/<meta\s+[^>]*>/gi)).some((match) => {
    const tag = match[0];
    return (
      /\sname=["']robots["']/i.test(tag) &&
      /\scontent=["'][^"']*noindex/i.test(tag)
    );
  });
}

function toUrlPath(filePath) {
  const relativePath = path.relative(ROOT_DIR, filePath).split(path.sep).join("/");

  if (relativePath === INDEX_FILE) return "/";
  if (relativePath.endsWith(`/${INDEX_FILE}`)) {
    return `/${relativePath.slice(0, -INDEX_FILE.length)}`;
  }

  return `/${relativePath}`;
}

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function sortUrlPaths(a, b) {
  if (a === "/") return -1;
  if (b === "/") return 1;
  return a.localeCompare(b);
}

const urlPaths = walkHtmlFiles(ROOT_DIR)
  .filter((filePath) => path.basename(filePath) !== "404.html")
  .filter((filePath) => !hasNoindex(fs.readFileSync(filePath, "utf8")))
  .map(toUrlPath)
  .sort(sortUrlPaths);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlPaths
  .map(
    (urlPath) => `  <url>
    <loc>${escapeXml(`${SITE_URL}${urlPath}`)}</loc>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

fs.writeFileSync(path.join(ROOT_DIR, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(ROOT_DIR, "robots.txt"), robots);

console.log(`Generated sitemap.xml with ${urlPaths.length} URLs.`);
