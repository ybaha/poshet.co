export const BOOKING_URL = "https://cal.com/ercanmungan/30min?duration=30";
export const CONTACT_EMAIL = "info@poshet.co";

export const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Apps", href: "/apps" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerGroups = [
  {
    title: "Studio",
    links: [
      { label: "Work", href: "/#work" },
      { label: "Services", href: "/#services" },
      { label: "Process", href: "/#process" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Apps", href: "/apps" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export type WorkPreview =
  | { kind: "screens"; images: { src: string; alt: string }[]; background: string }
  | { kind: "icon"; icon: string; alt: string; background: string };

export type FeaturedWork = {
  slug: string;
  title: string;
  category: string;
  href: string;
  preview: WorkPreview;
};

export const featuredWork: FeaturedWork[] = [
  {
    slug: "math",
    title: "Math Help AI",
    category: "iOS app · AI & education",
    href: "/apps/math",
    preview: {
      kind: "screens",
      background: "linear-gradient(160deg, #DCE9FF 0%, #F0F8FF 70%)",
      images: [
        { src: "/apps/math/Screenshot 01.png", alt: "Math Help AI scanning a blackboard" },
        { src: "/apps/math/Screenshot 02.png", alt: "Math Help AI step-by-step solution" },
      ],
    },
  },
  {
    slug: "pico",
    title: "Pico Cards",
    category: "iOS app · Conversation starters",
    href: "/apps/pico",
    preview: {
      kind: "icon",
      icon: "/apps/pico/icon.png",
      alt: "Pico Cards app icon",
      background: "linear-gradient(160deg, #FFD9E5 0%, #FFF1F5 75%)",
    },
  },
  {
    slug: "picu",
    title: "PicU",
    category: "iOS app · AI photo editing",
    href: "/apps/picu",
    preview: {
      kind: "icon",
      icon: "/apps/filter/icon.png",
      alt: "PicU app icon",
      background: "linear-gradient(160deg, #E2E7FF 0%, #F4F6FF 75%)",
    },
  },
  {
    slug: "viralty",
    title: "Viralty",
    category: "iOS app · Video analysis",
    href: "/apps/viralty",
    preview: {
      kind: "icon",
      icon: "/apps/viralty/icon.png",
      alt: "Viralty app icon",
      background: "linear-gradient(160deg, #D9ECFF 0%, #F0F8FF 75%)",
    },
  },
];

export const capabilities = [
  {
    icon: "design",
    title: "Website design",
    description:
      "Clear structure, confident visuals and layouts that explain what you do in seconds.",
    tags: ["Landing pages", "Responsive UI", "Content structure"],
  },
  {
    icon: "code",
    title: "Web development",
    description:
      "Fast, accessible and maintainable websites and web apps, built with search in mind.",
    tags: ["SEO-first", "E-commerce", "API integrations"],
  },
  {
    icon: "mobile",
    title: "Mobile & AI products",
    description:
      "Useful apps taken from idea to App Store, including products powered by AI.",
    tags: ["iOS apps", "AI features", "Launch support"],
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "A short call about your goals, audience and constraints, so we solve the right problem.",
  },
  {
    number: "02",
    title: "Design & build",
    description:
      "We design and develop in the open, sharing progress so feedback lands early.",
  },
  {
    number: "03",
    title: "Launch & support",
    description:
      "We ship, hand over cleanly, and stay available for fixes and next steps.",
  },
];

export const faqs = [
  {
    question: "What does Poshet build?",
    answer:
      "Websites and web apps, plus mobile products. We design and build them end to end, and we ship our own apps too, so we know what it takes to get a product live.",
  },
  {
    question: "How does a project start?",
    answer:
      "With a short call about your goals, audience and constraints. From there we propose scope, approach and a realistic timeline before any work begins.",
  },
  {
    question: "How long does a project take?",
    answer:
      "It depends on scope. A focused website and a full product are very different efforts, so we agree a schedule with you after the first conversation rather than quoting a number up front.",
  },
  {
    question: "Do you work with clients outside Türkiye?",
    answer:
      "Yes. We are based in Türkiye and work with clients worldwide, in English, across time zones.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We can stay on for fixes, improvements and new features. Support terms are agreed per project, so you know what to expect.",
  },
];
