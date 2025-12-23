export type Language = 'en' | 'fr' | 'ar';

export interface ContentStrings {
  nav: {
    services: string;
    about: string;
    contact: string;
    home: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    tagline: string;
  };
  about: {
    title: string;
    description1: string;
    description2: string;
    description3: string;
    goalTitle: string;
    goalText: string;
    founderTitle: string;
    founderRole: string;
    founderBio: string;
  };
  services: {
    title: string;
    accountingTitle: string;
    accountingList: string[];
    taxationTitle: string;
    taxationList: string[];
  };
  testimonials: {
    title: string;
    quote: string;
    author: string;
  };
  contact: {
    title: string;
    address: string;
    appointmentOnly: string;
    emailLabel: string;
    phoneLabel: string;
    mapLabel: string;
  };
}

export type Translations = Record<Language, ContentStrings>;