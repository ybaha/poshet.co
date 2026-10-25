import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Capabilities } from "@/components/studio/capabilities";
import { ContactCta } from "@/components/studio/contact-cta";
import { Faq } from "@/components/studio/faq";
import { Hero } from "@/components/studio/hero";
import { Intro } from "@/components/studio/intro";
import { Process } from "@/components/studio/process";
import { SelectedWork } from "@/components/studio/selected-work";

export const metadata: Metadata = pageMetadata({
  title: "Poshet | Websites & apps built to move you forward",
  description:
    "Poshet is an independent studio designing and building thoughtful websites and apps. Book a call to talk through your project.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <SelectedWork />
      <Capabilities />
      <Process />
      <Faq />
      <ContactCta />
    </>
  );
}
