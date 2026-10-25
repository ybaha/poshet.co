export type JsonLdObject = Record<string, unknown>;

export type BreadcrumbInput = {
  name: string;
  /** Site-relative path, e.g. `/blog`. */
  path: string;
};
