import { AppData } from "@/lib/types/app";

export const vidgenAppData: AppData = {
  metadata: {
    name: "VidGen3 - AI Video Generation",
    slug: "vidgen",
    tagline: "Create Stunning AI Videos",
    description:
      "VidGen3 is an AI-powered video generation app that transforms your ideas into stunning videos using advanced AI models. Create videos from text prompts or transform images into animated masterpieces.",
    version: "1.0.0",
    developer: "Poshet",
    supportEmail: "ybahaerarslan@gmail.com",
  },
  hero: {
    title: "VidGen3 - AI Video Generation",
    subtitle: "Create Stunning AI Videos",
    description:
      "Transform your creativity into motion with VidGen3. Generate stunning AI videos from text descriptions or animate your images with cutting-edge AI technology. From concept to creation in seconds - unleash the power of AI video generation with multiple models, customizable settings, and professional-quality results.",
    imagePath: "/apps/vidgen/icon.png",
  },
  features: [
    {
      title: "Multiple AI Models",
      description:
        "Access various AI models including Veo-3, Seedance, and more for different video generation styles",
    },
    {
      title: "Text-to-Video",
      description:
        "Generate amazing videos from detailed text descriptions with customizable duration and quality",
    },
    {
      title: "Image-to-Video",
      description:
        "Transform your static images into dynamic animated videos with AI animation technology",
    },
    {
      title: "Flexible Pricing",
      description:
        "Choose between credit-based pay-per-use or subscription plans that fit your creative needs",
    },
    {
      title: "Professional Quality",
      description:
        "Generate videos in multiple resolutions (480p to 1080p) with various aspect ratios",
    },
    {
      title: "Real-Time Updates",
      description:
        "Track your video generation progress with live status updates and immediate notifications",
    },
  ],
  downloads: [
    {
      platform: "ios",
      url: "https://apps.apple.com/app/vidgen3-ai-video-generation/id123456789",
      label: "Download on the App Store",
      available: true,
    },
    {
      platform: "android",
      url: "https://play.google.com/store/apps/details?id=co.poshet.vidgen",
      label: "Get it on Google Play",
      available: false,
      comingSoon: true,
    },
  ],
  faq: [
    {
      question: "How does the pricing work?",
      answer:
        "VidGen3 offers both credit-based pay-per-use and subscription options. Credits are consumed based on video duration, resolution, and AI model used. Subscriptions provide monthly credit allowances with bonus credits.",
    },
    {
      question: "What video formats and quality options are available?",
      answer:
        "VidGen3 supports multiple resolutions from 480p to 1080p and various aspect ratios (16:9, 9:16, 1:1). Videos are generated in MP4 format for maximum compatibility.",
    },
    {
      question: "How long does video generation take?",
      answer:
        "Generation time varies by model and duration, typically taking 1-5 minutes. You'll receive real-time updates on your video's progress and be notified when it's ready.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, subscriptions are managed through your Apple or Google account and can be cancelled anytime. You'll retain access to your subscription benefits until the end of your billing period.",
    },
    {
      question: "What happens to my videos and images?",
      answer:
        "Your generated videos are stored securely in your personal gallery. Original images uploaded for image-to-video are processed and can be deleted by you anytime. When you delete your data, it is removed from our servers within 24 hours. To provide video generation, your text prompts and images are sent to third-party AI providers (such as OpenAI, Google, ByteDance, Stability AI, and Luma via Replicate) — but your content is never used for marketing or AI model training.",
    },
    {
      question: "Do credits expire?",
      answer:
        "Purchased credits never expire and carry over between billing periods. Bonus credits from subscriptions may have expiration dates as specified in your subscription terms.",
    },
  ],
  contact: {
    responseTime: "We typically respond within 24-48 hours",
    officeHours: "Monday - Friday: 9:00 AM - 6:00 PM (GMT+3)",
    supportDescription:
      "Need help with VidGen3? Having issues with video generation or billing? Our support team is here to help you create amazing AI videos.",
  },
  privacy: {
    title: "Privacy Policy",
    sections: [
      {
        content:
          'This privacy policy applies to the VidGen3 - AI Video Generation app (hereby referred to as "Application") for mobile devices that was created by Poshet (hereby referred to as "Service Provider") as a Commercial service. This service is intended for use "AS IS".',
        type: "paragraph",
      },
      {
        title: "Information Collection and Use",
        content:
          "VidGen3 has a minimal data collection approach. We only store:",
        type: "list",
        items: [
          "Images you upload for video generation",
          "Text prompts you provide for video generation",
          "Generated videos in your personal gallery",
          "Video generation history and preferences",
          "Your Apple account identifier (for linking your content and purchases)",
        ],
      },
      {
        title: "Third-Party AI Data Sharing",
        content:
          "To provide video generation and prompt enhancement features, VidGen3 shares certain data with third-party AI service providers. By using these features, you acknowledge and consent to the following:",
        type: "list",
        items: [
          "Data shared: text prompts you enter and images you upload for video generation",
          "Third-party providers that may receive your data: OpenAI, Google, ByteDance, Stability AI, and Luma (via Replicate)",
          "Purpose: your data is transmitted solely for AI-powered video generation and prompt enhancement",
          "Consent: you are required to explicitly review and accept a consent screen before any data is transmitted to third-party providers",
          "Existing users are prompted to review and accept consent before their first AI-powered action",
          "You can review or revoke your consent at any time in the app Settings",
        ],
      },
      {
        title: "What We Don't Collect",
        content: "Unlike many apps, VidGen3 does not collect or store:",
        type: "list",
        items: [
          "IP addresses or device identifiers",
          "Location data or tracking information",
          "Personal information like name, email, or contact details",
          "Device usage analytics or app navigation data",
          "Any data unrelated to video generation functionality",
        ],
      },
      {
        title: "Video and Image Processing",
        content:
          "Content you upload to the Application (images and text prompts) is transmitted to third-party AI providers — including OpenAI, Google, ByteDance, Stability AI, and Luma (via Replicate) — for the purpose of video generation and prompt enhancement. Your generated videos are stored in your personal gallery and remain accessible until you choose to delete them. Original images are processed for video generation and stored securely on our servers. Your content is not used by these providers for model training or marketing purposes.",
        type: "paragraph",
      },
      {
        title: "Account Linking and Purchases",
        content:
          "Your generated content and purchase history are linked to your Apple account identifier. This allows you to access your content and purchases across devices. We do not store payment card information - all transactions are processed securely by Apple App Store.",
        type: "paragraph",
      },
      {
        title: "Third Party Access",
        content:
          "We share your data with the following categories of third-party service providers:",
        type: "list",
        items: [
          "AI Video Generation and Prompt Enhancement: OpenAI, Google, ByteDance, Stability AI, and Luma (via Replicate) — these providers receive your text prompts and uploaded images solely for the purpose of generating videos and enhancing prompts",
          "Payment Processing: Apple App Store — handles all in-app purchases and subscriptions securely",
          "Cloud Storage: secure cloud infrastructure providers — store your generated videos, uploaded images, and generation history",
        ],
      },
      {
        content:
          "Your content is shared with these providers only to deliver the video generation functionality. Your personal content is never shared for marketing or AI model training purposes.",
        type: "paragraph",
      },
      {
        title: "Data Retention Policy",
        content:
          "Generated videos and uploaded images are stored in your personal gallery until you choose to delete them. When you delete your data, it is removed from our servers within 24 hours. Account data and generation history are retained while you actively use the Application. Upon account termination or deletion request, all associated data is purged from our servers within 24 hours.",
        type: "paragraph",
      },
      {
        title: "Security",
        content:
          "We implement industry-standard security measures to protect your data. All data transmission uses encryption, and your content is stored securely in professional cloud storage services with access controls and monitoring.",
        type: "paragraph",
      },
      {
        title: "Children",
        content:
          "The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13. Video generation services are intended for users 13 years and older.",
        type: "paragraph",
      },
      {
        title: "Changes",
        content:
          "This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. Continued use constitutes acceptance of changes.",
        type: "paragraph",
      },
      {
        title: "Your Data Rights",
        content:
          "You can delete your videos and images from your gallery at any time. To request account data deletion or have questions about your data, please contact us via email.",
        type: "paragraph",
      },
      {
        title: "Contact Us",
        content:
          "If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email.",
        type: "paragraph",
      },
    ],
    lastUpdated: "2026-02-12",
    contactEmail: "ybahaerarslan@gmail.com",
  },
  terms: {
    title: "Terms of Service",
    sections: [
      {
        content:
          "By downloading or using the VidGen3 - AI Video Generation app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app.",
        type: "paragraph",
      },
      {
        title: "App Usage License",
        content:
          "Poshet grants you a revocable, non-exclusive, non-transferable, limited license to download, install and use the VidGen3 - AI Video Generation app strictly in accordance with the terms of this Agreement.",
        type: "paragraph",
      },
      {
        title: "Acceptable Use",
        content:
          "You agree to use the app only for lawful purposes and agree not to:",
        type: "list",
        items: [
          "Generate content that violates copyright, privacy rights, or other intellectual property rights",
          "Create videos containing inappropriate, offensive, illegal, or harmful content",
          "Generate content that may be defamatory, misleading, or used for harassment",
          "Use the app to create deepfakes or impersonate others without consent",
          "Attempt to reverse engineer or extract the AI models used in the app",
          "Violate any applicable laws or regulations in your jurisdiction",
        ],
      },
      {
        title: "Credit System and Subscriptions",
        content:
          "VidGen3 uses a credit-based system where credits are consumed for video generation based on duration, resolution, and AI model complexity. We offer consumable IAP credits for one-time purchases, as well as weekly and monthly subscription plans with credit allowances.",
        type: "paragraph",
      },
      {
        title: "Payment Terms",
        content:
          "All purchases are processed through Apple App Store. Consumable IAP credits are immediately consumed upon use and never expire. Weekly and monthly subscriptions automatically renew unless cancelled and provide credit allowances during the active subscription period.",
        type: "paragraph",
      },
      {
        title: "Content Ownership and Usage Rights",
        content:
          "You retain ownership of original content you upload (images, text prompts). Videos generated by the app using your content are yours to use freely for personal and commercial purposes, subject to these terms and applicable law. You are responsible for ensuring you have rights to any source material used.",
        type: "paragraph",
      },
      {
        title: "AI Content Generation Disclaimer",
        content:
          "AI-generated videos may not always meet your expectations or produce desired results. Video generation quality depends on various factors including prompt clarity, source image quality, and the selected generation settings. No guarantee is made regarding specific outcomes or quality of generated content.",
        type: "paragraph",
      },
      {
        title: "Service Availability",
        content:
          "Video generation requires an internet connection and depends on our AI processing services. While we strive for high availability, we cannot guarantee uninterrupted service. Generation times may vary based on video settings and system load.",
        type: "paragraph",
      },
      {
        title: "Content Moderation and Removal",
        content:
          "We reserve the right to refuse generation of or remove content that violates these terms or applicable laws. Repeated violations may result in account suspension or termination without refund of unused credits.",
        type: "paragraph",
      },
      {
        title: "Intellectual Property",
        content:
          "The app, its AI technology, user interface, and all related intellectual property remain the exclusive property of Poshet. The AI video generation technology is licensed for use within the app and subject to these terms.",
        type: "paragraph",
      },
      {
        title: "Limitation of Liability",
        content:
          "Poshet shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the app, including but not limited to unsatisfactory generation results, service interruptions, or data loss.",
        type: "paragraph",
      },
      {
        title: "Termination",
        content:
          "This Agreement remains in effect until terminated. You may terminate by deleting the app. We may terminate or suspend access for violations of these terms. Upon termination, your right to use the app ceases, though generated content in your gallery remains accessible for download for a reasonable period.",
        type: "paragraph",
      },
      {
        title: "Subscription Cancellation",
        content:
          "Weekly and monthly subscriptions can be cancelled through your Apple App Store account settings. Cancellation takes effect at the end of the current billing period. You retain access to subscription benefits until the end of the paid period.",
        type: "paragraph",
      },
      {
        title: "Refund Policy",
        content:
          "Refunds are handled according to Apple App Store's policy. Refund eligibility may depend on usage, time since purchase, and other factors. Consumable credits that have been used for video generation are generally non-refundable. Unused subscription periods may be eligible for refund according to Apple's terms.",
        type: "paragraph",
      },
      {
        title: "Updates and Modifications",
        content:
          "We may update the app, add new features, modify pricing, or change available AI models at any time. Significant changes will be communicated through the app or app store updates.",
        type: "paragraph",
      },
      {
        title: "Governing Law",
        content:
          "These Terms shall be governed and construed in accordance with the laws of Turkey, without regard to its conflict of law provisions. Any disputes shall be resolved in Turkish courts.",
        type: "paragraph",
      },
      {
        title: "Privacy and Data Processing",
        content:
          "By using VidGen3, you acknowledge that your images, prompts, and generated videos will be processed by secure third-party AI services to provide video generation functionality. These services follow strict data privacy and security practices.",
        type: "paragraph",
      },
      {
        title: "Export and Usage Rights",
        content:
          "Generated videos can be downloaded and used according to these terms. You are responsible for complying with platform-specific terms when sharing generated content on social media or other platforms.",
        type: "paragraph",
      },
      {
        title: "Contact Us",
        content:
          "If you have any questions about these Terms and Conditions, please contact us at ybahaerarslan@gmail.com.",
        type: "paragraph",
      },
    ],
    lastUpdated: "2025-02-04",
    contactEmail: "ybahaerarslan@gmail.com",
  },
};
