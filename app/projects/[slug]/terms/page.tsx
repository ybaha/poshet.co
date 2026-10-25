import React from "react";
import { pageMetadata } from "@/lib/seo";
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
    return { title: "Terms of service not found", robots: { index: false } };
  }

  const { metadata } = appData;

  return pageMetadata({
    title: `${metadata.name} Terms of Service`,
    description: `Read the terms of service for ${metadata.name}. Learn about usage rights and responsibilities.`,
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
