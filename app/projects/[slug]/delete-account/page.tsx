import React from "react";
import { NOINDEX_ROBOTS, pageMetadata } from "@/lib/seo";
import { getAppData, generateStaticParams } from "@/lib/apps";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/studio/apps/legal-page";
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
    return { title: "Delete account not found", robots: NOINDEX_ROBOTS };
  }

  const { metadata } = appData;

  return pageMetadata({
    title: `${metadata.name} - Delete Account & Data`,
    description: `Request deletion of your account and data for ${metadata.name}. Learn how to delete your data and what happens after deletion.`,
    path: `/projects/${params.slug}/delete-account`,
    noindex: true,
  });
}

const DeleteAccountPage = ({ params }: PageProps) => {
  const appData = getAppData(params.slug);

  if (!appData || !appData.deleteAccount) {
    notFound();
  }

  const { metadata, deleteAccount } = appData;

  return (
    <LegalPage
      appSlug={params.slug}
      legalData={deleteAccount}
      appName={metadata.name}
      developer={metadata.developer}
    />
  );
};

export default DeleteAccountPage;
