import type { AppLegalPage } from "@/lib/types/app";
import { BackLink } from "../back-link";
import { Container, Section } from "../container";
import { PageHeader } from "../page-header";
import { textLinkClasses } from "../text-link";

type LegalPageProps = {
  legalData: AppLegalPage;
  appSlug: string;
  appName: string;
  developer?: string;
};

export function LegalPage({ legalData, appSlug, appName, developer = "Poshet" }: LegalPageProps) {
  const { title, sections, lastUpdated, contactEmail } = legalData;

  const fill = (text: string) =>
    text
      .replace(/{{APP_NAME}}/g, appName)
      .replace(/{{CONTACT_EMAIL}}/g, contactEmail)
      .replace(/{{DEVELOPER}}/g, developer);

  return (
    <Section className="pb-24 pt-10 md:pb-28 md:pt-16 lg:pb-32 lg:pt-16">
      <Container>
        <article className="mx-auto max-w-3xl">
          <BackLink href={`/apps/${appSlug}`}>{appName}</BackLink>

          <PageHeader className="mt-8" eyebrow="Legal" title={title} description={`Effective ${lastUpdated}`} />

          <div className="mt-12 space-y-10 border-t border-studio-line pt-10">
            {sections.map((section, index) => (
              <section key={section.title ?? index}>
                {section.title && (
                  <h2 className="font-display text-card font-medium text-studio-navy">
                    {section.title}
                  </h2>
                )}
                <p className="mt-3 text-[17px] leading-relaxed text-studio-ink/80">
                  {fill(section.content)}
                </p>
                {section.type === "list" && section.items && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-[17px] leading-relaxed text-studio-ink/80 marker:text-studio-blue">
                    {section.items.map((item) => (
                      <li key={item}>{fill(item)}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <p className="mt-12 rounded-[20px] bg-studio-ice px-6 py-5 text-[15px] text-studio-muted">
            Questions about this {title.toLowerCase()}? Email{" "}
            <a
              href={`mailto:${contactEmail}`}
              className={textLinkClasses()}
            >
              {contactEmail}
            </a>
            .
          </p>
        </article>
      </Container>
    </Section>
  );
}
