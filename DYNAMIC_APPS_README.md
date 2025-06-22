# Dynamic Apps System Documentation

This document explains how to use the dynamic apps page generator system built for poshet.co.

## Overview

The dynamic apps system allows you to create app landing pages by simply adding a TypeScript data file. All apps share the same template structure but with different content, including:

- Hero section with title, subtitle, and description
- Features showcase
- Download links (iOS/Android/Web)
- FAQ section
- Contact page with app-specific information
- Privacy policy and terms of service pages
- All contact forms automatically include app slug identification

## File Structure

```
├── data/apps/                    # App data files
│   ├── pico.ts                  # Pico Cards app data
│   ├── math.ts                  # Math Master app data
│   └── [new-app].ts             # Your new app data
├── app/apps/[slug]/             # Dynamic routes
│   ├── page.tsx                 # Main app page
│   ├── contact/page.tsx         # Contact form
│   ├── privacy/page.tsx         # Privacy policy
│   └── terms/page.tsx           # Terms of service
├── lib/
│   ├── types/app.ts             # TypeScript interfaces
│   └── apps.ts                  # App data utilities
└── components/apps/
    └── LegalPageTemplate.tsx    # Reusable legal page template
```

## Adding a New App

### Step 1: Create App Data File

Create a new file in `data/apps/[app-slug].ts`:

```typescript
import { AppData } from "@/lib/types/app";

export const myAppData: AppData = {
  metadata: {
    name: "My Awesome App",
    slug: "my-app",
    tagline: "Your App Tagline",
    description: "Brief description of your app",
    version: "1.0.0",
    developer: "Poshet",
    supportEmail: "support@example.com",
  },
  hero: {
    title: "My Awesome App",
    subtitle: "Your App Tagline",
    description: "Detailed description for the hero section...",
    imagePath: "/apps/my-app/screenshot.png",
  },
  features: [
    {
      title: "Feature 1",
      description: "Description of feature 1",
    },
    // Add more features...
  ],
  downloads: [
    {
      platform: "ios",
      url: "https://apps.apple.com/app/my-app",
      label: "Download on the App Store",
      available: true,
    },
    {
      platform: "android",
      url: "https://play.google.com/store/apps/details?id=com.example.myapp",
      label: "Get it on Google Play",
      available: false,
      comingSoon: true,
    },
  ],
  faq: [
    {
      question: "How do I use this app?",
      answer: "Detailed answer to the question...",
    },
    // Add more FAQ items...
  ],
  contact: {
    responseTime: "We typically respond within 24 hours",
    officeHours: "Monday - Friday: 9:00 AM - 5:00 PM (UTC)",
    supportDescription: "Need help with My Awesome App? We are here to help!",
  },
  privacy: {
    title: "Privacy Policy",
    sections: [
      {
        content: "This privacy policy applies to the {{APP_NAME}} app...",
        type: "paragraph",
      },
      // Add more sections...
    ],
    lastUpdated: "2025-01-01",
    contactEmail: "support@example.com",
  },
  terms: {
    title: "Terms of Service",
    sections: [
      {
        content: "By downloading or using {{APP_NAME}}...",
        type: "paragraph",
      },
      // Add more sections...
    ],
    lastUpdated: "2025-01-01",
    contactEmail: "support@example.com",
  },
};
```

### Step 2: Register the App

Add your app to the registry in `lib/apps.ts`:

```typescript
// Import your app data
import { myAppData } from "@/data/apps/my-app";

// Add to the registry
const APP_REGISTRY: Record<string, AppData> = {
  pico: picoAppData,
  math: mathAppData,
  "my-app": myAppData, // Add this line
};
```

### Step 3: Add App Assets

Place your app assets in `public/apps/[app-slug]/`:

- Screenshots
- Icons
- Any other images referenced in your app data

## Data Structure Reference

### AppData Interface

```typescript
interface AppData {
  metadata: AppMetadata; // Basic app information
  hero: AppHero; // Hero section content
  features: AppFeature[]; // Features list
  downloads: AppDownloadLink[]; // Download links
  faq: AppFAQ[]; // FAQ items
  contact: AppContactInfo; // Contact page info
  privacy: AppLegalPage; // Privacy policy
  terms: AppLegalPage; // Terms of service
}
```

### Template Variables

In legal pages (privacy/terms), you can use these template variables:

- `{{APP_NAME}}` - Replaced with the app name
- `{{DEVELOPER}}` - Replaced with the developer name
- `{{CONTACT_EMAIL}}` - Replaced with the contact email

## URLs and Routing

Once you add an app with slug `my-app`, the following URLs become available:

- `/apps/my-app` - Main app landing page
- `/apps/my-app/contact` - Contact form
- `/apps/my-app/privacy` - Privacy policy
- `/apps/my-app/terms` - Terms of service

## Contact Form Integration

All contact forms automatically:

- Include the app name and slug in the Telegram message
- Use the app-specific contact information
- Redirect back to the main app page after successful submission
- Include the app's FAQ section

## Features

### Automatic Features

- **SEO Optimization**: Each app page has proper meta tags
- **Static Generation**: All pages are statically generated at build time
- **TypeScript Safety**: Full type checking for all app data
- **Responsive Design**: All templates are mobile-friendly
- **Error Handling**: Automatic 404 pages for non-existent apps

### Customization Options

- **Download Links**: Support for iOS, Android, and web platforms
- **Coming Soon**: Mark platforms as "coming soon"
- **Features Grid**: Flexible number of features (automatically responsive)
- **FAQ Sections**: Dynamic FAQ sections on both main and contact pages
- **Legal Pages**: Template-based with variable substitution

## Best Practices

1. **Consistent Naming**: Use kebab-case for app slugs
2. **Image Optimization**: Use Next.js Image component compatible formats
3. **Content Guidelines**: Keep descriptions clear and concise
4. **FAQ Management**: Include common questions to reduce support load
5. **Legal Updates**: Keep privacy and terms sections current with dates

## Examples

Check out these example implementations:

- **Pico Cards** (`/apps/pico`): Simple conversation app
- **Math Master** (`/apps/math`): Educational app with detailed features

## Troubleshooting

### App Not Loading

- Check that the app is registered in `lib/apps.ts`
- Verify the slug matches exactly (case-sensitive)
- Ensure all required fields are present in the app data

### Images Not Displaying

- Verify image paths are correct in `public/apps/[slug]/`
- Check that image files exist and are accessible
- Use forward slashes in image paths

### TypeScript Errors

- Ensure all interfaces are properly imported
- Check that all required fields are present in the app data
- Verify data types match the interface definitions

## Migration from Static Apps

If you have existing static app pages (like the original pico app), you can migrate them by:

1. Creating the data file following the structure above
2. Removing the old static files
3. Testing the new dynamic routes
4. Updating any internal links to use the new structure

This system is designed to be backwards compatible - the URL structure remains the same (`/apps/[slug]`).
