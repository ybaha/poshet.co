export interface AppDownloadLink {
  platform: "ios" | "android" | "web";
  url: string;
  label: string;
  available: boolean;
  comingSoon?: boolean;
}

export interface AppFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface AppFAQ {
  question: string;
  answer: string;
}

export interface AppHero {
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
  imagePath?: string;
}

export interface AppLegalPage {
  title: string;
  sections: Array<{
    title?: string;
    content: string;
    type: "paragraph" | "list";
    items?: string[];
  }>;
  lastUpdated: string;
  contactEmail: string;
}

export interface AppContactInfo {
  responseTime: string;
  officeHours: string;
  supportDescription: string;
}

export interface AppMetadata {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  version: string;
  developer: string;
  websiteUrl?: string;
  supportEmail: string;
}

export interface AppData {
  metadata: AppMetadata;
  hero: AppHero;
  features: AppFeature[];
  downloads: AppDownloadLink[];
  faq: AppFAQ[];
  contact: AppContactInfo;
  privacy: AppLegalPage;
  terms: AppLegalPage;
}

export type AppSlug = string;
