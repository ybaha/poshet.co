import { AppData, AppSlug } from "@/lib/types/app";

// Import all app data files
import { picoAppData } from "@/data/apps/pico";
import { mathAppData } from "@/data/apps/math";
import { picuAppData } from "@/data/apps/picu";
import { vidgenAppData } from "@/data/apps/vidgen";

// Registry of all available apps
const APP_REGISTRY: Record<string, AppData> = {
  pico: picoAppData,
  math: mathAppData,
  picu: picuAppData,
  vidgen: vidgenAppData,
};

/**
 * Get app data by slug
 */
export function getAppData(slug: AppSlug): AppData | null {
  return APP_REGISTRY[slug] || null;
}

/**
 * Get all available app slugs
 */
export function getAllAppSlugs(): AppSlug[] {
  return Object.keys(APP_REGISTRY);
}

/**
 * Check if an app exists
 */
export function appExists(slug: AppSlug): boolean {
  return slug in APP_REGISTRY;
}

/**
 * Get all app data (for listing pages)
 */
export function getAllApps(): Array<{ slug: AppSlug; data: AppData }> {
  return Object.entries(APP_REGISTRY).map(([slug, data]) => ({
    slug,
    data,
  }));
}

/**
 * Validate app data structure
 */
export function validateAppData(data: any): data is AppData {
  return (
    data &&
    typeof data === "object" &&
    data.metadata &&
    data.hero &&
    Array.isArray(data.features) &&
    Array.isArray(data.downloads) &&
    Array.isArray(data.faq) &&
    data.contact &&
    data.privacy &&
    data.terms
  );
}

/**
 * Generate static paths for Next.js static generation
 */
export function generateStaticParams() {
  return getAllAppSlugs().map((slug) => ({
    slug,
  }));
}
