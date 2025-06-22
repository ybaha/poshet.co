import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllApps } from "@/lib/apps";
import { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Apps - Poshet",
  description:
    "Discover our collection of innovative mobile applications designed to enhance your digital experience. From productivity tools to entertainment apps.",
  keywords: [
    "mobile apps",
    "applications",
    "iOS",
    "Android",
    "Poshet",
    "app store",
    "download",
  ],
  authors: [{ name: "Poshet" }],
  creator: "Poshet",
  publisher: "Poshet",
  openGraph: {
    title: "Our Apps - Poshet",
    description:
      "Discover our collection of innovative mobile applications designed to enhance your digital experience.",
    type: "website",
    url: "https://poshet.co/apps",
    siteName: "Poshet",
  },
  twitter: {
    card: "summary",
    title: "Our Apps - Poshet",
    description: "Discover our collection of innovative mobile applications.",
    creator: "@poshet",
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

const AppsPage = () => {
  const apps = getAllApps();

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      {/* Header Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Our Apps</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our collection of innovative mobile applications designed to
          enhance your digital experience. Each app is crafted with care to
          solve real problems and bring value to your daily life.
        </p>
      </section>

      {/* Apps Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {apps.map(({ slug, data }) => {
          const { metadata, hero, features } = data;
          const availableDownloads = data.downloads.filter(
            (download) => download.available
          );
          const totalDownloads = data.downloads.length;

          return (
            <article
              key={slug}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              {/* App Image */}
              <div className="relative h-48 bg-gray-100">
                {hero.imagePath && (
                  <Image
                    src={hero.imagePath}
                    alt={`${metadata.name} Screenshot`}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              {/* App Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{metadata.name}</h2>
                  <p className="text-gray-600 font-medium">
                    {metadata.tagline}
                  </p>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                  {metadata.description}
                </p>

                {/* Features Preview */}
                {features.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm text-gray-800">
                      Key Features:
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>{feature.title}</span>
                        </li>
                      ))}
                      {features.length > 3 && (
                        <li className="text-gray-500 italic">
                          + {features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                {/* Platform Availability */}
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500">Available on:</span>
                  <div className="flex items-center gap-1">
                    {availableDownloads.map((download, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {download.platform === "ios"
                          ? "iOS"
                          : download.platform === "android"
                          ? "Android"
                          : "Web"}
                      </span>
                    ))}
                    {availableDownloads.length === 0 && (
                      <span className="text-gray-500 italic">Coming Soon</span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Link
                    href={`/apps/${slug}`}
                    className={buttonVariants({
                      variant: "default",
                      size: "sm",
                    })}
                  >
                    Learn More
                  </Link>
                  {availableDownloads.length > 0 && (
                    <Link
                      href={`/apps/${slug}#downloads`}
                      className={buttonVariants({
                        variant: "outline",
                        size: "sm",
                      })}
                    >
                      Download
                    </Link>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* Call to Action */}
      <section className="text-center bg-gray-50 rounded-lg p-8 space-y-4">
        <h2 className="text-2xl font-bold">Have an App Idea?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We're always working on new and innovative applications. If you have
          feedback on our current apps or ideas for new ones, we'd love to hear
          from you.
        </p>
        <Link
          href="/contact"
          className={buttonVariants({ variant: "default" })}
        >
          Get in Touch
        </Link>
      </section>

      {/* Stats Section */}
      {apps.length > 0 && (
        <section className="border-t pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">
                {apps.length}
              </div>
              <div className="text-sm text-gray-600">Apps Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">
                {apps.reduce(
                  (total, { data }) =>
                    total + data.downloads.filter((d) => d.available).length,
                  0
                )}
              </div>
              <div className="text-sm text-gray-600">Platforms Supported</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">
                {apps.reduce(
                  (total, { data }) => total + data.features.length,
                  0
                )}
              </div>
              <div className="text-sm text-gray-600">Total Features</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">
                {apps.reduce((total, { data }) => total + data.faq.length, 0)}
              </div>
              <div className="text-sm text-gray-600">FAQ Answered</div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default AppsPage;
