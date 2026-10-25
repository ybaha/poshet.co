import { authors } from "@/lib/constants";
import { renderOgImage } from "@/lib/og/render";
import { authorOgAlt, ogImageMetadata } from "@/lib/og/image-metadata";

export function generateStaticParams() {
  return authors.map((author) => ({ name: author.slug }));
}

export function generateImageMetadata({ params }: { params: { name: string } }) {
  const author = authors.find((candidate) => candidate.slug === params.name);
  const alt = author ? authorOgAlt(author.name, author.role) : "Poshet blog author";
  return ogImageMetadata(alt);
}

export default function Image({ params }: { params: { name: string } }) {
  const author = authors.find((candidate) => candidate.slug === params.name);
  return renderOgImage({
    eyebrow: author?.role ?? "Authors",
    title: author?.name ?? "The people behind the writing.",
    description: author?.bio,
  });
}
