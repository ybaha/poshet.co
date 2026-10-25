import { Metadata } from "next";
import Link from "next/link";
import { AuthorAvatar } from "@/components/studio/blog/author-avatar";
import { CARD_HOVER_CLASSES, cardClasses } from "@/components/studio/card";
import { Container, Section } from "@/components/studio/container";
import { PageHeader } from "@/components/studio/page-header";
import { FOCUS_RING } from "@/components/studio/styles";
import { authors } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Authors - Poshet.co",
  description: "Meet the expert contributors behind Poshet's content",
  alternates: { canonical: "/authors" },
};

export default function AuthorsPage() {
  return (
    <Section className="pt-10 md:pt-16">
      <Container>
        <PageHeader
          eyebrow="Authors"
          title="The people behind the writing."
          description="Developers and designers who write about what they build."
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8">
          {authors.map((author) => (
            <li key={author.slug}>
              <Link
                href={`/author/${author.slug}`}
                className={cn(
                  "group flex h-full items-start gap-5",
                  CARD_HOVER_CLASSES,
                  cardClasses({ elevated: true }),
                  FOCUS_RING
                )}
              >
                <AuthorAvatar name={author.name} image={author.image} className="h-16 w-16 text-lg" />
                <div>
                  <h2 className="font-display text-card font-medium text-studio-navy">{author.name}</h2>
                  <p className="mt-1 text-[15px] font-medium text-studio-blue">{author.role}</p>
                  <p className="mt-3 text-[16px] leading-relaxed text-studio-muted">{author.bio}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
