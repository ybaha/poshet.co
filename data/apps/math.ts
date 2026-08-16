import { AppData } from "@/lib/types/app";

export const mathAppData: AppData = {
  metadata: {
    name: "Math Help AI - Solve Questions",
    slug: "math",
    tagline: "Solve Math Questions with AI",
    description:
      "Math Help AI is an interactive learning app designed to help students excel in mathematics.",
    version: "2.1.0",
    developer: "Poshet",
    supportEmail: "ybahaerarslan@gmail.com",
  },
  hero: {
    title: "Math Help AI",
    subtitle: "Solve Math Questions with AI",
    description:
      "Math Help AI is an interactive learning app designed to help students excel in mathematics through engaging exercises, step-by-step solutions, and personalized learning paths. From basic arithmetic to advanced calculus, we make math accessible and enjoyable for learners of all levels.",
    imagePath: "/apps/math/Screenshot 01.png",
  },
  features: [
    {
      title: "Interactive Exercises",
      description:
        "Solve problems with instant feedback and detailed explanations",
    },
    {
      title: "Step-by-Step Solutions",
      description:
        "Learn the methodology behind every solution with clear explanations",
    },
    {
      title: "Progress Tracking",
      description: "Monitor your improvement and identify areas for growth",
    },
  ],
  downloads: [
    {
      platform: "ios",
      url: "https://apps.apple.com/nl/app/math-help-ai-solve-questions/id6740034105?l=en-GB",
      label: "Download on the App Store",
      available: true,
    },
    {
      platform: "android",
      url: "https://play.google.com/store/apps/details?id=co.poshet.math",
      label: "Get it on Google Play",
      available: false,
    },
  ],
  faq: [
    {
      question: "What grade levels does Math Master support?",
      answer:
        "Math Master covers topics from elementary arithmetic through college-level calculus, making it suitable for students from grade 3 through university level.",
    },
    {
      question: "Can I track my child's progress?",
      answer:
        "Yes! Math Master includes comprehensive progress tracking and parent dashboards to monitor learning achievements and identify areas that need attention.",
    },
    {
      question: "Does the app work offline?",
      answer:
        "Many core features work offline, including practice problems and previously downloaded content. Some advanced features like progress syncing require an internet connection.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes, Math Master offers a 7-day free trial with access to all premium features. After the trial, you can continue with our free tier or upgrade to premium.",
    },
  ],
  contact: {
    responseTime: "We typically respond within 12-24 hours",
    officeHours: "Monday - Friday: 8:00 AM - 7:00 PM (GMT+3)",
    supportDescription:
      "Need help with Math Master? Have questions about specific math topics? Our team of educators and developers is here to assist you.",
  },
  privacy: {
    title: "Privacy Policy",
    sections: [
      {
        content:
          'This privacy policy applies to the {{APP_NAME}} app (hereby referred to as "Application") for mobile devices that was created by {{DEVELOPER}} (hereby referred to as "Service Provider") as a Commercial service.',
        type: "paragraph",
      },
      {
        title: "Information Collection and Use",
        content:
          "The Application collects information when you download and use it. This information may include:",
        type: "list",
        items: [
          "Learning progress and performance data",
          "App usage statistics and analytics",
          "Device information and technical data",
          "Account information (if you create an account)",
        ],
      },
      {
        title: "Educational Data Protection",
        content:
          "We take the privacy of educational data seriously. All learning progress and performance data is encrypted and stored securely. We never share individual student data with third parties.",
        type: "paragraph",
      },
      {
        title: "Data Usage",
        content: "The collected information is used solely to:",
        type: "list",
        items: [
          "Provide personalized learning experiences",
          "Track and improve learning outcomes",
          "Enhance app functionality and user experience",
          "Provide customer support when requested",
        ],
      },
      {
        title: "Data Retention",
        content:
          "We retain user data only as long as necessary to provide our services. Learning progress data is kept to maintain continuity in education. Users can request data deletion at any time.",
        type: "paragraph",
      },
      {
        title: "Contact Us",
        content:
          "If you have any questions regarding privacy while using the Application, please contact us at {{CONTACT_EMAIL}}.",
        type: "paragraph",
      },
    ],
    lastUpdated: "2025-01-15",
    contactEmail: "ybahaerarslan@gmail.com",
  },
  terms: {
    title: "Terms of Service",
    sections: [
      {
        content:
          "By downloading or using {{APP_NAME}}, these terms will automatically apply to you. Please read them carefully before using the app.",
        type: "paragraph",
      },
      {
        title: "Educational License",
        content:
          "{{DEVELOPER}} grants you a license to use {{APP_NAME}} for educational purposes in accordance with these terms.",
        type: "paragraph",
      },
      {
        title: "Acceptable Use",
        content:
          "You agree to use the app for legitimate educational purposes only. You will not:",
        type: "list",
        items: [
          "Share your account credentials with others",
          "Attempt to reverse engineer or modify the app",
          "Use the app to cheat on assignments or exams",
          "Upload inappropriate or harmful content",
        ],
      },
      {
        title: "Subscription Terms",
        content:
          "Premium subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period. You can manage your subscription in your device settings.",
        type: "paragraph",
      },
      {
        title: "Educational Content",
        content:
          "While we strive for accuracy in all educational content, {{APP_NAME}} should supplement, not replace, classroom instruction and textbooks.",
        type: "paragraph",
      },
      {
        title: "Contact Us",
        content:
          "If you have questions about these Terms of Service, please contact us at {{CONTACT_EMAIL}}.",
        type: "paragraph",
      },
    ],
    lastUpdated: "2025-01-15",
    contactEmail: "ybahaerarslan@gmail.com",
  },
  deleteAccount: {
    title: "Delete Account & Data",
    sections: [
      {
        content:
          "This page explains how you can request deletion of your account and any data associated with Math Help AI. We are committed to giving you full control over your information.",
        type: "paragraph",
      },
      {
        title: "What Data We Store",
        content:
          "Math Help AI may collect and store the following data associated with your use of the app:",
        type: "list",
        items: [
          "Learning progress and performance data",
          "App usage statistics and analytics",
          "Device information and technical data",
          "Account information (if you created an account)",
          "Subscription and purchase data",
        ],
      },
      {
        title: "How to Request Data Deletion",
        content:
          "To request deletion of your data, please follow these steps:",
        type: "list",
        items: [
          'Send an email to ybahaerarslan@gmail.com with the subject line "Math Help AI - Data Deletion Request"',
          "Include any account identifier (e.g. the email associated with your Apple ID or Google account) so we can locate your data",
          "We will acknowledge your request within 48 hours and process it within 30 days",
        ],
      },
      {
        title: "Deletion Timeline",
        content:
          "Once we receive your deletion request, we will acknowledge it within 48 hours. Your data will be permanently deleted within 30 days. You will receive a confirmation email once the deletion is complete.",
        type: "paragraph",
      },
      {
        title: "What Happens After Deletion",
        content:
          "Please be aware of the following consequences of data deletion:",
        type: "list",
        items: [
          "All learning progress, performance data, and account information will be permanently removed and cannot be recovered",
          "If you have an active subscription, please cancel it separately through the App Store or Google Play before requesting deletion",
          "You may reinstall the app and start fresh at any time after deletion",
        ],
      },
      {
        title: "Third-Party Data",
        content:
          "Subscription and payment data is managed by Apple (App Store) or Google (Google Play). To delete payment history or subscription records held by these platforms, please contact Apple or Google support directly, as we do not have access to this information.",
        type: "paragraph",
      },
      {
        title: "Contact Us",
        content:
          "If you have any questions about data deletion or need assistance, please contact us at ybahaerarslan@gmail.com.",
        type: "paragraph",
      },
    ],
    lastUpdated: "2026-02-24",
    contactEmail: "ybahaerarslan@gmail.com",
  },
};
