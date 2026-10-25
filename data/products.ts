export type Product = {
  slug: string;
  name: string;
  /** One-line category shown on cards. */
  category: string;
  description: string;
  href: string;
  /** Display label for the link, e.g. the bare domain. */
  hostname: string;
  /** 16:9 screenshot of the live product. */
  image: { src: string; alt: string };
  /** Tint behind framed screenshots on small cards. */
  tint: string;
  stack: string[];
};

/** Web products we run ourselves, shown ahead of the mobile apps. */
export const products: Product[] = [
  {
    slug: "karardex",
    name: "Karardex",
    category: "Web product · Legal research",
    description:
      "Turkish legal research with sourced citations and visible research steps. Ask a question, get an answer you can trace back to the original decision, with context from your own PDF and Word files and MCP support for traceable workflows in other tools.",
    href: "https://karardex.com",
    hostname: "karardex.com",
    image: {
      src: "/projects/karardex.webp",
      alt: "Karardex chat interface ready for a Turkish legal question",
    },
    tint: "#2B2F36",
    stack: ["Next.js", "Hono", "oRPC", "PostgreSQL", "RAG", "Redis", "MCP"],
  },
  {
    slug: "postmixr",
    name: "Postmixr",
    category: "Web product · Social scheduling",
    description:
      "A shared content calendar for teams publishing across channels. Tell your AI assistant what to post, from Claude, Cursor or VS Code, and Postmixr handles the schedule across Instagram, TikTok, YouTube, X, LinkedIn, Facebook and Pinterest while you stay in control.",
    href: "https://postmixr.com",
    hostname: "postmixr.com",
    image: {
      src: "/projects/postmixr.webp",
      alt: "Postmixr landing page with an AI chat planning a month of posts next to the content calendar",
    },
    tint: "#6366F1",
    stack: ["Next.js", "Hono", "oRPC", "PostgreSQL", "Drizzle", "Queues", "Stripe"],
  },
];
