// Builds the static HTML of each language from dist/index.html (client build)
// and dist-ssr/entry-server.js (server build): "/" -> dist/index.html (fr),
// "/en" -> dist/en.html (en). Each page gets its own <html lang>, head tags,
// JSON-LD and prerendered markup that the client hydrates.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");
const templatePath = path.join(distDir, "index.html");

for (const file of [templatePath, ssrEntry]) {
  if (!fs.existsSync(file)) throw new Error(`Missing build output: ${file}`);
}

const { render, buildHead } = await import(pathToFileURL(ssrEntry).href);
const template = fs.readFileSync(templatePath, "utf8");

const fill = (marker, value, html) => {
  if (!html.includes(marker)) throw new Error(`Marker ${marker} not found in index.html`);
  return html.replace(marker, () => value);
};

const pages = [
  { lang: "fr", file: "index.html" },
  { lang: "en", file: "en.html" },
];

for (const { lang, file } of pages) {
  let html = template.replace(/<html lang="[^"]*">/, `<html lang="${lang}">`);
  html = fill("<!--app-head-->", buildHead(lang), html);
  html = fill("<!--app-html-->", render(lang), html);
  fs.writeFileSync(path.join(distDir, file), html);
  console.log(`Prerendered /${lang === "fr" ? "" : lang} -> dist/${file}`);
}

// A stale copy from the previous build setup would serve a duplicate of "/".
fs.rmSync(path.join(distDir, "fr.html"), { force: true });
