import type { Metadata } from "next";
import { StructuredData } from "@/components/structured-data";
import { buildOrganization } from "@/lib/structured-data/organization";
import { buildWebSite } from "@/lib/structured-data/website";
import { homePageMetadata } from "@/lib/seo";
import { Capabilities } from "@/components/studio/capabilities";
import { ContactCta } from "@/components/studio/contact-cta";
import { Faq } from "@/components/studio/faq";
import { Hero } from "@/components/studio/hero";
import { Intro } from "@/components/studio/intro";
import { Process } from "@/components/studio/process";
import { SelectedWork } from "@/components/studio/selected-work";

const HOME_DESCRIPTION =
  "Poshet is an independent digital studio that designs and builds websites and mobile apps. Book a 30-minute intro call to talk through your project.";

export const metadata: Metadata = homePageMetadata({
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
