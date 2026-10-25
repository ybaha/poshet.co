import "./css/style.css";

import type { Metadata } from "next";
import { Golos_Text } from "next/font/google";
import localFont from "next/font/local";
import { Suspense } from "react";
import { Footer } from "@/components/studio/footer";
import { Header } from "@/components/studio/header";
import { SITE_NAME } from "@/lib/seo";
import Analytics from "./GoogleAnalytics";

const body = Golos_Text({
  subsets: ["latin", "latin-ext"],
  variable: "--font-studio-body",
  display: "swap",
});

const display = localFont({
  src: "./fonts/MonaSans-latin.woff2",
  variable: "--font-studio-display",
  weight: "200 900",
  display: "swap",
});

/** Defaults for any route that does not set its own metadata, such as the 404 page. */
export const metadata: Metadata = {
  metadataBase: new URL("https://poshet.co"),
  title: "Poshet | Websites & apps built to move you forward",
  description:
    "Poshet is an independent studio designing and building thoughtful websites and apps.",
  openGraph: { siteName: SITE_NAME, type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body className="bg-studio-canvas font-sans tracking-tight text-gray-900 antialiased">
        <Suspense>
          <Analytics />
        </Suspense>
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-studio-blue px-5 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col items-center overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          <main id="main" className="w-full grow tracking-[-0.01em]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
