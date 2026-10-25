import { CalendarDays, Clock } from "lucide-react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SupportForm } from "@/components/studio/apps/support-form";
import { BackLink } from "@/components/studio/back-link";
import { Card } from "@/components/studio/card";
import { Container, Section } from "@/components/studio/container";
import { PageHeader } from "@/components/studio/page-header";
import { FaqSection } from "@/components/studio/faq";
import { getAppData, generateStaticParams } from "@/lib/apps";
import { getAppDisplayName } from "@/lib/app-presentation";

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
      title: "Contact - App Not Found",
      description: "The requested app could not be found.",
    };
  }

  const { metadata, contact } = appData;

  return {
    alternates: { canonical: `/projects/${params.slug}/contact` },
    title: `Contact ${metadata.name} Support`,
    description: `${contact.supportDescription} Get help with ${metadata.name}.`,
    keywords: [metadata.name, "contact", "support", "help", metadata.developer],
    authors: [{ name: metadata.developer }],
    creator: metadata.developer,
    publisher: metadata.developer,
    openGraph: {
      title: `Contact ${metadata.name} Support`,
      description: `${contact.supportDescription} Get help with ${metadata.name}.`,
      type: "website",
      url: `https://poshet.co/projects/${params.slug}/contact`,
      siteName: "Poshet",
    },
    twitter: {
      card: "summary",
      title: `Contact ${metadata.name} Support`,
      description: `Get help with ${metadata.name}`,
      creator: "@poshet",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function AppSupportPage({ params }: PageProps) {
  const appData = getAppData(params.slug);

  if (!appData) {
    notFound();
  }

  const { contact, faq } = appData;
  const name = getAppDisplayName(appData);
  const details = [
    { icon: Clock, text: contact.responseTime },
    { icon: CalendarDays, text: contact.officeHours },
  ];

  return (
    <>
      <Section className="pt-10 md:pt-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
            <div>
              <PageHeader
                eyebrow={`${name} support`}
                title="How can we help?"
                description={contact.supportDescription}
              />

              <ul className="mt-10 space-y-5">
                {details.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-4">
                    <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-studio-blue" />
                    <span className="text-[17px] text-studio-navy">{text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <BackLink href={`/projects/${params.slug}`}>Back to {name}</BackLink>
              </div>
            </div>

            <Card radius="panel" padding="lg" elevated>
              <SupportForm slug={params.slug} />
            </Card>
          </div>
        </Container>
      </Section>

      {faq.length > 0 && (
        <FaqSection
          items={faq}
          title="Quick answers."
          description={`Common questions about ${name}.`}
        />
      )}
    </>
  );
}
