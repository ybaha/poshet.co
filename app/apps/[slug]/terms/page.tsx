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
      title: "Terms of Service - App Not Found",
      description: "The requested app could not be found.",
    };
  }

  const { metadata, terms } = appData;

  return {
    title: `${metadata.name} Terms of Service`,
    description: `Read the terms of service for ${metadata.name}. Learn about usage rights and responsibilities.`,
    keywords: [
      metadata.name,
      "terms of service",
      "terms",
      "legal",
      metadata.developer,
    ],
    authors: [{ name: metadata.developer }],
    creator: metadata.developer,
    publisher: metadata.developer,
    openGraph: {
      title: `${metadata.name} Terms of Service`,
      description: `Terms of service for ${metadata.name}. Learn about usage rights and responsibilities.`,
      type: "website",
      url: `https://poshet.co/apps/${params.slug}/terms`,
      siteName: "Poshet",
    },
    twitter: {
      card: "summary",
      title: `${metadata.name} Terms of Service`,
      description: `Terms of service for ${metadata.name}`,
      creator: "@poshet",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const DynamicTermsPage = ({ params }: PageProps) => {
  const appData = getAppData(params.slug);

  if (!appData) {
    notFound();
  }

  const { metadata, terms } = appData;

  return (
    <LegalPageTemplate
      legalData={terms}
      appName={metadata.name}
      developer={metadata.developer}
    />
  );
};

export default DynamicTermsPage;
