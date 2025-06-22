import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Apple, Play } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { getAppData, generateStaticParams } from "@/lib/apps";
import { notFound } from "next/navigation";
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
      title: "App Not Found",
      description: "The requested app could not be found.",
    };
  }

  const { metadata, hero } = appData;

  return {
    title: `${metadata.name} - ${metadata.tagline}`,
    description: metadata.description,
    keywords: [
      metadata.name,
      metadata.tagline,
      "mobile app",
      "download",
      metadata.developer,
    ],
    authors: [{ name: metadata.developer }],
    creator: metadata.developer,
    publisher: metadata.developer,
    openGraph: {
      title: `${metadata.name} - ${metadata.tagline}`,
      description: hero.description,
      type: "website",
      url: `https://poshet.co/apps/${params.slug}`,
      siteName: "Poshet",
      images: hero.imagePath
        ? [
            {
              url: hero.imagePath,
              width: 1200,
              height: 630,
              alt: `${metadata.name} Screenshot`,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${metadata.name} - ${metadata.tagline}`,
      description: metadata.description,
      creator: "@poshet",
      images: hero.imagePath ? [hero.imagePath] : [],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

const DynamicAppPage = ({ params }: PageProps) => {
  const appData = getAppData(params.slug);

  if (!appData) {
    notFound();
  }

  const { metadata, hero, features, downloads, faq } = appData;

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-3xl font-bold mb-4">{hero.title}</h1>
        <p className="text-xl text-gray-600">{hero.subtitle}</p>
      </section>

      {/* Hero Content & Image */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <p className="text-gray-700 text-lg leading-relaxed">
            {hero.description}
          </p>
        </div>
        <div className="relative h-64 bg-gray-100 rounded-lg shadow-lg overflow-hidden">
          {hero.imagePath && (
            <Image
              src={hero.imagePath}
              alt={`${metadata.name} App Screenshot`}
              fill
              className="object-cover"
              priority
            />
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Download Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Get Started</h2>
        <p className="text-gray-700">
          Ready to get started with {metadata.name}? Download the app now and
          start exploring!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-6">
          {downloads.map((download, index) => {
            const Icon = download.platform === "ios" ? Apple : Play;

            if (!download.available) {
              return (
                <button
                  key={index}
                  disabled
                  className={`${buttonVariants({
                    variant: "outline",
                  })} cursor-not-allowed opacity-50`}
                >
                  <Icon />
                  <span>{download.label}</span>
                </button>
              );
            }

            return (
              <Link
                key={index}
                href={download.url}
                target="_blank"
                className={buttonVariants({
                  variant: "default",
                })}
              >
                <Icon />
                <span>{download.label}</span>
              </Link>
            );
          })}
        </div>
        <div className="flex justify-center mt-6">
          <Link
            href={`/apps/${params.slug}/contact`}
            className="text-blue-600 hover:underline"
          >
            Need help?
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      {faq.length > 0 && (
        <section className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faq.map((item, index) => (
              <div key={index}>
                <h3 className="font-bold">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer Section */}
      <section className="border-t pt-8 mt-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Questions?</h2>
            <p className="text-gray-700">
              We&apos;re here to help! Check out our{" "}
              <Link
                href={`/apps/${params.slug}/privacy`}
                className="text-blue-600 hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              or{" "}
              <Link
                href={`/apps/${params.slug}/terms`}
                className="text-blue-600 hover:underline"
              >
                Terms of Service
              </Link>{" "}
              for more information.
            </p>
          </div>
          <Link
            href={`/apps/${params.slug}/contact`}
            className="text-blue-600 hover:underline"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </article>
  );
};

export default DynamicAppPage;
