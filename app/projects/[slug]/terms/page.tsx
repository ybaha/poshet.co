import React from "react";
import { getAppDisplayName } from "@/lib/app-presentation";
import { NOINDEX_ROBOTS, pageMetadata, termsDescription } from "@/lib/seo";
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
    return { title: "Terms of service not found", robots: NOINDEX_ROBOTS };
  }

  const appName = getAppDisplayName(appData);

  return pageMetadata({
    title: `${appName} terms of service`,
    description: termsDescription(appName),
    path: `/projects/${params.slug}/terms`,
  });
}

const DynamicTermsPage = ({ params }: PageProps) => {
  const appData = getAppData(params.slug);

  if (!appData) {
    notFound();
  }

  const { metadata, terms } = appData;

  return (
    <LegalPage
      appSlug={params.slug}
      legalData={terms}
      appName={metadata.name}
      developer={metadata.developer}
    />
  );
};

export default DynamicTermsPage;
