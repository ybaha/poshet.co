import { Metadata } from "next";
import { AppGrid } from "@/components/studio/apps/app-grid";
import { Container, Section } from "@/components/studio/container";
import { ContactCta } from "@/components/studio/contact-cta";
import { GlassPill } from "@/components/studio/glass-pill";
import { PageHero } from "@/components/studio/page-hero";
import { SectionHeading } from "@/components/studio/section-heading";
import { getAllApps } from "@/lib/apps";
import { isLive } from "@/lib/app-presentation";

export const metadata: Metadata = {
  title: "Our Apps - Poshet",
  alternates: { canonical: "/apps" },
  description:
    "Discover our collection of innovative mobile applications designed to enhance your digital experience. From productivity tools to entertainment apps.",
  keywords: [
    "mobile apps",
    "applications",
    "iOS",
    "Android",
    "Poshet",
    "app store",
    "download",
  ],
  authors: [{ name: "Poshet" }],
  creator: "Poshet",
  publisher: "Poshet",
  openGraph: {
    title: "Our Apps - Poshet",
    description:
      "Discover our collection of innovative mobile applications designed to enhance your digital experience.",
    type: "website",
    url: "https://poshet.co/apps",
    siteName: "Poshet",
  },
  twitter: {
    card: "summary",
    title: "Our Apps - Poshet",
    description: "Discover our collection of innovative mobile applications.",
    creator: "@poshet",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function AppsPage() {
  const apps = getAllApps();
  const live = apps.filter(({ data }) => isLive(data));
  const upcoming = apps.filter(({ data }) => !isLive(data));

  return (
    <>
      <PageHero
        seed={433}
        startTime={140}
        badge={
          <GlassPill>
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-studio-cyan" />
            {live.length} live, {upcoming.length} on the way
          </GlassPill>
        }
        title="Apps we build, ship and support."
        description="Small, focused products from the Poshet studio. Each one solves a real problem, and we maintain every one of them ourselves."
      />

      {live.length > 0 && (
        <Section className="pt-12 md:pt-16 lg:pt-20">
          <Container>
            <SectionHeading
              eyebrow="Available now"
              title="Live on the App Store."
              className="mb-12 lg:mb-16"
            />
            <AppGrid apps={live} />
          </Container>
        </Section>
      )}

      {upcoming.length > 0 && (
        <Section className="pt-0 md:pt-0 lg:pt-0">
          <Container>
            <SectionHeading
              eyebrow="In the works"
              title="Coming soon."
              description="Products in development. Open one to see what it will do."
              className="mb-12 lg:mb-16"
            />
            <AppGrid apps={upcoming} badge="Coming soon" />
          </Container>
        </Section>
      )}

      <ContactCta />
    </>
  );
}
