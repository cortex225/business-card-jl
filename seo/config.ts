import { Language } from "../types";

export const SITE_URL = "https://business.jlgouaho.com";

/** Canonical URL of each language version. French is the default, served at "/". */
export const PAGE_URL: Record<Language, string> = {
  fr: `${SITE_URL}/`,
  en: `${SITE_URL}/en`,
};

export const IMAGES = {
  /** 1200x630 social cards. */
  og: {
    fr: `${SITE_URL}/img/og-fr.jpg`,
    en: `${SITE_URL}/img/og-en.jpg`,
  } as Record<Language, string>,
  /** Square photo for structured data (logo, person image). */
  square: `${SITE_URL}/img/avatar-512.jpg`,
};

/** Page title and description per language (also applied when the visitor switches language). */
export const META: Record<Language, { title: string; description: string; ogLocale: string; imageAlt: string }> = {
  fr: {
    title: "Création de sites web à Granby | JL Digital Services",
    description:
      "Déto Jean-Luc Gouaho, développeur web à Granby (Québec) : sites web, boutiques en ligne et automatisation pour PME. Appel gratuit de 15 minutes.",
    ogLocale: "fr_CA",
    imageAlt: "Déto Jean-Luc Gouaho, JL Digital Services, développeur web à Granby, Québec",
  },
  en: {
    title: "Web Developer in Granby, Quebec | JL Digital Services",
    description:
      "Déto Jean-Luc Gouaho, web developer in Granby, Quebec: websites, online stores and automation for small businesses. Book a free 15-minute call.",
    ogLocale: "en_CA",
    imageAlt: "Déto Jean-Luc Gouaho, JL Digital Services, web developer in Granby, Quebec",
  },
};

/** Language of a URL path. Only "/en" serves the English HTML; every other path gets the French one. */
export const languageFromPath = (pathname: string): Language => (pathname === "/en" ? "en" : "fr");
