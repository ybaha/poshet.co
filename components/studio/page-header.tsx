import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./container";

const TITLE_SIZES = {
  /** Short, punchy page titles. */
  title: "text-title",
  /** Long titles such as article headlines. */
  section: "text-section",
} as const;

type PageHeaderProps = {
  eyebrow: string;
  size?: keyof typeof TITLE_SIZES;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
};

/** Eyebrow, page title and lead paragraph for pages that open on the plain canvas. */
export function PageHeader({ eyebrow, size = "title", title, description, className }: PageHeaderProps) {
  return (
    <div className={className}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className={cn("mt-4 font-display font-medium text-studio-navy", TITLE_SIZES[size])}>{title}</h1>
      {description && (
        <p className="mt-6 max-w-xl text-lead text-studio-muted">{description}</p>
      )}
    </div>
  );
}
