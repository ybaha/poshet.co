import React from "react";
import { getAppData } from "@/lib/apps";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import DynamicContactPageClient from "./DynamicContactPageClient";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const appData = getAppData(params.slug);

  if (!appData) {
    return {
      title: "Contact - App Not Found",
      description: "The requested app could not be found.",
    };
  }

  const { metadata, contact } = appData;

  return {
    title: `Contact ${metadata.name} Support`,
    description: `${contact.supportDescription} Get help with ${metadata.name}.`,
    keywords: [metadata.name, "contact", "support", "help", metadata.developer],
    authors: [{ name: metadata.developer }],
    creator: metadata.developer,
    publisher: metadata.developer,
    openGraph: {
      title: `Contact ${metadata.name} Support`,
      description: `${contact.supportDescription} Get help with ${metadata.name}.`,
      type: "website",
      url: `https://poshet.co/apps/${params.slug}/contact`,
      siteName: "Poshet",
    },
    twitter: {
      card: "summary",
      title: `Contact ${metadata.name} Support`,
      description: `Get help with ${metadata.name}`,
      creator: "@poshet",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const DynamicContactPage = ({ params }: PageProps) => {
  const appData = getAppData(params.slug);

  if (!appData) {
    notFound();
  }

  return <DynamicContactPageClient appData={appData} slug={params.slug} />;
};

export default DynamicContactPage;
