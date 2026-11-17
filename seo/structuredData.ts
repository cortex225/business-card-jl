import { DATA } from "../constants";
import { Language } from "../types";
import { PAGE_URL, SITE_URL, IMAGES } from "./config";

const PERSON_ID = `${SITE_URL}/#person`;
const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PORTFOLIO_URL = "https://www.jlgouaho.com/fr";

const SAME_AS = [DATA.linkedin, DATA.github, DATA.x, PORTFOLIO_URL];

const ADDRESS = {
  "@type": "PostalAddress",
  addressLocality: "Granby",
  addressRegion: "QC",
  postalCode: "J2G",
  addressCountry: "CA",
};

const OCCUPATION_PLACES = [
  { "@type": "City", name: "Granby" },
  { "@type": "AdministrativeArea", name: "Estrie" },
  { "@type": "AdministrativeArea", name: "Montérégie" },
  { "@type": "State", name: "Québec" },
  { "@type": "Country", name: "Canada" },
];

const AREA_SERVED = [
  { "@type": "City", name: "Granby" },
  { "@type": "City", name: "Sherbrooke" },
  { "@type": "City", name: "Drummondville" },
  { "@type": "City", name: "Saint-Hyacinthe" },
  { "@type": "City", name: "Bromont" },
  { "@type": "AdministrativeArea", name: "Montérégie" },
  { "@type": "AdministrativeArea", name: "Estrie" },
  { "@type": "State", name: "Québec" },
  { "@type": "Country", name: "Canada" },
];

const TECH = [
  "React", "Next.js", "Node.js", "TypeScript", "Shopify", "WooCommerce", "WordPress",
  "n8n", "Make", "Zapier", "Stripe", "Cal.com",
];

const TEXT = {
  fr: {
    locale: "fr-CA",
    jobTitle: "Développeur web freelance",
    personDescription:
      "Déto Jean-Luc Gouaho est un développeur web freelance basé à Granby, au Québec. Fondateur de JL Digital Services (NEQ 2279991246), il crée des sites web, des boutiques en ligne et des automatisations pour des PME et des travailleurs autonomes, en français et en anglais.",
    disambiguating: "Développeur web freelance à Granby (Estrie, Québec), sites web, e-commerce et automatisation pour PME.",
    imageCaption: "Déto Jean-Luc Gouaho, développeur web à Granby, Québec",
    knowsAbout: ["Création de sites web", "Boutiques en ligne", "Automatisation d'entreprise", "Référencement local (SEO)", "Applications web"],
    occupation: "Développeur web freelance",
    responsibilities: "Création de sites web et de boutiques en ligne, automatisation de processus d'entreprise, référencement.",
    businessDescription:
      "Développeur web à Granby : sites web, boutiques en ligne et automatisation pour entrepreneurs et PME au Québec et au Canada.",
    slogan: "J'aide les entrepreneurs à vendre plus grâce au web",
    payment: "Virement bancaire, PayPal, carte de crédit",
    serviceTypes: ["Création de site web", "Boutique en ligne", "Automatisation d'entreprise", "Référencement SEO", "Application web"],
    catalog: "Services web",
    offers: [
      { name: "Création de site web professionnel", desc: "Site web rapide, adapté au mobile et optimisé pour le référencement local.", type: "Web Development", min: "1500" },
      { name: "Boutique en ligne clé en main", desc: "Boutique en ligne avec paiement, taxes du Québec et livraison configurés.", type: "E-commerce Development", min: "2500" },
      { name: "Automatisation et outils sur mesure", desc: "Automatisation des factures, relances et rapports, et outils internes sur mesure.", type: "Business Automation", min: "800" },
    ],
    breadcrumb: "Carte de visite numérique",
    siteDescription: "Carte de visite numérique de Déto Jean-Luc Gouaho, développeur web à Granby, Québec.",
  },
  en: {
    locale: "en-CA",
    jobTitle: "Freelance web developer",
    personDescription:
      "Déto Jean-Luc Gouaho is a freelance web developer based in Granby, Quebec. Founder of JL Digital Services (NEQ 2279991246), he builds websites, online stores and automations for small businesses and freelancers, in French and English.",
    disambiguating: "Freelance web developer in Granby (Eastern Townships, Quebec), websites, e-commerce and automation for small businesses.",
    imageCaption: "Déto Jean-Luc Gouaho, web developer in Granby, Quebec",
    knowsAbout: ["Website development", "Online stores", "Business automation", "Local SEO", "Web applications"],
    occupation: "Freelance web developer",
    responsibilities: "Building websites and online stores, automating business processes, search engine optimization.",
    businessDescription:
      "Web developer in Granby: websites, online stores and automation for entrepreneurs and small businesses in Quebec and Canada.",
    slogan: "I help entrepreneurs sell more through the web",
    payment: "Bank transfer, PayPal, credit card",
    serviceTypes: ["Website development", "Online store", "Business automation", "SEO", "Web application"],
    catalog: "Web services",
    offers: [
      { name: "Professional website", desc: "Fast, mobile-friendly website optimized for local search.", type: "Web Development", min: "1500" },
      { name: "Turnkey online store", desc: "Online store with payments, Quebec sales taxes and shipping set up.", type: "E-commerce Development", min: "2500" },
      { name: "Automation and custom tools", desc: "Automated invoices, follow-ups and reports, and custom internal tools.", type: "Business Automation", min: "800" },
    ],
    breadcrumb: "Digital business card",
    siteDescription: "Digital business card of Déto Jean-Luc Gouaho, web developer in Granby, Quebec.",
  },
} as const;

