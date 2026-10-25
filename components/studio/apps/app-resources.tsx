import { ButtonLink } from "../button-link";
import { Card } from "../card";
import { Container, Section } from "../container";

type AppResourcesProps = {
  slug: string;
  name: string;
  hasDeleteAccount: boolean;
};

/** Support and legal links every published app is expected to expose. */
export function AppResources({ slug, name, hasDeleteAccount }: AppResourcesProps) {
  const links = [
    { label: "Contact support", href: `/projects/${slug}/contact` },
    { label: "Privacy policy", href: `/projects/${slug}/privacy` },
    { label: "Terms of service", href: `/projects/${slug}/terms` },
    ...(hasDeleteAccount
      ? [{ label: "Delete account", href: `/projects/${slug}/delete-account` }]
      : []),
  ];

  return (
    <Section className="py-12 md:py-16 lg:py-20">
      <Container>
        <Card radius="panel" padding="xl" className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <h2 className="font-display text-card font-medium text-studio-navy">
              Need help with {name}?
            </h2>
            <p className="mt-3 text-[16px] text-studio-muted">
              Reach support, or read how we handle your data.
            </p>
          </div>
          <ul className="flex flex-wrap gap-3">
            {links.map(({ label, href }) => (
              <li key={href}>
                <ButtonLink href={href} variant="outline" arrow={false}>
                  {label}
                </ButtonLink>
              </li>
            ))}
          </ul>
        </Card>
      </Container>
    </Section>
  );
}
