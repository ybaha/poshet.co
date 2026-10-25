import { AppData } from "@/lib/types/app";

export const cleanAppData: AppData = {
  metadata: {
    name: "Clean",
    slug: "clean",
    tagline: "Small promises, kept daily.",
    description:
      "Clean is a daily-habit app that turns small skincare, movement, and self-care promises into streaks you keep, with sisters who notice when you close your day.",
    version: "1.0.0",
    developer: "Poshet",
    websiteUrl: "https://poshet.co/projects/clean",
    supportEmail: "ybahaerarslan@gmail.com",
  },
  hero: {
    title: "Clean",
    subtitle: "Small promises, kept daily.",
    description:
      "Clean turns three small habits into a streak you keep. Pick your pace, close your day in seconds, and let a circle of sisters — never strangers, never likes — notice when you show up for yourself. Glowy skin. Calm confidence. One small promise at a time.",
    imagePath: "/apps/clean/icon.png",
  },
  features: [
    {
      title: "Three habits, not thirty",
      description:
        "Pick from real programmes built around skincare, movement, hydration, and rest. A small, deliberate checklist — not a wall of to-dos.",
    },
    {
      title: "Close your day in seconds",
      description:
        "Tick what you did, snap a photo if you want, and close your day. The streak does the rest.",
    },
    {
      title: "Compliments, not likes",
      description:
        "When you close your day, sisters in your circle can send a short compliment. No likes, no scores, no comparison — just being noticed.",
    },
    {
      title: "You're never doing it alone",
      description:
        "A gentle map and feed show other women on the same path, always at an approximate, privacy-safe location.",
    },
    {
      title: "Privacy-first by design",
      description:
        "Your exact location never leaves your phone — it's blurred to an approximate area. You choose what shows on your profile and on the map.",
    },
    {
      title: "No subscription to start",
      description:
        "Clean launches free. Start your streak, keep it, and let the community grow with you.",
    },
  ],
  downloads: [
    {
      platform: "ios",
      url: "https://apps.apple.com/app/id6802110217",
      label: "Download on the App Store",
      available: true,
    },
    {
      platform: "android",
      url: "https://play.google.com/store/apps/details?id=co.poshet.womenshabit",
      label: "Get it on Google Play",
      available: false,
      comingSoon: true,
    },
  ],
  faq: [
    {
      question: "What is Clean?",
      answer:
        "Clean is a daily-habit app for women. You pick a short programme, close a small checklist each day, and build a streak — with a community of sisters who send compliments instead of likes.",
    },
    {
      question: "Do I have to be perfect?",
      answer:
        "No. Clean is built for small, honest promises. Miss a day? Your streak simply resets and you start again — no guilt, no penalty.",
    },
    {
      question: "Is Clean free?",
      answer:
        "Yes. Clean launches free with no subscription. Any future premium features will be added later and clearly disclosed.",
    },
    {
      question: "Is my location shared?",
      answer:
        "Only approximately. Your exact location never leaves your phone — it's blurred to a rough area before it's sent. You can also hide yourself from the map entirely in settings.",
    },
    {
      question: "How do compliments work?",
      answer:
        "When you close your day, other women in your circle can send a short compliment. Compliments are kind, optional, and moderated. You can report or block anyone at any time.",
    },
    {
      question: "How do I delete my account?",
      answer:
        "Open the app, go to Profile → Settings → Delete my account. This permanently removes your profile, tasks, photos, follows, and compliments. You can also request deletion by email.",
    },
  ],
  contact: {
    responseTime: "We typically respond within 24-48 hours",
    officeHours: "Monday - Friday: 9:00 AM - 6:00 PM (GMT+3)",
    supportDescription:
      "Need help with Clean, want to report content, or have a question about your data? We're here to help.",
  },
  privacy: {
    title: "Privacy Policy",
    sections: [
      {
        content:
          'This privacy policy applies to the Clean app (hereby referred to as "Application") for mobile devices that was created by Poshet (hereby referred to as "Service Provider"). This service is intended for use "AS IS".',
        type: "paragraph",
      },
      {
        title: "Information We Collect",
        content:
          "To provide the app and its community features, we may collect the following information:",
        type: "list",
        items: [
          "A random device identifier, stored on your device, used to identify your account without a login",
          "Photos you choose to share with tasks or as your profile avatar",
          "Your approximate location (blurred to a rough area — never your exact spot), only if you opt in to appear on the map",
          "Content you create: your display name, handle, bio, compliments, and shared photos",
          "Your chosen city, used to center the map",
          "Purchase history, if you ever buy something in the app",
        ],
      },
      {
        title: "How We Use It",
        content:
          "We use this information only to provide the app's core functionality: building your streak, showing your community (feed, map, and compliments), sending the notifications you ask for, and keeping the community safe. We do not sell your data and do not use it for advertising.",
        type: "paragraph",
      },
      {
        title: "Location Is Blurred",
        content:
          "Your precise location never leaves your device. Before your location is transmitted, the app rounds it to a coarse grid (~5 km) and the server applies an additional offset, so your exact position cannot be reconstructed. You can withdraw map visibility at any time in Settings → Privacy.",
        type: "paragraph",
      },
      {
        title: "Photos and User Content",
        content:
          "Photos you share are stored on our cloud storage provider so they can be shown to your community. Content you post is visible according to your privacy settings. You can delete individual photos or your entire account at any time.",
        type: "paragraph",
      },
      {
        title: "Third-Party Services",
        content:
          "We use cloud storage and push-notification services to operate the app. These providers process data only to deliver the service. Payment processing, if and when available, is handled by Apple. We do not include third-party advertising or third-party analytics.",
        type: "paragraph",
      },
      {
        title: "Data Retention and Deletion",
        content:
          "Your data is retained for as long as your account exists. You can delete your account from within the app (Profile → Settings → Delete my account), which permanently removes your profile, tasks, photos, follows, and compliments. For any deletion request we will respond within 48 hours and complete the deletion within 30 days.",
        type: "paragraph",
      },
      {
        title: "Children",
        content:
          "Clean is intended for users 13 years of age and older. We do not knowingly collect data from children under 13. If you believe a child has provided personal information, please contact us immediately.",
        type: "paragraph",
      },
      {
        title: "Security",
        content:
          "All data is transmitted over encrypted HTTPS connections, and your device identifier is stored in your device's secure Keychain. We take reasonable measures to protect your information against unauthorized access.",
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
          "If you have any questions about privacy while using Clean, please contact us at ybahaerarslan@gmail.com.",
        type: "paragraph",
      },
    ],
    lastUpdated: "2026-08-16",
    contactEmail: "ybahaerarslan@gmail.com",
  },
  terms: {
    title: "Terms of Service",
    sections: [
      {
        content:
          "By downloading or using the Clean app, these terms will automatically apply to you — please read them carefully before using the app.",
        type: "paragraph",
      },
      {
        title: "App Usage License",
        content:
          "Poshet grants you a revocable, non-exclusive, non-transferable, limited license to download, install, and use Clean strictly in accordance with the terms of this Agreement.",
        type: "paragraph",
      },
      {
        title: "Community Standards",
        content:
          "Clean is a shared space. You may post photos, compliments, a bio, a handle, and other content visible to other members. You are responsible for what you share.",
        type: "paragraph",
      },
      {
        title: "Zero Tolerance for Objectionable Content",
        content:
          "We do not tolerate objectionable content or abusive users. This includes harassment, hate speech, threats, sexual content involving minors, graphic violence, spam, and any content that is illegal or intended to harm others. If you post objectionable content or abuse other members, we may remove the content, suspend or permanently ban your account, and eject you from the community — without prior notice when necessary to protect others.",
        type: "paragraph",
      },
      {
        title: "Reporting and Blocking",
        content:
          "You can report content and block users from inside the app. We commit to reviewing reports and removing objectionable content within 24 hours of a valid report, and to ejecting users who violate these terms.",
        type: "paragraph",
      },
      {
        title: "Acceptable Use",
        content: "You agree to use the app only for lawful purposes and not to:",
        type: "list",
        items: [
          "Post content that is illegal, harmful, threatening, abusive, harassing, or that violates others' rights",
          "Impersonate another person or misrepresent your affiliation",
          "Attempt to extract or scrape other users' data",
          "Attempt to reverse engineer, decompile, or extract the app's source code",
          "Use the app to spam, phish, or send unsolicited messages",
        ],
      },
      {
        title: "Not Medical Advice",
        content:
          "Clean provides general wellness, skincare, and self-care information and is not intended to diagnose, treat, cure, or prevent any disease or medical condition. The app does not replace professional medical or dermatological advice. Consult a qualified professional with any health concerns.",
        type: "paragraph",
      },
      {
        title: "Intellectual Property",
        content:
          "All content, programmes, and materials in the app are the intellectual property of Poshet and are protected by copyright. You may not copy, modify, or distribute this content without written permission.",
        type: "paragraph",
      },
      {
        title: "Service Availability",
        content:
          "Poshet strives to maintain reliable service but cannot guarantee uninterrupted access. Some features require an internet connection. We reserve the right to modify or discontinue features with reasonable notice.",
        type: "paragraph",
      },
      {
        title: "Limitation of Liability",
        content:
          "Poshet shall not be liable for any indirect, incidental, special, consequential, or punitive damages. Individual results may vary, and we do not guarantee specific outcomes from using the app.",
        type: "paragraph",
      },
      {
        title: "Termination",
        content:
          "This Agreement remains in effect until terminated. Poshet may terminate your access for violation of these terms. You may stop using the app and delete your account at any time.",
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
          "If you have any questions about these Terms and Conditions, or need to escalate a report, please contact us at ybahaerarslan@gmail.com.",
        type: "paragraph",
      },
    ],
    lastUpdated: "2026-08-16",
    contactEmail: "ybahaerarslan@gmail.com",
  },
  deleteAccount: {
    title: "Delete Account & Data",
    sections: [
      {
        content:
          "This page explains how to delete your Clean account and any data associated with it. We are committed to giving you full control over your information.",
        type: "paragraph",
      },
      {
        title: "In-App Deletion (Fastest)",
        content:
          "The easiest way to delete your account is from inside the app: open Clean, go to Profile → Settings → Delete my account, and confirm. This permanently removes your profile, tasks, photos, follows, and compliments.",
        type: "paragraph",
      },
      {
        title: "Deletion by Email",
        content:
          "You can also request deletion by email. Please follow these steps:",
        type: "list",
        items: [
          'Send an email to ybahaerarslan@gmail.com with the subject line "Clean - Data Deletion Request"',
          "Include your display name or handle so we can locate your data",
          "We will acknowledge your request within 48 hours and process it within 30 days",
        ],
      },
      {
        title: "What Data Is Removed",
        content: "When you delete your account, we remove:",
        type: "list",
        items: [
          "Your profile, display name, handle, and bio",
          "Your tasks, streaks, and day history",
          "Photos you shared (from our servers and cloud storage)",
          "Your follows and any compliments you sent or received",
        ],
      },
      {
        title: "What Happens After Deletion",
        content:
          "Deletion is permanent and cannot be undone. After deleting your account, the app clears its local data on your device. You may reinstall the app and start fresh at any time.",
        type: "paragraph",
      },
      {
        title: "Third-Party Data",
        content:
          "Any future payment data would be managed by Apple (App Store). To delete payment history held by Apple, please contact Apple support directly.",
        type: "paragraph",
      },
      {
        title: "Contact Us",
        content:
          "If you have any questions about data deletion or need assistance, please contact us at ybahaerarslan@gmail.com.",
        type: "paragraph",
      },
    ],
    lastUpdated: "2026-08-16",
    contactEmail: "ybahaerarslan@gmail.com",
  },
};
