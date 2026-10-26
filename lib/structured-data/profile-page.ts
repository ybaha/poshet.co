import type { Author } from "@/lib/constants";
import { authorSchemaType } from "@/lib/structured-data/author";
import { absoluteUrl, omitEmpty } from "@/lib/structured-data/utils";
import type { JsonLdObject } from "@/lib/structured-data/types";

export type AuthorProfile = Pick<Author, "slug" | "name" | "role" | "bio" | "kind">;

export function buildProfilePage(author: AuthorProfile): JsonLdObject {
  const personUrl = absoluteUrl(`/author/${author.slug}`);

  return omitEmpty({
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: omitEmpty({
      "@type": authorSchemaType(author),
      name: author.name,
      jobTitle: author.kind === "organization" ? undefined : author.role,
      description: author.bio,
      url: personUrl,
    }),
  });
}
