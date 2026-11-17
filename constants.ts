import { AppData, Language, Translations } from "./types";

// First developer role (Royal Broker Solutions, August 2022).
const YEARS = Math.max(
  1,
  Math.floor((Date.now() - new Date("2022-08-01").getTime()) / (365.25 * 24 * 3600 * 1000)),
);

export const DATA: AppData = {
  name: "Déto Jean-Luc Gouaho",
  company: "JL Digital Services",
  neq: "2279991246",
  avatar: "/img/avatar.png",
  title: {
    fr: "J'aide les entrepreneurs à vendre plus grâce au web",
    en: "I help entrepreneurs sell more through the web",
  },
  location: "Québec, Canada",
  email: "jl.gouaho@gmail.com",
  website: "https://jlgouaho.com",
  blogUrl: "https://jlgouaho.com/blog",
  linkedin: "https://linkedin.com/in/jlgouaho/",
  github: "https://github.com/cortex225",
  x: "https://x.com/jlgouaho",
  whatsapp: "https://wa.me/14505211098",
  phone: "+14505211098",
  calendly: "https://cal.com/jean-luc-gouaho-zgnemm/jl-digital-services-call",
  stack: [
    "Sites Web",
    "Boutiques en Ligne",
    "Apps Web & Mobile",
    "Automatisation",
    "SEO",
    "Stratégie Digitale",
  ],
  about: {
    fr: "Je suis développeur full-stack depuis 2022. Je crée des sites, des boutiques en ligne et des outils sur mesure pour des PME et des travailleurs autonomes, du design à la mise en ligne. Vous traitez directement avec la personne qui écrit le code, et vous gardez la propriété de votre site et de vos comptes.",
    en: "I've been a full-stack developer since 2022. I build websites, online stores and custom tools for small businesses and freelancers, from design to launch. You deal directly with the person who writes the code, and you keep ownership of your site and accounts.",
  },
  services: {
    fr: [
      {
        name: "Site vitrine",
        desc: "Un site rapide, clair sur ce que vous faites et facile à trouver sur Google, avec un bouton d'appel ou de prise de rendez-vous bien visible. Exemples : l'Hôpital Vétérinaire Dufferin et le site de Marie-Antoine Aka.",
        features: ["Référencement local", "Mobile d'abord", "Formulaire ou prise de RDV"],
        icon: "Globe",
      },
      {
        name: "Boutique en ligne",
        desc: "Catalogue, paiement, taxes et livraison configurés sur Shopify, WooCommerce ou Stripe selon votre volume. Je vous montre comment ajouter vos produits et traiter une commande vous-même.",
        features: ["Paiement Stripe ou Shopify", "Taxes du Québec", "Formation incluse"],
        icon: "ShoppingBag",
      },
      {
        name: "Automatisation et outils sur mesure",
        desc: "Factures, relances, rapports ou tri de candidatures : je relie vos outils entre eux (n8n, Make, API) ou je construis l'outil qui manque. Chez Royal Broker, j'ai par exemple écrit un tri automatique de CV en Python.",
        features: ["Intégrations API", "n8n et Make", "Outils internes"],
        icon: "Workflow",
      },
    ],
    en: [
      {
        name: "Business website",
        desc: "A fast site that says clearly what you do and is easy to find on Google, with a visible call or booking button. Examples: Hôpital Vétérinaire Dufferin and Marie-Antoine Aka's site.",
        features: ["Local SEO", "Mobile first", "Contact form or booking"],
        icon: "Globe",
      },
      {
        name: "Online store",
        desc: "Catalog, payments, taxes and shipping set up on Shopify, WooCommerce or Stripe depending on your volume. I show you how to add products and handle an order yourself.",
        features: ["Stripe or Shopify payments", "Quebec sales taxes", "Training included"],
        icon: "ShoppingBag",
      },
      {
        name: "Automation and custom tools",
        desc: "Invoices, follow-ups, reports or resume screening: I connect your tools (n8n, Make, APIs) or build the one that's missing. At Royal Broker, for example, I wrote an automated resume screener in Python.",
        features: ["API integrations", "n8n and Make", "Internal tools"],
        icon: "Workflow",
      },
    ],
  },
  process: {
    fr: [
      {
        step: "01",
        title: "Appel découverte",
        desc: "15 min pour comprendre votre business, vos défis et vos objectifs. Sans engagement.",
      },
      {
        step: "02",
        title: "Proposition sur mesure",
        desc: "Je vous envoie une proposition écrite avec le périmètre, le prix et le délai.",
      },
      {
        step: "03",
        title: "Création et validation",
        desc: "Je construis par étapes et vous validez chacune sur un lien de prévisualisation.",
      },
      {
        step: "04",
        title: "Mise en ligne et suivi",
        desc: "Le site est en ligne sur votre domaine, je vous montre comment le mettre à jour et je reste joignable pour les corrections.",
      },
    ],
    en: [
      {
        step: "01",
        title: "Discovery Call",
        desc: "15 min to understand your business, challenges, and goals. No commitment.",
      },
      {
        step: "02",
        title: "Custom Proposal",
        desc: "I send a written proposal with the scope, price and timeline.",
      },
      {
        step: "03",
        title: "Build & Validate",
        desc: "I build in stages and you approve each one on a preview link.",
      },
      {
        step: "04",
        title: "Launch and follow-up",
        desc: "The site goes live on your domain, I show you how to update it and stay reachable for fixes.",
      },
    ],
  },
  stats: {
    fr: [
      { value: `${YEARS}+`, label: "Ans de développement" },
      { value: "10+", label: "Projets en ligne" },
      { value: "-78%", label: "Coûts cloud réduits (Royal Broker)" },
      { value: "48h", label: "Délai de réponse" },
    ],
    en: [
      { value: `${YEARS}+`, label: "Years of development" },
      { value: "10+", label: "Projects live" },
      { value: "-78%", label: "Cloud costs cut (Royal Broker)" },
      { value: "48h", label: "Response time" },
    ],
  },
  expertise: {
    fr: [
      {
        title: "Développement web",
        items: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
      },
      {
        title: "E-commerce",
        items: ["Shopify", "WooCommerce", "Stripe", "Solutions sur mesure"],
      },
      {
        title: "Automatisation",
        items: ["n8n", "Make", "Zapier", "API & intégrations"],
      },
      {
        title: "SEO & GEO",
        items: ["SEO local Québec", "Schema.org", "Core Web Vitals", "Optimisation IA"],
      },
    ],
    en: [
      {
        title: "Web development",
        items: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
      },
      {
        title: "E-commerce",
        items: ["Shopify", "WooCommerce", "Stripe", "Custom solutions"],
      },
      {
        title: "Automation",
        items: ["n8n", "Make", "Zapier", "API & integrations"],
      },
      {
        title: "SEO & GEO",
        items: ["Local SEO Quebec", "Schema.org", "Core Web Vitals", "AI optimization"],
      },
    ],
  },
  faq: {
    fr: [
      {
        q: "Qui est Déto Jean-Luc Gouaho ?",
        a: "Je suis développeur web à Granby, au Québec, et je travaille comme développeur full-stack depuis 2022. Sous JL Digital Services, je crée des sites, des boutiques et des automatisations pour des PME et des travailleurs autonomes. J'ai aussi lancé des projets comme RecruitEasy.ca et LeadMapper."
      },
      {
        q: "Qu'avez-vous déjà réalisé ?",
        a: "Des sites clients comme l'Hôpital Vétérinaire Dufferin et le site de Marie-Antoine Aka, et des applications comme LeadMapper, PlayerConnect ou Budget Buddy. Plus d'une dizaine sont en ligne ; la liste complète est sur jlgouaho.com."
      },
      {
        q: "Cette carte de visite, c'est quoi exactement ?",
        a: "C'est votre point d'entrée unique pour me connaître et me contacter. Scannez le QR code pour la sauvegarder dans vos contacts. Vous y trouvez mes services, mes projets, mes technos, et un accès direct pour réserver un appel gratuit de 15 minutes."
      },
      {
        q: "Comment vous contacter ou collaborer avec vous ?",
        a: "Le plus simple : réservez un appel découverte gratuit de 15 minutes via le bouton sur cette carte. Vous pouvez aussi m'écrire à jl.gouaho@gmail.com, sur LinkedIn ou WhatsApp. Je réponds en moins de 48h."
      },
      {
        q: "Travaillez-vous avec des clients à l'international ?",
        a: "Oui. Je travaille à distance, en français ou en anglais, par appel vidéo et outils partagés."
      },
      {
        q: "Pourquoi JL Digital Services est-elle enregistrée au Québec ?",
        a: "Mon entreprise est enregistrée au Registraire des entreprises du Québec sous le NEQ 2279991246. Chaque projet a un contrat écrit et des factures officielles."
      }
    ],
    en: [
      {
        q: "Who is Déto Jean-Luc Gouaho?",
        a: "I'm a web developer based in Granby, Quebec, working as a full-stack developer since 2022. Under JL Digital Services, I build websites, stores and automations for small businesses and freelancers. I've also launched projects like RecruitEasy.ca and LeadMapper."
      },
      {
        q: "What have you already built?",
        a: "Client sites like Hôpital Vétérinaire Dufferin and Marie-Antoine Aka's site, and apps like LeadMapper, PlayerConnect and Budget Buddy. More than ten are live; the full list is on jlgouaho.com."
      },
      {
        q: "What is this digital card exactly?",
        a: "It's your single entry point to learn about me and get in touch. Scan the QR code to save it to your contacts. You'll find my services, projects, tech stack, and direct access to book a free 15-minute discovery call."
      },
      {
        q: "How can I reach or work with you?",
        a: "Easiest: book a free 15-minute discovery call via the button on this card. You can also email me at jl.gouaho@gmail.com, or reach out on LinkedIn or WhatsApp. I respond within 48h."
      },
      {
        q: "Do you work with international clients?",
        a: "Yes. I work remotely, in French or English, over video calls and shared tools."
      },
      {
        q: "Why is JL Digital Services registered in Quebec?",
        a: "My business is registered with the Quebec Enterprise Register under NEQ 2279991246. Every project comes with a written contract and official invoices."
      }
    ]
  },
  projects: {
    fr: [
      {
        name: 'Marie-Antoine Aka',
        desc: { fr: "Site d'une cheffe privée et créatrice à Montréal : onze pages prérendues, rapides et bien référencées, sans serveur à maintenir.", en: 'Site for a private chef and creator in Montreal: eleven prerendered pages, fast and well indexed, with no server to maintain.' },
        url: "https://marie-antoine.jlgouaho.com",
        tags: ['React', 'Vite', 'SEO'],
        image: "/img/projects/marie-antoine.jpg",
        icon: "Globe"
      },
      {
        name: 'Hôpital Vétérinaire Dufferin',
        desc: { fr: "Refonte du site d'une clinique vétérinaire : services, équipe, galerie et prise de rendez-vous.", en: "Redesign of a veterinary clinic's site: services, team, gallery and appointment booking." },
        url: "https://hvd.jlgouaho.com",
        tags: ['React', 'TypeScript', 'Tailwind'],
        image: "/img/projects/hvd.jpg",
        icon: "Globe"
      },
      {
        name: 'LeadMapper',
        desc: { fr: 'Outil de prospection qui repère sur Google Maps les commerces sans site web et les note sur 100.', en: 'Prospecting tool that finds local businesses without a website on Google Maps and scores them out of 100.' },
        url: "https://lead-mapper.jlgouaho.com",
        tags: ['React', 'Google Places', 'Leaflet'],
        image: "/img/projects/leadmapper.jpg",
        icon: "Globe"
      },
      {
        name: 'Akwaba',
        desc: { fr: "Site immersif sur la Côte d'Ivoire, avec une carte 3D qui guide un voyage en cinq régions.", en: "Immersive site about Côte d'Ivoire, with a 3D map guiding a journey through five regions." },
        url: "https://akwaba.jlgouaho.com",
        tags: ['Three.js', 'GSAP', 'Vite'],
        image: "/img/projects/akwaba.jpg",
        icon: "Globe"
      }
    ],
    en: [
      {
        name: 'Marie-Antoine Aka',
        desc: { fr: "Site d'une cheffe privée et créatrice à Montréal : onze pages prérendues, rapides et bien référencées, sans serveur à maintenir.", en: 'Site for a private chef and creator in Montreal: eleven prerendered pages, fast and well indexed, with no server to maintain.' },
        url: "https://marie-antoine.jlgouaho.com",
        tags: ['React', 'Vite', 'SEO'],
        image: "/img/projects/marie-antoine.jpg",
        icon: "Globe"
      },
      {
        name: 'Hôpital Vétérinaire Dufferin',
        desc: { fr: "Refonte du site d'une clinique vétérinaire : services, équipe, galerie et prise de rendez-vous.", en: "Redesign of a veterinary clinic's site: services, team, gallery and appointment booking." },
        url: "https://hvd.jlgouaho.com",
        tags: ['React', 'TypeScript', 'Tailwind'],
        image: "/img/projects/hvd.jpg",
        icon: "Globe"
      },
      {
        name: 'LeadMapper',
        desc: { fr: 'Outil de prospection qui repère sur Google Maps les commerces sans site web et les note sur 100.', en: 'Prospecting tool that finds local businesses without a website on Google Maps and scores them out of 100.' },
        url: "https://lead-mapper.jlgouaho.com",
        tags: ['React', 'Google Places', 'Leaflet'],
        image: "/img/projects/leadmapper.jpg",
        icon: "Globe"
      },
      {
        name: 'Akwaba',
        desc: { fr: "Site immersif sur la Côte d'Ivoire, avec une carte 3D qui guide un voyage en cinq régions.", en: "Immersive site about Côte d'Ivoire, with a 3D map guiding a journey through five regions." },
        url: "https://akwaba.jlgouaho.com",
        tags: ['Three.js', 'GSAP', 'Vite'],
        image: "/img/projects/akwaba.jpg",
        icon: "Globe"
      }
    ],
  }
};