/** All JSON-LD blocks for one language version of the page. */
export const buildStructuredData = (lang: Language): object[] => {
  const t = TEXT[lang];
  const pageUrl = PAGE_URL[lang];

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: DATA.name,
    givenName: "Déto Jean-Luc",
    familyName: "Gouaho",
    alternateName: ["JL Gouaho", "Jean-Luc Gouaho"],
    jobTitle: t.jobTitle,
    description: t.personDescription,
    disambiguatingDescription: t.disambiguating,
    worksFor: { "@id": BUSINESS_ID },
    url: `${SITE_URL}/`,
    mainEntityOfPage: pageUrl,
    image: { "@type": "ImageObject", url: IMAGES.square, caption: t.imageCaption },
    email: DATA.email,
    telephone: DATA.phone,
    address: ADDRESS,
    sameAs: [...SAME_AS, DATA.whatsapp],
    knowsAbout: [...t.knowsAbout, ...TECH],
    hasOccupation: {
      "@type": "Occupation",
      name: t.occupation,
      occupationLocation: OCCUPATION_PLACES,
      skills: TECH.join(", "),
      responsibilities: t.responsibilities,
    },
    knowsLanguage: [
      { "@type": "Language", name: "French", alternateName: "fr" },
      { "@type": "Language", name: "English", alternateName: "en" },
    ],
  };

  const business = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": BUSINESS_ID,
    name: DATA.company,
    alternateName: ["JL Digital", "JL Gouaho"],
    legalName: DATA.company,
    taxID: `NEQ ${DATA.neq}`,
    description: t.businessDescription,
    slogan: t.slogan,
    url: `${SITE_URL}/`,
    logo: IMAGES.square,
    image: IMAGES.square,
    telephone: DATA.phone,
    email: DATA.email,
    priceRange: "$$",
    currenciesAccepted: "CAD",
    paymentAccepted: t.payment,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: DATA.phone,
        email: DATA.email,
        contactType: "sales",
        areaServed: "CA",
        availableLanguage: ["French", "English"],
      },
    ],
    address: ADDRESS,
    geo: { "@type": "GeoCoordinates", latitude: 45.4001, longitude: -72.7329 },
    areaServed: AREA_SERVED,
    serviceType: t.serviceTypes,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: t.catalog,
      itemListElement: t.offers.map((o) => ({
        "@type": "Offer",
        priceCurrency: "CAD",
        priceSpecification: { "@type": "PriceSpecification", priceCurrency: "CAD", minPrice: o.min },
        itemOffered: {
          "@type": "Service",
          name: o.name,
          description: o.desc,
          serviceType: o.type,
          provider: { "@id": BUSINESS_ID },
          areaServed: ["Granby", "Estrie", "Montérégie", "Québec", "Canada"],
        },
      })),
    },
    sameAs: SAME_AS,
    founder: { "@id": PERSON_ID },
  };

  // Mirrors the FAQ rendered on the page, as Google requires.
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: t.locale,
    mainEntity: DATA.faq[lang].map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: DATA.company,
    alternateName: "JL Digital",
    url: `${SITE_URL}/`,
    publisher: { "@id": BUSINESS_ID },
  };

  const webpage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: t.breadcrumb,
    description: t.siteDescription,
    inLanguage: t.locale,
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": PERSON_ID },
    primaryImageOfPage: IMAGES.og[lang],
  };

  return [person, business, faq, website, webpage];
};
