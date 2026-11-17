import { Language } from "../types";
import { IMAGES, META, PAGE_URL } from "./config";
import { buildStructuredData } from "./structuredData";


const escapeAttr = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** JSON for an inline <script>: "<" is escaped so the content can never close the tag. */
const inlineJson = (data: object) => JSON.stringify(data, null, 2).replace(/</g, "\\u003c");

/** Language-specific <head> tags: title, description, canonical, hreflang, social cards and JSON-LD. */
export const buildHead = (lang: Language): string => {
  const m = META[lang];
  const other: Language = lang === "fr" ? "en" : "fr";
  const url = PAGE_URL[lang];
  const image = IMAGES.og[lang];
  const a = escapeAttr;

  const tags = [
    `<title>${a(m.title)}</title>`,
    `<meta name="description" content="${a(m.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<link rel="alternate" hreflang="fr-CA" href="${PAGE_URL.fr}" />`,
    `<link rel="alternate" hreflang="fr" href="${PAGE_URL.fr}" />`,
    `<link rel="alternate" hreflang="en-CA" href="${PAGE_URL.en}" />`,
    `<link rel="alternate" hreflang="en" href="${PAGE_URL.en}" />`,
    `<link rel="alternate" hreflang="x-default" href="${PAGE_URL.fr}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${a(m.title)}" />`,
    `<meta property="og:description" content="${a(m.description)}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:type" content="image/jpeg" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${a(m.imageAlt)}" />`,
    `<meta property="og:locale" content="${m.ogLocale}" />`,
    `<meta property="og:locale:alternate" content="${META[other].ogLocale}" />`,
    `<meta property="og:site_name" content="JL Digital Services" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:site" content="@jlgouaho" />`,
    `<meta name="twitter:creator" content="@jlgouaho" />`,
    `<meta name="twitter:url" content="${url}" />`,
    `<meta name="twitter:title" content="${a(m.title)}" />`,
    `<meta name="twitter:description" content="${a(m.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<meta name="twitter:image:alt" content="${a(m.imageAlt)}" />`,
    ...buildStructuredData(lang).map(
      (block) => `<script type="application/ld+json">\n${inlineJson(block)}\n</script>`,
    ),
  ];

  return tags.join("\n    ");
};
