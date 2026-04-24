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
        icon: "Code",
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
        icon: "Code",
      },
    ],
  },
  whyChooseUs: {
    fr: [
      {
        title: "Résultats Garantis",
        desc: "Pas de jargon technique. Je parle chiffres : plus de visiteurs, plus de clients, plus de ventes.",
        icon: "TrendingUp",
      },
      {
        title: "Accompagnement Humain",
        desc: "Vous n'êtes pas livré à vous-même. Je reste disponible, je vous forme, je vous accompagne.",
        icon: "Headphones",
      },
      {
        title: "Clé en Main",
        desc: "Vous n'avez rien à faire. Je gère tout de A à Z, vous récoltez les bénéfices.",
        icon: "Cpu",
      },
    ],
    en: [
      {
        title: "Guaranteed Results",
        desc: "No tech jargon. I speak numbers: more visitors, more customers, more sales.",
        icon: "TrendingUp",
      },
      {
        title: "Human Support",
        desc: "You're not left on your own. I stay available, train you, and support you.",
        icon: "Headphones",
      },
      {
        title: "Turnkey Service",
        desc: "You don't have to do anything. I handle everything A to Z, you reap the benefits.",
        icon: "Cpu",
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
        q: "Combien coûte la création d'un site web au Québec ?",
        a: "Un site vitrine professionnel démarre à 1 500 $ CAD, une boutique en ligne clé en main à 2 500 $ CAD et une automatisation sur mesure à 800 $ CAD. Vous obtenez un devis précis lors de l'appel découverte gratuit de 15 minutes.",
      },
      {
        q: "Quel est le délai de livraison ?",
        a: "2 à 4 semaines pour un site vitrine, 4 à 8 semaines pour une boutique en ligne complète. Vous validez chaque étape pour éviter toute mauvaise surprise à la livraison.",
      },
      {
        q: "Travaillez-vous en dehors de Granby ?",
        a: "Oui. Je travaille à distance avec des clients partout au Québec, au Canada, en France et aux États-Unis. Visioconférence, outils collaboratifs et suivi clair à chaque étape.",
      },
      {
        q: "Êtes-vous une entreprise enregistrée ?",
        a: "Oui — JL Digital Services est enregistrée au Registraire des entreprises du Québec sous le NEQ 2279991246. Factures officielles, contrat clair, assurance professionnelle.",
      },
      {
        q: "Quelles technologies utilisez-vous ?",
        a: "React, Next.js, Node.js, TypeScript pour les applications web, Shopify et WooCommerce pour le e-commerce, WordPress pour les sites vitrines, n8n / Make / Zapier pour l'automatisation. Le choix s'adapte toujours à vos besoins et à votre budget.",
      },
      {
        q: "Que se passe-t-il après la livraison ?",
        a: "Je vous forme à utiliser votre site/boutique, je reste disponible pour les questions et j'offre un suivi pour vous aider à grandir : SEO, ajustements, nouvelles fonctionnalités.",
      },
    ],
    en: [
      {
        q: "How much does a website cost in Quebec?",
        a: "A professional showcase site starts at 1,500 CAD, a turnkey online store at 2,500 CAD and a custom automation at 800 CAD. You get a precise quote during the free 15-minute discovery call.",
      },
      {
        q: "What is your delivery time?",
        a: "2 to 4 weeks for a showcase site, 4 to 8 weeks for a complete online store. You validate every step — no bad surprises at delivery.",
      },
      {
        q: "Do you work outside Granby?",
        a: "Yes. I work remotely with clients across Quebec, Canada, France and the United States. Video calls, collaborative tools and clear tracking at every step.",
      },
      {
        q: "Are you a registered business?",
        a: "Yes — JL Digital Services is registered with the Quebec Enterprise Register under NEQ 2279991246. Official invoices, clear contracts, professional insurance.",
      },
      {
        q: "What technologies do you use?",
        a: "React, Next.js, Node.js, TypeScript for web applications; Shopify and WooCommerce for e-commerce; WordPress for showcase sites; n8n / Make / Zapier for automation. The choice always adapts to your needs and budget.",
      },
      {
        q: "What happens after delivery?",
        a: "I train you to use your site/store, stay available for questions and offer follow-up support to help you grow: SEO, adjustments, new features.",
      },
    ],
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
    whyUs: "Pourquoi travailler avec moi ?",
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
    whyUs: "Why work with me?",
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
  },
};
