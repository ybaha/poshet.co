import React from "react";
import { getAppDisplayName } from "@/lib/app-presentation";
import { NOINDEX_ROBOTS, pageMetadata, privacyPolicyDescription } from "@/lib/seo";
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
    return { title: "Privacy policy not found", robots: NOINDEX_ROBOTS };
  }

  const appName = getAppDisplayName(appData);

  return pageMetadata({
    title: `${appName} privacy policy`,
    description: privacyPolicyDescription(appName),
    path: `/projects/${params.slug}/privacy`,
  });
}

const DynamicPrivacyPage = ({ params }: PageProps) => {
  const appData = getAppData(params.slug);

  if (!appData) {
    notFound();
  }

  const { metadata, privacy } = appData;

  return (
    <LegalPage
      appSlug={params.slug}
      legalData={privacy}
      appName={metadata.name}
      developer={metadata.developer}
    />
  );
};

export default DynamicPrivacyPage;
