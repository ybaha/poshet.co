import { AppData } from "@/lib/types/app";

export const viraltyAppData: AppData = {
  metadata: {
    name: "Viralty",
    slug: "viralty",
    tagline: "Know before you post.",
    description:
      "Viralty analyzes your short-form video before you publish. Upload a TikTok, Reel, or Short and get an estimated virality score, predicted retention curve, reach range, and specific fixes — tailored to your platform, follower count, and niche.",
    version: "1.0.0",
    developer: "Poshet",
    websiteUrl: "https://poshet.co/apps/viralty",
    supportEmail: "ybahaerarslan@gmail.com",
  },
  hero: {
    title: "Viralty",
    subtitle: "Know before you post.",
    description:
      "Upload any short-form video and see an estimated virality score, predicted retention curve, and reach range before the algorithm decides. Fix drop-off seconds, sharpen your hook, and post with confidence — every prediction is tailored to your platform, follower count, and niche.",
    imagePath: "/apps/viralty/icon.png",
  },
  features: [
    {
      title: "Estimated virality score",
      description:
        "A score from 0 to 100 that estimates how well your video may perform, based on hook strength, pacing, and retention signals.",
    },
    {
      title: "Predicted retention curve",
      description:
        "See where viewers are likely to drop off and how many may stay to the end — before you publish.",
    },
    {
      title: "Reach range, not a guarantee",
      description:
        "Predicted view ranges measured against accounts your size. Every number is an estimate, shown with confidence and your typical baseline.",
    },
    {
      title: "Specific fixes",
      description:
        "Actionable suggestions — remove a silence, sharpen the hook, add a CTA — tied to the seconds where retention drops.",
    },
    {
      title: "Your video is deleted after analysis",
      description:
        "The source video is removed from our servers as soon as processing finishes, on both success and failure. We keep the report and a small set of thumbnails to show your results.",
    },
    {
      title: "No account required",
      description:
        "Start with a free analysis. No sign-up wall — just pick your platform, follower band, and niche so predictions match your account.",
    },
  ],
  downloads: [
    {
      platform: "ios",
      url: "https://apps.apple.com/app/viralty-viral-video-analysis/id6806250572",
      label: "Download on the App Store",
      available: true,
    },
    {
      platform: "android",
      url: "https://play.google.com/store/apps/details?id=co.poshet.viralty",
      label: "Get it on Google Play",
      available: false,
      comingSoon: true,
    },
  ],
  faq: [
    {
      question: "What does Viralty actually predict?",
      answer:
        "Viralty estimates how a video may perform before you publish: a virality score (0–100), a predicted retention curve, a reach range compared to accounts your size, and specific fixes. These are estimates based on your video and profile — not guarantees of views or virality.",
    },
    {
      question: "What happens to my video?",
      answer:
        "Your uploaded video is deleted from our servers as soon as analysis finishes — whether it succeeds or fails. We retain the analysis report and a small set of frame thumbnails so you can review your results. You can delete all stored data from Settings at any time.",
    },
    {
      question: "Do I need an account?",
      answer:
        "No traditional sign-up. Viralty uses an anonymous device identifier stored on your phone to save your history and subscription status. You can delete all data from Settings whenever you want.",
    },
    {
      question: "How does the free tier work?",
      answer:
        "Your first analysis is free. After that, unlimited analyses require a Viralty Pro subscription. You can restore purchases if you reinstall the app on the same Apple ID.",
    },
    {
      question: "How do subscriptions work?",
      answer:
        "Viralty Pro is billed through Apple's App Store. Subscriptions auto-renew unless cancelled at least 24 hours before the end of the current period. Manage or cancel anytime in your Apple ID subscription settings.",
    },
    {
      question: "How do I delete my data?",
      answer:
        "Open the app, go to Settings → Delete all my data. This permanently removes your account, every analysis, and everything stored on our servers for that device. Your App Store subscription is managed separately through Apple.",
    },
  ],
  contact: {
    responseTime: "We typically respond within 24–48 hours",
    officeHours: "Monday – Friday: 9:00 AM – 6:00 PM (GMT+3)",
    supportDescription:
      "Questions about your analysis, subscription, or data? We're here to help.",
  },
  privacy: {
    title: "Privacy Policy",
    sections: [
      {
        content:
          'This privacy policy applies to the Viralty app (hereby referred to as "Application") for mobile devices that was created by Poshet (hereby referred to as "Service Provider"). This service is intended for use "AS IS".',
        type: "paragraph",
      },
      {
        title: "Information We Collect",
        content:
          "To provide video analysis, we collect only what the app needs:",
        type: "list",
        items: [
          "An anonymous device identifier, stored in your device's secure Keychain, used to identify your account without a login",
          "Videos you choose to upload for analysis",
          "Profile details you provide: platform(s), follower band, niche, and optional typical views per post — used to tailor predictions",
          "Analysis results: virality score, retention curve, reach estimates, and fix suggestions",
          "Subscription status, verified through Apple and RevenueCat — we do not receive your payment card details",
        ],
      },
      {
        title: "Your Uploaded Video",
        content:
          "When you upload a video for analysis, it is transmitted securely to our servers and processed by automated analysis pipelines. The source video file is deleted from our cloud storage as soon as processing finishes — on both success and failure. A lifecycle rule also removes any source files that remain after 24 hours. We do not use your video for advertising, model training, or any purpose other than generating your report.",
        type: "paragraph",
      },
      {
        title: "What We Retain After Analysis",
        content:
          "After your video is deleted, we keep the analysis report (scores, curve data, and text suggestions) and a small set of frame thumbnails extracted during processing, so you can review results in the app. You can delete individual analyses or all data at any time from Settings.",
        type: "paragraph",
      },
      {
        title: "How We Use Your Information",
        content:
          "We use the information above solely to provide the app's core functionality: running analyses, showing your history, enforcing usage limits, and managing subscriptions. We do not sell your data, do not use it for cross-app tracking, and do not include third-party advertising SDKs in the app.",
        type: "paragraph",
      },
      {
        title: "Third-Party Services",
        content:
          "We use cloud storage and AI processing services to run analyses. These providers process data only to deliver the service on our behalf. Payment processing is handled entirely by Apple through the App Store. Subscription verification is handled by RevenueCat using your anonymous device identifier — RevenueCat does not receive your uploaded videos.",
        type: "paragraph",
      },
      {
        title: "Tracking",
        content:
          "Viralty does not track you across other companies' apps or websites. We do not use the App Tracking Transparency framework because we do not engage in cross-app tracking.",
        type: "paragraph",
      },
      {
        title: "Data Retention and Deletion",
        content:
          "Your data is retained for as long as your account exists. You can delete all data from within the app: Settings → Delete all my data. This permanently removes your account, every analysis, and associated server-side data. Deletion requests by email are also honoured within 30 days. Your App Store subscription remains active until you cancel it through Apple.",
        type: "paragraph",
      },
      {
        title: "Children",
        content:
          "Viralty is intended for users 13 years of age and older. We do not knowingly collect data from children under 13. If you believe a child has provided personal information, please contact us immediately.",
        type: "paragraph",
      },
      {
        title: "Security",
        content:
          "All data is transmitted over encrypted HTTPS connections. Your device identifier is stored in your device's secure Keychain. We take reasonable measures to protect your information against unauthorized access.",
        type: "paragraph",
      },
      {
        title: "Changes",
        content:
          "This Privacy Policy may be updated from time to time. We will notify you of changes by updating this page. You are advised to review this Privacy Policy periodically.",
        type: "paragraph",
      },
      {
        title: "Contact Us",
        content:
          "If you have any questions about privacy while using Viralty, please contact us at ybahaerarslan@gmail.com.",
        type: "paragraph",
      },
    ],
    lastUpdated: "2026-08-29",
    contactEmail: "ybahaerarslan@gmail.com",
  },
  terms: {
    title: "Terms of Service",
    sections: [
      {
        content:
          "By downloading or using the Viralty app, these terms will automatically apply to you — please read them carefully before using the app.",
        type: "paragraph",
      },
      {
        title: "App Usage License",
        content:
          "Poshet grants you a revocable, non-exclusive, non-transferable, limited license to download, install, and use Viralty strictly in accordance with the terms of this Agreement.",
        type: "paragraph",
      },
      {
        title: "Predictions Are Estimates",
        content:
          "Viralty provides estimated scores, retention curves, and reach ranges based on automated analysis of your video and the profile information you provide. These are predictions, not guarantees. Actual performance depends on many factors outside the app's control — platform algorithms, audience behaviour, timing, and competition. You should not rely on Viralty's output as a promise of views, virality, or revenue.",
        type: "paragraph",
      },
      {
        title: "Your Content",
        content:
          "You retain ownership of videos you upload. By uploading a video, you grant Poshet a limited licence to process it solely to generate your analysis report. As described in our Privacy Policy, the source video is deleted after processing.",
        type: "paragraph",
      },
      {
        title: "Acceptable Use",
        content: "You agree to use the app only for lawful purposes and not to:",
        type: "list",
        items: [
          "Upload content that is illegal, harmful, or that violates others' rights",
          "Upload content you do not have the right to use",
          "Attempt to reverse engineer, decompile, or extract the app's source code",
          "Use the app to spam, phish, or send unsolicited messages",
          "Circumvent usage limits or subscription requirements",
        ],
      },
      {
        title: "Subscriptions and Billing",
        content:
          "Viralty Pro subscriptions are billed through Apple's App Store. Payment is charged to your Apple ID account. Subscriptions auto-renew unless cancelled at least 24 hours before the end of the current billing period. You can manage or cancel subscriptions in your Apple ID settings. Refunds are handled by Apple according to their policies.",
        type: "paragraph",
      },
      {
        title: "Not Professional Advice",
        content:
          "Viralty provides automated content analysis for informational purposes. It does not constitute professional marketing, legal, or business advice. Results may vary and Poshet does not guarantee any specific outcome from using the app.",
        type: "paragraph",
      },
      {
        title: "Intellectual Property",
        content:
          "All app design, analysis models, and materials are the intellectual property of Poshet and are protected by copyright. You may not copy, modify, or distribute this content without written permission.",
        type: "paragraph",
      },
      {
        title: "Service Availability",
        content:
          "Poshet strives to maintain reliable service but cannot guarantee uninterrupted access. Analysis requires an internet connection and may take up to a minute depending on video length and server load. We reserve the right to modify or discontinue features with reasonable notice.",
        type: "paragraph",
      },
      {
        title: "Limitation of Liability",
        content:
          "Poshet shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the app or reliance on its predictions. Individual results may vary.",
        type: "paragraph",
      },
      {
        title: "Termination",
        content:
          "This Agreement remains in effect until terminated. Poshet may terminate your access for violation of these terms. You may stop using the app and delete your data at any time from Settings.",
        type: "paragraph",
      },
      {
        title: "Governing Law",
        content:
          "These Terms shall be governed and construed in accordance with the laws of the Netherlands, without regard to its conflict of law provisions.",
        type: "paragraph",
      },
      {
        title: "Contact Us",
        content:
          "If you have any questions about these Terms and Conditions, please contact us at ybahaerarslan@gmail.com.",
        type: "paragraph",
      },
    ],
    lastUpdated: "2026-08-29",
    contactEmail: "ybahaerarslan@gmail.com",
  },
  deleteAccount: {
    title: "Delete Account & Data",
    sections: [
      {
        content:
          "This page explains how to delete your Viralty account and any data associated with it. We are committed to giving you full control over your information.",
        type: "paragraph",
      },
      {
        title: "In-App Deletion (Fastest)",
        content:
          "The easiest way to delete your data is from inside the app: open Viralty, go to Settings → Delete all my data, and confirm. This permanently removes your account, every analysis, and associated server-side data.",
        type: "paragraph",
      },
      {
        title: "Deletion by Email",
        content:
          "You can also request deletion by email. Please follow these steps:",
        type: "list",
        items: [
          'Send an email to ybahaerarslan@gmail.com with the subject line "Viralty - Data Deletion Request"',
          "Include any details that help us locate your account (e.g. approximate date of last use)",
          "We will acknowledge your request within 48 hours and process it within 30 days",
        ],
      },
      {
        title: "What Data Is Removed",
        content: "When you delete your data, we remove:",
        type: "list",
        items: [
          "Your anonymous account and profile (platform, follower band, niche, typical views)",
          "Every analysis report and associated thumbnails stored on our servers",
          "Local analysis history stored on your device",
        ],
      },
      {
        title: "What Is Not Removed by In-App Deletion",
        content:
          "Your Viralty Pro subscription is managed by Apple through the App Store. Deleting your data does not cancel an active subscription. To cancel billing, go to Settings → Apple ID → Subscriptions on your device.",
        type: "paragraph",
      },
      {
        title: "Contact Us",
        content:
          "If you have any questions about data deletion or need assistance, please contact us at ybahaerarslan@gmail.com.",
        type: "paragraph",
      },
    ],
    lastUpdated: "2026-08-29",
    contactEmail: "ybahaerarslan@gmail.com",
  },
};
