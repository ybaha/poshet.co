import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { BackLink } from "@/components/studio/back-link";
import { AppFeatures } from "@/components/studio/apps/app-features";
import { AppResources } from "@/components/studio/apps/app-resources";
import { AppScreenshots } from "@/components/studio/apps/app-screenshots";
import { StoreButtons } from "@/components/studio/apps/store-buttons";
import { Container, Eyebrow, Section } from "@/components/studio/container";
import { ContactCta } from "@/components/studio/contact-cta";
import { FaqSection } from "@/components/studio/faq";
import { PageHero } from "@/components/studio/page-hero";
import { getAppData, generateStaticParams } from "@/lib/apps";
import { getAppDisplayName, getAppSeed } from "@/lib/app-presentation";
import { paletteFromTint } from "@/lib/shader-gradient/palette";

interface PageProps {
  params: {
    slug: string;
  };
}

export { generateStaticParams };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const appData = getAppData(params.slug);

  if (!appData) {
    return {
      title: "App Not Found",
      description: "The requested app could not be found.",
    };
  }

  const { metadata, hero } = appData;

  return {
    title: `${metadata.name} - ${metadata.tagline}`,
    description: metadata.description,
    keywords: [
      metadata.name,
      metadata.tagline,
      "mobile app",
      "download",
      metadata.developer,
    ],
    authors: [{ name: metadata.developer }],
    creator: metadata.developer,
    publisher: metadata.developer,
    alternates: { canonical: `/apps/${params.slug}` },
    openGraph: {
      title: `${metadata.name} - ${metadata.tagline}`,
      description: hero.description,
      type: "website",
      url: `https://poshet.co/apps/${params.slug}`,
      siteName: "Poshet",
      images: hero.imagePath
        ? [
            {
              url: hero.imagePath,
              width: 1200,
              height: 630,
              alt: `${metadata.name} Screenshot`,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${metadata.name} - ${metadata.tagline}`,
      description: metadata.description,
      creator: "@poshet",
      images: hero.imagePath ? [hero.imagePath] : [],
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
}

const APP_ICON_SIZE = 96;

export default function AppDetailPage({ params }: PageProps) {
  const appData = getAppData(params.slug);

  if (!appData) {
    notFound();
  }

  const { hero, features, premiumFeatures, downloads, faq, deleteAccount } = appData;
  const name = getAppDisplayName(appData);
  const hasScreenshots = Boolean(hero.screenshots?.length);
  // Screenshot-led apps have no standalone icon; their `imagePath` is a screenshot.
  const icon = hasScreenshots ? null : hero.imagePath;

  return (
    <>
      <PageHero
        colors={hero.tint ? paletteFromTint(hero.tint) : undefined}
        seed={getAppSeed(params.slug)}
        startTime={140}
        badge={<BackLink href="/apps" tone="glass">All apps</BackLink>}
        leading={
          icon && (
            <Image
              src={icon}
              alt={`${name} app icon`}
              width={APP_ICON_SIZE}
              height={APP_ICON_SIZE}
              priority
              className="rounded-[22%] shadow-[0_16px_40px_-12px_rgb(0_0_26/0.6)] ring-1 ring-white/25"
            />
          )
        }
        title={name}
        description={hero.subtitle}
        actions={<StoreButtons downloads={downloads} />}
      />

      <Section className="pb-12 pt-12 md:pb-16 md:pt-16 lg:pb-20 lg:pt-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] lg:gap-16">
            <Eyebrow>About {name}</Eyebrow>
            <p className="max-w-3xl font-display text-card font-medium leading-snug text-studio-navy">
              {hero.description}
            </p>
          </div>
        </Container>
      </Section>

      {hero.screenshots && (
        <AppScreenshots name={name} screenshots={hero.screenshots} tint={hero.tint} />
      )}

      <AppFeatures name={name} features={features} premiumFeatures={premiumFeatures} />

      {faq.length > 0 && (
        <FaqSection
          items={faq}
          title="Questions? Answers."
          description={`Common questions about ${name}.`}
        />
      )}

      <AppResources slug={params.slug} name={name} hasDeleteAccount={Boolean(deleteAccount)} />

      <ContactCta />
    </>
  );
}
