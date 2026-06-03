import { AppData, Language, Translations } from "./types";

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
    fr: "Pas encore de site ? Un site qui ne vous rapporte rien ? Des heures perdues sur des tâches répétitives ? Je vous aide à exister en ligne et à transformer votre présence web en machine à clients. Site vitrine, boutique en ligne ou application sur mesure — vous obtenez enfin un outil qui travaille pour vous 24/7.",
    en: "No website yet? A site that brings you nothing? Hours wasted on repetitive tasks? I help you exist online and turn your web presence into a client-generating machine. Showcase site, online store, or custom app — you finally get a tool that works for you 24/7.",
  },
  services: {
    fr: [
      {
        name: "Présence en Ligne Qui Convertit",
        desc: "Votre site doit être votre meilleur vendeur, pas une simple brochure. Je crée des sites professionnels qui rassurent vos visiteurs et les transforment en clients. Visible sur Google, rapide, et pensé pour générer des contacts.",
        features: ["Trouvable sur Google", "Génère des appels", "Design pro"],
        icon: "Globe",
      },
      {
        name: "Boutique en Ligne Clé en Main",
        desc: "Vendez vos produits pendant que vous dormez. Je configure votre boutique de A à Z : catalogue produits, paiements sécurisés, livraison automatisée. Vous recevez les commandes, je m'occupe du reste technique.",
        features: ["Ventes 24h/24", "Paiements sécurisés", "Simple à gérer"],
        icon: "ShoppingBag",
      },
      {
        name: "Automatisation & Gain de Temps",
        desc: "Combien d'heures perdez-vous sur des tâches répétitives ? Envoi de factures, relances clients, rapports... J'automatise ce qui vous fait perdre du temps pour que vous puissiez vous concentrer sur votre métier.",
        features: [
          "Zéro tâche manuelle",
          "Moins d'erreurs",
          "+10h/semaine gagnées",
        ],
        icon: "Workflow",
      },
    ],
    en: [
      {
        name: "Online Presence That Converts",
        desc: "Your website should be your best salesperson, not just a brochure. I create professional sites that build trust and turn visitors into customers. Visible on Google, fast, and designed to generate leads.",
        features: ["Found on Google", "Generates calls", "Pro design"],
        icon: "Globe",
      },
      {
        name: "Turnkey Online Store",
        desc: "Sell your products while you sleep. I set up your store from A to Z: product catalog, secure payments, automated shipping. You receive orders, I handle the technical stuff.",
        features: ["24/7 sales", "Secure payments", "Easy to manage"],
        icon: "ShoppingBag",
      },
      {
        name: "Automation & Time Savings",
        desc: "How many hours do you waste on repetitive tasks? Invoicing, client follow-ups, reports... I automate what's eating your time so you can focus on your actual business.",
        features: ["Zero manual tasks", "Fewer errors", "+10h/week saved"],
        icon: "Workflow",
      },
    ],
  },
  process: {
    fr: [
      {
        step: "01",
        title: "Appel Découverte",
        desc: "15 min pour comprendre votre business, vos défis et vos objectifs. Sans engagement.",
      },
      {
        step: "02",
        title: "Proposition Sur Mesure",
        desc: "Je vous présente une solution adaptée à VOS besoins, avec un prix clair et sans surprise.",
      },
      {
        step: "03",
        title: "Création & Validation",
        desc: "Je construis, vous validez à chaque étape. Aucune mauvaise surprise à la livraison.",
      },
      {
        step: "04",
        title: "Lancement & Croissance",
        desc: "Votre site est en ligne. Je vous forme et reste disponible pour vous aider à grandir.",
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
        desc: "I present a solution tailored to YOUR needs, with clear pricing and no surprises.",
      },
      {
        step: "03",
        title: "Build & Validate",
        desc: "I build, you validate at each step. No bad surprises at delivery.",
      },
      {
        step: "04",
        title: "Launch & Growth",
        desc: "Your site is live. I train you and stay available to help you grow.",
      },
    ],
  },
  testimonials: {
    fr: [
      {
        name: "Sophie M.",
        role: "Propriétaire",
        company: "Boutique Mode QC",
        text: "Avant, mon site ne générait aucun appel. Maintenant je reçois 3-4 demandes par semaine. Jean-Luc a tout changé !",
      },
      {
        name: "Marc D.",
        role: "Entrepreneur",
        company: "Services Pro",
        text: "Je passais 10h par semaine sur la facturation. Maintenant c'est automatique. J'aurais dû le faire avant !",
      },
    ],
    en: [
      {
        name: "Sophie M.",
        role: "Owner",
        company: "Fashion Boutique QC",
        text: "Before, my site generated zero calls. Now I get 3-4 inquiries per week. Jean-Luc changed everything!",
      },
      {
        name: "Marc D.",
        role: "Entrepreneur",
        company: "Pro Services",
        text: "I used to spend 10h a week on invoicing. Now it's automatic. I should have done this sooner!",
      },
    ],
  },
  stats: {
    fr: [
      { value: "5+", label: "Années d'expérience" },
      { value: "20+", label: "Projets livrés" },
      { value: "100%", label: "Clients satisfaits" },
      { value: "48h", label: "Temps de réponse" },
    ],
    en: [
      { value: "5+", label: "Years of experience" },
      { value: "20+", label: "Projects delivered" },
      { value: "100%", label: "Satisfied clients" },
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
        a: "Je suis un développeur web freelance basé à Granby, Québec. Je crée des sites, des apps et des automatisations pour les entrepreneurs et PME depuis 5+ ans. J'ai aussi lancé plusieurs projets SaaS comme RecruitEasy.ca. Mon objectif : vous aider à vendre plus grâce au web, sans jargon."
      },
      {
        q: "Qu'avez-vous déjà réalisé ?",
        a: "J'ai livré plus de 20 projets : sites vitrines, boutiques en ligne, apps web, automatisations d'entreprise. Vous pouvez voir toutes mes réalisations sur mon portfolio à jlgouaho.com."
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
        a: "Oui ! Je travaille à distance avec des clients au Québec, au Canada, en France et aux États-Unis. Je suis bilingue français/anglais et je m'adapte à votre fuseau horaire."
      },
      {
        q: "Pourquoi JL Digital Services est-elle enregistrée au Québec ?",
        a: "Parce que je prends mon métier au sérieux. Mon entreprise est enregistrée au Registraire des entreprises du Québec sous le NEQ 2279991246. Vous avez un contrat clair, des factures officielles et une assurance professionnelle."
      }
    ],
    en: [
      {
        q: "Who is Déto Jean-Luc Gouaho?",
        a: "I'm a freelance web developer based in Granby, Quebec. I've been building websites, apps, and automations for entrepreneurs and SMBs for 5+ years. I also launched several SaaS projects like RecruitEasy.ca. My goal: help you sell more through the web, no jargon."
      },
      {
        q: "What have you already built?",
        a: "I've delivered 20+ projects: showcase sites, online stores, web apps, business automations. You can see all my work on my portfolio at jlgouaho.com."
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
        a: "Yes! I work remotely with clients across Quebec, Canada, France, and the United States. I'm bilingual French/English and adapt to your timezone."
      },
      {
        q: "Why is JL Digital Services registered in Quebec?",
        a: "Because I take my work seriously. My business is registered with the Quebec Enterprise Register under NEQ 2279991246. You get a clear contract, official invoices, and professional insurance."
      }
    ]
  },
  projects: {
    fr: [
      {
        name: "RecruitEasy.ca",
        desc: {
          fr: "Plateforme SaaS de recrutement qui automatise la publication d'offres d'emploi et la présélection de candidats pour les PME canadiennes.",
          en: "SaaS recruitment platform that automates job posting and candidate screening for Canadian SMBs."
        },
        url: "https://recruiteasy.ca",
        tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
        icon: "Globe"
      },
      {
        name: "JL-Fit AI",
        desc: {
          fr: "Application de coaching fitness intelligente avec plans d'entraînement personnalisés générés par IA, suivi de progression et recommandations nutritionnelles.",
          en: "AI-powered fitness coaching app with personalized workout plans, progress tracking, and nutrition recommendations."
        },
        url: "#",
        tags: ["React", "TypeScript", "AI", "PWA"],
        icon: "TrendingUp"
      },
      {
        name: "playerConnect",
        desc: {
          fr: "Plateforme sociale de mise en relation pour joueurs et créateurs de contenu gaming, avec matchmaking par centres d'intérêt et intégration Discord.",
          en: "Social matchmaking platform for gamers and content creators, with interest-based matching and Discord integration."
        },
        url: "#",
        tags: ["Next.js", "Supabase", "Discord API"],
        icon: "Code"
      },
      {
        name: "instaHR",
        desc: {
          fr: "Outil RH intelligent qui automatise la publication multicanal d'offres d'emploi, le tri des candidatures et la planification d'entretiens.",
          en: "Smart HR tool that automates multi-channel job posting, applicant sorting, and interview scheduling."
        },
        url: "#",
        tags: ["React", "n8n", "Make", "API"],
        icon: "Cpu"
      },
      {
        name: "masecurite",
        desc: {
          fr: "Application mobile de gestion de sécurité pour DGROUP CI, avec signalement d'incidents, géolocalisation et tableaux de bord en temps réel.",
          en: "Mobile security management app for DGROUP CI, with incident reporting, geolocation, and real-time dashboards."
        },
        url: "#",
        tags: ["React Native", ".NET", "Azure"],
        icon: "ShieldCheck"
      }
    ],
    en: [
      {
        name: "RecruitEasy.ca",
        desc: {
          fr: "Plateforme SaaS de recrutement qui automatise la publication d'offres d'emploi et la présélection de candidats pour les PME canadiennes.",
          en: "SaaS recruitment platform that automates job posting and candidate screening for Canadian SMBs."
        },
        url: "https://recruiteasy.ca",
        tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
        icon: "Globe"
      },
      {
        name: "JL-Fit AI",
        desc: {
          fr: "Application de coaching fitness intelligente avec plans d'entraînement personnalisés générés par IA, suivi de progression et recommandations nutritionnelles.",
          en: "AI-powered fitness coaching app with personalized workout plans, progress tracking, and nutrition recommendations."
        },
        url: "#",
        tags: ["React", "TypeScript", "AI", "PWA"],
        icon: "TrendingUp"
      },
      {
        name: "playerConnect",
        desc: {
          fr: "Plateforme sociale de mise en relation pour joueurs et créateurs de contenu gaming, avec matchmaking par centres d'intérêt et intégration Discord.",
          en: "Social matchmaking platform for gamers and content creators, with interest-based matching and Discord integration."
        },
        url: "#",
        tags: ["Next.js", "Supabase", "Discord API"],
        icon: "Code"
      },
      {
        name: "instaHR",
        desc: {
          fr: "Outil RH intelligent qui automatise la publication multicanal d'offres d'emploi, le tri des candidatures et la planification d'entretiens.",
          en: "Smart HR tool that automates multi-channel job posting, applicant sorting, and interview scheduling."
        },
        url: "#",
        tags: ["React", "n8n", "Make", "API"],
        icon: "Cpu"
      },
      {
        name: "masecurite",
        desc: {
          fr: "Application mobile de gestion de sécurité pour DGROUP CI, avec signalement d'incidents, géolocalisation et tableaux de bord en temps réel.",
          en: "Mobile security management app for DGROUP CI, with incident reporting, geolocation, and real-time dashboards."
        },
        url: "#",
        tags: ["React Native", ".NET", "Azure"],
        icon: "ShieldCheck"
      }
    ]
  },
};

export const T: Record<Language, Translations> = {
  fr: {
    contact: "Discutons de votre projet",
    book: "Appel gratuit de 15 min",
    save: "Garder mon contact",
    portfolio: "Voir mes réalisations",
    services: "Ce que je fais pour vous",
    openToWork: "DISPONIBLE CETTE SEMAINE",
    share: "Partager",
    scan: "Scannez pour me contacter",
    close: "Fermer",
    about: "Mon approche",
    ourProcess: "Comment ça se passe",
    testimonials: "Ils m'ont fait confiance",
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
    projects: "Mes réalisations",
    blog: "Mon blog",
    viewProject: "Voir le projet",
  },
  en: {
    contact: "Let's talk about your project",
    book: "Free 15-min call",
    save: "Keep my contact",
    portfolio: "See my work",
    services: "What I do for you",
    openToWork: "AVAILABLE THIS WEEK",
    share: "Share",
    scan: "Scan to contact me",
    close: "Close",
    about: "My approach",
    ourProcess: "How it works",
    testimonials: "They trusted me",
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
    projects: "My projects",
    blog: "My blog",
    viewProject: "View project",
  },
};