export const T: Record<Language, Translations> = {
  fr: {
    contact: "Discutons de votre projet",
    book: "Appel gratuit de 15 min",
    save: "Garder mon contact",
    portfolio: "Voir mes réalisations",
    services: "Ce que je fais",
    openToWork: "OUVERT AUX NOUVEAUX PROJETS",
    share: "Partager",
    scan: "Scannez pour me contacter",
    close: "Fermer",
    about: "Mon approche",
    ourProcess: "Comment ça se passe",
    rights: "Tous droits réservés.",
    wallet: "Ajouter au téléphone",
    walletSub: "Toujours à portée de main",
    walletAlert:
      "QR Code téléchargé !\n\nPour l'ajouter à Google Portefeuille :\n1. Ouvrez l'app Google Wallet\n2. Cliquez sur 'Ajouter au portefeuille'\n3. Choisissez 'Photo' et sélectionnez cette image.",
    stats: "En chiffres",
    expertise: "Domaines d'expertise",
    faq: "Questions fréquentes",
    trustNeq: "Entreprise enregistrée",
    startingAt: "à partir de",
    projects: "Réalisations",
    blog: "Mon blog",
    viewProject: "Voir le projet",
  },
  en: {
    contact: "Let's talk about your project",
    book: "Free 15-min call",
    save: "Keep my contact",
    portfolio: "See my work",
    services: "What I do for you",
    openToWork: "OPEN TO NEW PROJECTS",
    share: "Share",
    scan: "Scan to contact me",
    close: "Close",
    about: "My approach",
    ourProcess: "How it works",
    rights: "All rights reserved.",
    wallet: "Add to phone",
    walletSub: "Always at hand",
    walletAlert:
      "QR Code downloaded!\n\nTo add to Google Wallet:\n1. Open Google Wallet app\n2. Tap 'Add to Wallet'\n3. Choose 'Photo' and select this image.",
    stats: "By the numbers",
    expertise: "Areas of expertise",
    faq: "Frequently asked questions",
    trustNeq: "Registered business",
    startingAt: "starting at",
    projects: "Work",
    blog: "My blog",
    viewProject: "View project",
  },
};
