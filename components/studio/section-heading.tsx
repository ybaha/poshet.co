import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./container";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  /** Optional call to action aligned to the end on wide screens. */
  action?: ReactNode;
  headingId?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  headingId,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        action && "flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12",
        className
      )}
    >
      <div className="max-w-2xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2
          id={headingId}
          className="mt-4 font-display text-section font-medium text-studio-navy"
        >
          {title}
        </h2>
        {description && (
          <p className="mt-5 max-w-xl text-lead text-studio-muted">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
