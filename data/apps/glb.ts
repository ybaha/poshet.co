import { AppData } from "@/lib/types/app";

export const glbAppData: AppData = {
  metadata: {
    name: "GLB: 3D Model Generator",
    slug: "glb",
    tagline: "Generate 3D assets from images or text",
    description:
      "GLB is an AI-powered 3D model generator that transforms your images and text descriptions into high-quality 3D assets. Create stunning GLB models for games, AR/VR, design projects, and more.",
    version: "1.0.0",
    developer: "Poshet",
    supportEmail: "ybahaerarslan@gmail.com",
  },
  hero: {
    title: "GLB: 3D Model Generator",
    subtitle: "Generate 3D assets from images or text",
    description:
      "Transform your ideas into stunning 3D models with GLB. Upload any image or describe what you want, and our AI generates high-quality GLB files ready for games, AR/VR experiences, 3D printing, and design projects. No 3D modeling skills required — just your creativity.",
    imagePath: "/apps/glb/icon.png",
  },
  features: [
    {
      title: "Image to 3D",
      description:
        "Upload any image and watch AI transform it into a detailed 3D model. Perfect for turning photos, artwork, or concepts into usable 3D assets.",
    },
    {
      title: "Text to 3D",
      description:
        "Describe what you want in plain text and generate 3D models from your imagination. No reference images needed — just your words.",
    },
    {
      title: "GLB Export Format",
      description:
        "Export models in the universal GLB format, compatible with Unity, Unreal Engine, Blender, AR/VR platforms, and web applications.",
    },
    {
      title: "High-Quality Output",
      description:
        "Generate detailed, textured 3D models with optimized geometry ready for professional use in games, apps, and design projects.",
    },
    {
      title: "Fast Generation",
      description:
        "Advanced AI processing delivers your 3D models in minutes, not hours. Iterate quickly and bring ideas to life faster than ever.",
    },
    {
      title: "Model Library",
      description:
        "Save and organize all your generated models in your personal library. Access, download, and manage your 3D assets anytime.",
    },
  ],
  downloads: [
    {
      platform: "ios",
      url: "https://apps.apple.com/app/glb-3d-model-generator",
      label: "Download on the App Store",
      available: false,
      comingSoon: true,
    },
    {
      platform: "android",
      url: "https://play.google.com/store/apps/details?id=co.poshet.glb",
      label: "Get it on Google Play",
      available: false,
      comingSoon: true,
    },
  ],
  faq: [
    {
      question: "What can I create with GLB?",
      answer:
        "You can generate 3D models from any image (photos, artwork, logos, product shots) or from text descriptions. Create characters, objects, props, vehicles, architecture, and more for games, AR/VR, 3D printing, or design projects.",
    },
    {
      question: "How does the credit system work?",
      answer:
        "Each 3D model generation uses credits. You can purchase credit packs as one-time purchases for flexibility, or subscribe for monthly credits at a better value. Credits never expire and can be used anytime.",
    },
    {
      question: "What subscription options are available?",
      answer:
        "GLB offers flexible options: purchase credit packs when you need them, or subscribe monthly for a set number of credits each month at a discounted rate. Subscribers also get priority processing.",
    },
    {
      question: "What file format do I get?",
      answer:
        "Models are exported in GLB format (binary glTF), the industry standard for 3D assets. GLB files are compatible with Unity, Unreal Engine, Blender, Three.js, AR/VR platforms, and most 3D software.",
    },
    {
      question: "How long does generation take?",
      answer:
        "Most 3D models are generated within 1-5 minutes depending on complexity. Text-to-3D may take slightly longer as the AI interprets and creates from your description.",
    },
    {
      question: "Can I use the models commercially?",
      answer:
        "Yes! All models you generate are yours to use for personal and commercial projects, including games, apps, videos, and products. You own the output.",
    },
    {
      question: "What image types work best?",
      answer:
        "Clear images with good lighting and a single main subject work best. The AI can handle various angles, but front-facing or 3/4 views typically produce the best results.",
    },
  ],
  contact: {
    responseTime: "We typically respond within 24-48 hours",
    officeHours: "Monday - Friday: 9:00 AM - 6:00 PM (GMT+3)",
    supportDescription:
      "Need help with GLB? Have questions about 3D generation, credits, or your subscription? We're here to help you create amazing 3D assets.",
  },
  privacy: {
    title: "Privacy Policy",
    sections: [
      {
        content:
          'This privacy policy applies to the GLB: 3D Model Generator app (hereby referred to as "Application") for mobile devices that was created by Poshet (hereby referred to as "Service Provider") as a Commercial service. This service is intended for use "AS IS".',
        type: "paragraph",
      },
      {
        title: "Information Collection and Use",
        content:
          "The Application collects information when you download and use it. This information may include:",
        type: "list",
        items: [
          "Images you upload for 3D model generation",
          "Text prompts you provide for generation",
          "Device information and operating system",
          "Purchase and subscription data",
        ],
      },
      {
        title: "Image and Prompt Processing",
        content:
          "Images and text prompts you submit are sent to our AI processing servers to generate 3D models. Input images are processed and may be temporarily stored during generation. Generated 3D models are stored in your personal library until you choose to delete them.",
        type: "paragraph",
      },
      {
        title: "Third Party Services",
        content:
          "The Application uses third-party AI services for 3D model generation and cloud storage. These services process your inputs according to their respective privacy policies. We also use analytics services to improve the app experience.",
        type: "paragraph",
      },
      {
        title: "Data Retention Policy",
        content:
          "Generated 3D models are stored in your personal library and retained until you delete them or close your account. Input images are deleted after processing is complete. Purchase history is retained for accounting and support purposes.",
        type: "paragraph",
      },
      {
        title: "Security",
        content:
          "The Service Provider prioritizes the security of your data. All uploads and downloads are encrypted in transit, and stored data is protected with industry-standard security measures.",
        type: "paragraph",
      },
      {
        title: "Your Rights",
        content:
          "You can delete any generated model from your library at any time. You can request deletion of your account and all associated data by contacting support.",
        type: "paragraph",
      },
      {
        title: "Children",
        content:
          "The Service Provider does not knowingly collect data from children under 13. If you believe a child has provided personal information, please contact us immediately.",
        type: "paragraph",
      },
      {
        title: "Changes",
        content:
          "This Privacy Policy may be updated from time to time. The Service Provider will notify you of any changes by updating this page. You are advised to review this Privacy Policy periodically.",
        type: "paragraph",
      },
      {
        title: "Contact Us",
        content:
          "If you have any questions regarding privacy while using the Application, please contact the Service Provider via email.",
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
          "By downloading or using the GLB: 3D Model Generator app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app.",
        type: "paragraph",
      },
      {
        title: "App Usage License",
        content:
          "Poshet grants you a revocable, non-exclusive, non-transferable, limited license to download, install and use GLB strictly in accordance with the terms of this Agreement.",
        type: "paragraph",
      },
      {
        title: "Acceptable Use",
        content:
          "You agree to use the app only for lawful purposes and agree not to:",
        type: "list",
        items: [
          "Upload images that violate copyright, trademark, or other intellectual property rights",
          "Generate 3D models of real people without their consent",
          "Create content that is illegal, harmful, threatening, or violates others' rights",
          "Attempt to reverse engineer the AI models or extraction methods used",
          "Resell or redistribute the app or its underlying technology",
        ],
      },
      {
        title: "Credits and Subscriptions",
        content:
          "GLB uses a credit-based system for 3D model generation:",
        type: "list",
        items: [
          "Credits can be purchased as one-time in-app purchases",
          "Subscription plans provide monthly credits at a discounted rate",
          "Unused subscription credits do not roll over to the next month",
          "Purchased credit packs never expire",
          "All purchases are final and non-refundable except as required by law",
          "Subscriptions auto-renew and can be cancelled anytime via App Store or Google Play",
        ],
      },
      {
        title: "Generated Content Ownership",
        content:
          "You retain ownership of images you upload. 3D models generated by the app are yours to use for personal and commercial purposes. However, you may not claim ownership of the AI technology or generation methods.",
        type: "paragraph",
      },
      {
        title: "Input Content Rights",
        content:
          "You represent that you have the right to use any images you upload for 3D generation. You are responsible for ensuring your inputs do not infringe on others' intellectual property rights.",
        type: "paragraph",
      },
      {
        title: "Service Availability",
        content:
          "Poshet strives to maintain reliable service but cannot guarantee uninterrupted access. 3D generation requires an internet connection. Generation times may vary based on demand and complexity.",
        type: "paragraph",
      },
      {
        title: "Quality and Results",
        content:
          "AI-generated 3D models may vary in quality and accuracy. Results depend on input quality and complexity. We do not guarantee specific output quality or fitness for particular purposes.",
        type: "paragraph",
      },
      {
        title: "Limitation of Liability",
        content:
          "Poshet shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the app or generated content.",
        type: "paragraph",
      },
      {
        title: "Termination",
        content:
          "This Agreement remains in effect until terminated. Poshet may terminate access for violation of these terms. Upon termination, unused credits may be forfeited.",
        type: "paragraph",
      },
      {
        title: "Governing Law",
        content:
          "These Terms shall be governed and construed in accordance with the laws of Turkey, without regard to its conflict of law provisions.",
        type: "paragraph",
      },
      {
        title: "Contact Us",
        content:
          "If you have any questions about these Terms and Conditions, please contact us at ybahaerarslan@gmail.com.",
        type: "paragraph",
      },
    ],
    lastUpdated: "2025-01-15",
    contactEmail: "ybahaerarslan@gmail.com",
  },
};

