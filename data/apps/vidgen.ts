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
        "Your generated videos are stored securely in your personal gallery. Original images uploaded for image-to-video are processed and can be deleted by you anytime. We don't share your content with third parties.",
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
          "The Application collects information when you download and use it. This information may include:",
        type: "list",
        items: [
          "Your device's Internet Protocol address (e.g. IP address)",
          "The pages of the Application that you visit, the time and date of your visit, the time spent on those pages",
          "The time spent on the Application",
          "The operating system you use on your mobile device",
          "Images you upload for video generation (processed and stored in your gallery)",
          "Text prompts you provide for video generation",
          "Video generation history and preferences",
        ],
      },
      {
        title: "Video and Image Processing",
        content:
          "Content uploaded to the Application (images and text prompts) is processed using AI technology through third-party services including Replicate API. Your generated videos are stored in your personal gallery and remain accessible until you choose to delete them. Original images are processed for video generation and stored securely.",
        type: "paragraph",
      },
      {
        title: "Subscription and Payment Data",
        content:
          "Subscription and purchase information is processed through RevenueCat and your device's app store (Apple App Store or Google Play Store). We do not directly handle payment card information - all transactions are processed securely by these trusted payment providers.",
        type: "paragraph",
      },
      {
        title: "Third Party Access",
        content:
          "We use third-party services for AI video generation (Replicate), payment processing (RevenueCat, Apple, Google), and cloud storage (Cloudflare R2). Only aggregated, anonymized usage data is shared to improve our service. Your personal content is never shared for marketing or training purposes.",
        type: "paragraph",
      },
      {
        title: "Data Retention Policy",
        content:
          "Generated videos and uploaded images are stored in your personal gallery until you delete them. Account data and generation history are retained while you use the Application and for a reasonable time after account termination for support and legal purposes.",
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
    lastUpdated: "2025-02-04",
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
          "VidGen3 uses a credit-based system where credits are consumed for video generation based on duration, resolution, and AI model complexity. We offer both one-time credit purchases and subscription plans with monthly credit allowances.",
        type: "paragraph",
      },
      {
        title: "Payment Terms",
        content:
          "All purchases are processed through your device's app store and are subject to their refund policies. Credits purchased individually never expire. Subscription credits may have expiration dates as specified in your plan. Subscriptions automatically renew unless cancelled.",
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
          "AI-generated videos may not always meet your expectations or produce desired results. Video generation quality depends on various factors including prompt clarity, source image quality, and AI model capabilities. No guarantee is made regarding specific outcomes or quality of generated content.",
        type: "paragraph",
      },
      {
        title: "Service Availability",
        content:
          "Video generation requires an internet connection and depends on third-party AI services. While we strive for high availability, we cannot guarantee uninterrupted service. Generation times may vary based on server load and model complexity.",
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
          "The app, its AI technology, user interface, and all related intellectual property remain the exclusive property of Poshet. The AI models are provided by third-party services and are subject to their respective terms.",
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
          "Subscriptions can be cancelled through your app store account settings. Cancellation takes effect at the end of the current billing period. You retain access to subscription benefits until the end of the paid period.",
        type: "paragraph",
      },
      {
        title: "Refund Policy",
        content:
          "Refunds are handled according to your app store's policy (Apple App Store or Google Play Store). Generally, credits and subscriptions are non-refundable except as required by law or in cases of technical issues preventing service use.",
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
          "By using VidGen3, you acknowledge that your images, prompts, and generated videos will be processed by third-party AI services (including Replicate) to provide video generation functionality. These services have their own privacy policies and data handling practices.",
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