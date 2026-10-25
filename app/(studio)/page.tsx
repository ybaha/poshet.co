import type { Metadata } from "next";
import { StructuredData } from "@/components/structured-data";
import { buildOrganization } from "@/lib/structured-data/organization";
import { buildWebSite } from "@/lib/structured-data/website";
import { pageMetadata } from "@/lib/seo";
import { Capabilities } from "@/components/studio/capabilities";
import { ContactCta } from "@/components/studio/contact-cta";
import { Faq } from "@/components/studio/faq";
import { Hero } from "@/components/studio/hero";
import { Intro } from "@/components/studio/intro";
import { Process } from "@/components/studio/process";
import { SelectedWork } from "@/components/studio/selected-work";

const HOME_DESCRIPTION =
  "Poshet is an independent studio designing and building thoughtful websites and apps. Book a call to talk through your project.";

export const metadata: Metadata = pageMetadata({
  title: "Poshet | Websites & apps built to move you forward",
  description: HOME_DESCRIPTION,
  path: "/",
});

export default function Home() {
  return (
    <>
      <StructuredData
        data={[
          buildOrganization({ description: HOME_DESCRIPTION }),
          buildWebSite(),
        ]}
      />
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
