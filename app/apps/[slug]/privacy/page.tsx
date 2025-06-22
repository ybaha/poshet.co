import React from "react";
import { getAppData, generateStaticParams } from "@/lib/apps";
import { notFound } from "next/navigation";
import LegalPageTemplate from "@/components/apps/LegalPageTemplate";
import { Metadata } from "next";

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
      title: "Privacy Policy - App Not Found",
      description: "The requested app could not be found.",
    };
  }

  const { metadata, privacy } = appData;

  return {
    title: `${metadata.name} Privacy Policy`,
    description: `Read the privacy policy for ${metadata.name}. Learn how we protect your data and what information we collect.`,
    keywords: [
      metadata.name,
      "privacy policy",
      "data protection",
      "privacy",
      metadata.developer,
    ],
    authors: [{ name: metadata.developer }],
    creator: metadata.developer,
    publisher: metadata.developer,
    openGraph: {
      title: `${metadata.name} Privacy Policy`,
      description: `Privacy policy for ${metadata.name}. Learn how we protect your data.`,
      type: "website",
      url: `https://poshet.co/apps/${params.slug}/privacy`,
      siteName: "Poshet",
    },
    twitter: {
      card: "summary",
      title: `${metadata.name} Privacy Policy`,
      description: `Privacy policy for ${metadata.name}`,
      creator: "@poshet",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const DynamicPrivacyPage = ({ params }: PageProps) => {
  const appData = getAppData(params.slug);

  if (!appData) {
    notFound();
  }

  const { metadata, privacy } = appData;

  return (
    <LegalPageTemplate
      legalData={privacy}
      appName={metadata.name}
      developer={metadata.developer}
    />
  );
};

export default DynamicPrivacyPage;
