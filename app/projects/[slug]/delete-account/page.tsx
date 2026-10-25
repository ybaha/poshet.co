import React from "react";
import { getAppDisplayName } from "@/lib/app-presentation";
import { NOINDEX_ROBOTS, deleteAccountDescription, pageMetadata } from "@/lib/seo";
import { getAppData, generateStaticParams } from "@/lib/apps";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/studio/apps/legal-page";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export { generateStaticParams };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const appData = getAppData(slug);

  if (!appData) {
    return { title: "Delete account not found", robots: NOINDEX_ROBOTS };
  }

  const appName = getAppDisplayName(appData);

  return pageMetadata({
    title: `${appName} delete account`,
    description: deleteAccountDescription(appName),
    path: `/projects/${slug}/delete-account`,
    noindex: true,
  });
}

const DeleteAccountPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const appData = getAppData(slug);

  if (!appData || !appData.deleteAccount) {
    notFound();
  }

  const { metadata, deleteAccount } = appData;

  return (
    <LegalPage
      appSlug={slug}
      legalData={deleteAccount}
      appName={metadata.name}
      developer={metadata.developer}
    />
  );
};

export default DeleteAccountPage;
