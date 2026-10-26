import type { Author } from "@/lib/constants";

/** schema.org type for an author; editorial bylines are the organization, not a person. */
export const authorSchemaType = (author: Pick<Author, "kind">) =>
  author.kind === "organization" ? "Organization" : "Person";
