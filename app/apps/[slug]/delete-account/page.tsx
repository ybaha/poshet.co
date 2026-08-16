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
      title: "Delete Account - App Not Found",
      description: "The requested app could not be found.",
    };
  }

  const { metadata } = appData;

  return {
    title: `${metadata.name} - Delete Account & Data`,
    description: `Request deletion of your account and data for ${metadata.name}. Learn how to delete your data and what happens after deletion.`,
    keywords: [
      metadata.name,
      "delete account",
      "data deletion",
      "remove data",
      metadata.developer,
    ],
    authors: [{ name: metadata.developer }],
    creator: metadata.developer,
    publisher: metadata.developer,
    openGraph: {
      title: `${metadata.name} - Delete Account & Data`,
      description: `Request deletion of your account and data for ${metadata.name}.`,
      type: "website",
      url: `https://poshet.co/apps/${params.slug}/delete-account`,
      siteName: "Poshet",
    },
    twitter: {
      card: "summary",
      title: `${metadata.name} - Delete Account & Data`,
      description: `Delete your account and data for ${metadata.name}`,
      creator: "@poshet",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const DeleteAccountPage = ({ params }: PageProps) => {
  const appData = getAppData(params.slug);

  if (!appData || !appData.deleteAccount) {
    notFound();
  }

  const { metadata, deleteAccount } = appData;

  return (
    <LegalPageTemplate
      legalData={deleteAccount}
      appName={metadata.name}
      developer={metadata.developer}
    />
  );
};

export default DeleteAccountPage;
