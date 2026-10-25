import { authors } from "@/lib/constants";
import { renderOgImage } from "@/lib/og/render";
import { authorOgAlt, ogImageMetadata } from "@/lib/og/image-metadata";

export function generateStaticParams() {
  return authors.map((author) => ({ name: author.slug }));
}

export async function generateImageMetadata({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const author = authors.find((candidate) => candidate.slug === name);
  const alt = author ? authorOgAlt(author.name, author.role) : "Poshet blog author";
  return ogImageMetadata(alt);
}

export default async function Image({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const author = authors.find((candidate) => candidate.slug === name);
  return renderOgImage({
    eyebrow: author?.role ?? "Authors",
    title: author?.name ?? "The people behind the writing.",
    description: author?.bio,
  });
}
