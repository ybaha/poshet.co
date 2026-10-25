import type { Metadata } from "next";
import { Mail, CalendarDays } from "lucide-react";
import { ButtonLink } from "@/components/studio/button-link";
import { Card } from "@/components/studio/card";
import { Container, Section } from "@/components/studio/container";
import { ContactForm } from "@/components/studio/contact-form";
import { PageHeader } from "@/components/studio/page-header";
import { textLinkClasses } from "@/components/studio/text-link";
import { BOOKING_URL, CONTACT_EMAIL } from "@/data/studio";
import { StructuredData } from "@/components/structured-data";
import { buildContactPage } from "@/lib/structured-data/contact-page";
import { buildBreadcrumbList } from "@/lib/structured-data/breadcrumbs";
import { pageMetadata } from "@/lib/seo";

const CONTACT_DESCRIPTION =
  "Tell us about your website or app idea. Message Poshet or book a 30-minute intro call to talk through goals, scope, and next steps.";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: CONTACT_DESCRIPTION,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <StructuredData
        data={[
          buildContactPage(CONTACT_DESCRIPTION),
          buildBreadcrumbList([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
    <Section className="pt-10 md:pt-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
          <div>
            <PageHeader
              eyebrow="Contact"
              title="Tell us what you&apos;re building."
              description="Send a few details and we will reply with honest thoughts. Prefer to talk? Book a call instead."
            />

            <ul className="mt-10 space-y-5">
              <li className="flex items-center gap-4">
                <Mail aria-hidden="true" className="h-5 w-5 text-studio-blue" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className={textLinkClasses("ink", "text-[17px]")}
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <CalendarDays aria-hidden="true" className="h-5 w-5 text-studio-blue" />
                <span className="text-[17px] text-studio-navy">30-minute intro call</span>
              </li>
            </ul>

            <div className="mt-8">
              <ButtonLink href={BOOKING_URL} external variant="outline">
                Book a call
              </ButtonLink>
            </div>
          </div>

          <Card radius="panel" padding="lg" elevated>
            <ContactForm />
          </Card>
        </div>
      </Container>
    </Section>
    </>
  );
}
