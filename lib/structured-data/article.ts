import type { BlogPost } from "@/lib/blog";
import { authors } from "@/lib/constants";
import { organizationReference } from "@/lib/structured-data/organization";
import { absoluteUrl, omitEmpty, toIsoDateTime } from "@/lib/structured-data/utils";
import type { JsonLdObject } from "@/lib/structured-data/types";

function buildAuthorPerson(author: BlogPost["author"]): JsonLdObject {
  const known = authors.find((entry) => entry.slug === author.slug);
  const person: JsonLdObject = {
    "@type": "Person",
    name: author.name,
  };

  if (known) {
    person.url = absoluteUrl(`/author/${known.slug}`);
  }

  return person;
}

function postImageUrl(post: BlogPost): string | undefined {
  if (post.image) {
    return absoluteUrl(post.image);
  }
  return absoluteUrl(`/blog/${post.slug}/opengraph-image`);
}

export function buildBlogPosting(post: BlogPost): JsonLdObject {
  const canonical = absoluteUrl(`/blog/${post.slug}`);
  const published = toIsoDateTime(post.date);
  const modified = post.modified ? toIsoDateTime(post.modified) : published;

  return omitEmpty({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: published,
    dateModified: modified,
    author: buildAuthorPerson(post.author),
    publisher: organizationReference(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    image: postImageUrl(post),
  });
}
