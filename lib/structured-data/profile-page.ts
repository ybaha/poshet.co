import { absoluteUrl, omitEmpty } from "@/lib/structured-data/utils";
import type { JsonLdObject } from "@/lib/structured-data/types";

export type AuthorProfile = {
  slug: string;
  name: string;
  role: string;
  bio: string;
};

export function buildProfilePage(author: AuthorProfile): JsonLdObject {
  const personUrl = absoluteUrl(`/author/${author.slug}`);

  return omitEmpty({
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: omitEmpty({
      "@type": "Person",
      name: author.name,
      jobTitle: author.role,
      description: author.bio,
      url: personUrl,
    }),
  });
}
