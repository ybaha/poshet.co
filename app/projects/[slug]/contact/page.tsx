import { CalendarDays, Clock } from "lucide-react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SupportForm } from "@/components/studio/apps/support-form";
import { BackLink } from "@/components/studio/back-link";
import { Card } from "@/components/studio/card";
import { Container, Section } from "@/components/studio/container";
import { PageHeader } from "@/components/studio/page-header";
import { FaqSection } from "@/components/studio/faq";
import { NOINDEX_ROBOTS, appSupportDescription, pageMetadata } from "@/lib/seo";
import { getAppData, generateStaticParams } from "@/lib/apps";
import { getAppDisplayName } from "@/lib/app-presentation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export { generateStaticParams };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const appData = getAppData(slug);

  if (!appData) {
    return { title: "Support not found", robots: NOINDEX_ROBOTS };
  }

  const { metadata } = appData;
  const { contact } = appData;

  const appName = getAppDisplayName(appData);

  return pageMetadata({
    title: `${appName} support`,
    description: appSupportDescription(appName, contact.supportDescription),
    path: `/projects/${slug}/contact`,
    noindex: true,
  });
}

export default async function AppSupportPage({ params }: PageProps) {
  const { slug } = await params;
  const appData = getAppData(slug);

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
                <BackLink href={`/projects/${slug}`}>Back to {name}</BackLink>
              </div>
            </div>

            <Card radius="panel" padding="lg" elevated>
              <SupportForm slug={slug} />
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
