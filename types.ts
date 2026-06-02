
export type Language = 'fr' | 'en';

export interface Service {
  name: string;
  desc: string;
  icon?: string;
  features?: string[];
}

export interface Feature {
    title: string;
    desc: string;
    icon: string;
}

export interface ProcessStep {
    step: string;
    title: string;
    desc: string;
}

export interface Testimonial {
    name: string;
    role: string;
    company?: string;
    text: string;
}

export interface Project {
  name: string;
  desc: Record<Language, string>;
  url: string;
  tags: string[];
  icon: string;
}

export interface Stat {
    value: string;
    label: string;
}

export interface FaqItem {
    q: string;
    a: string;
}

export interface Expertise {
    title: string;
    items: string[];
}

export interface AppData {
  name: string;
  company: string;
  neq: string;
  title: Record<Language, string>;
  avatar: string;
  location: string;
  email: string;
  website: string;
  blogUrl?: string;
  linkedin: string;
  github: string;
  x: string;
  whatsapp: string;
  phone: string;
  calendly: string;
  stack: string[];
  services: Record<Language, Service[]>;
  about: Record<Language, string>;
  whyChooseUs: Record<Language, Feature[]>;
  process: Record<Language, ProcessStep[]>;
  testimonials: Record<Language, Testimonial[]>;
  stats: Record<Language, Stat[]>;
  faq: Record<Language, FaqItem[]>;
  projects: Record<Language, Project[]>;
  expertise: Record<Language, Expertise[]>;
}

export interface Translations {
  contact: string;
  book: string;
  save: string;
  portfolio: string;
  services: string;
  openToWork: string;
  share: string;
  scan: string;
  close: string;
  about: string;
  whyUs: string;
  ourProcess: string;
  testimonials: string;
  rights: string;
  wallet: string;
  walletSub: string;
  walletAlert: string;
  stats: string;
  expertise: string;
  faq: string;
  trustNeq: string;
  startingAt: string;
  projects: string;
  blog: string;
  viewProject: string;
}
