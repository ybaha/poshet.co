import React from "react";
import { getAppDisplayName } from "@/lib/app-presentation";
import { NOINDEX_ROBOTS, pageMetadata, termsDescription } from "@/lib/seo";
import { getAppData, generateStaticParams } from "@/lib/apps";
import { notFound } from "next/navigation";
import { StructuredData } from "@/components/structured-data";
import { LegalPage } from "@/components/studio/apps/legal-page";
import { buildAppLegalStructuredData } from "@/lib/structured-data/app-legal-page";
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
    return { title: "Terms of service not found", robots: NOINDEX_ROBOTS };
  }

  const appName = getAppDisplayName(appData);

  return pageMetadata({
    title: `${appName} terms of service`,
    description: termsDescription(appName),
    path: `/projects/${slug}/terms`,
  });
}

const DynamicTermsPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const appData = getAppData(slug);

  if (!appData) {
    notFound();
  }

  const { metadata, terms } = appData;

  return (
    <>
      <StructuredData data={buildAppLegalStructuredData(appData, slug, "terms")} />
      <LegalPage
        appSlug={slug}
        legalData={terms}
        appName={metadata.name}
        developer={metadata.developer}
      />
    </>
  );
};

export default DynamicTermsPage;
