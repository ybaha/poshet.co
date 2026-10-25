import React from "react";
import { getAppDisplayName } from "@/lib/app-presentation";
import { NOINDEX_ROBOTS, deleteAccountDescription, pageMetadata } from "@/lib/seo";
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

  const appName = getAppDisplayName(appData);

  return pageMetadata({
    title: `${appName} delete account`,
    description: deleteAccountDescription(appName),
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
