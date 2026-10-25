import "./css/style.css";

import { Golos_Text } from "next/font/google";
import localFont from "next/font/local";
import { Suspense } from "react";
import { Footer } from "@/components/studio/footer";
import { Header } from "@/components/studio/header";
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

export const metadata = {
  metadataBase: new URL("https://poshet.co"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/images/poshet-black-transparent.png",
  },
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
