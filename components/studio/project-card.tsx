import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { FeaturedWork } from "@/data/studio";
import { AppPreview } from "./app-preview";
import { CARD_HOVER_CLASSES, CardMedia, cardClasses } from "./card";
import { FOCUS_RING } from "./styles";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  work: FeaturedWork;
  /** Short status shown over the artwork, e.g. "Coming soon". */
  badge?: string;
};

export function ProjectCard({ work, badge }: ProjectCardProps) {
  return (
    <Link
      href={work.href}
      className={cn(
        "group block p-2",
        CARD_HOVER_CLASSES,
        cardClasses({ elevated: true, padding: "none" }),
        FOCUS_RING
      )}
    >
      <CardMedia style={{ background: work.preview.background }}>
        <AppPreview preview={work.preview} />
        {badge && (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-studio-navy shadow-sm backdrop-blur">
            {badge}
          </span>
        )}
      </CardMedia>
      <div className="flex items-start justify-between gap-4 px-4 pb-4 pt-5 md:px-5">
        <div>
          <h3 className="font-display text-card font-medium text-studio-navy">
            {work.title}
          </h3>
          <p className="mt-1 text-[15px] text-studio-muted">{work.category}</p>
        </div>
        <span
          aria-hidden="true"
          className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-studio-ice text-studio-blue transition-colors duration-200 group-hover:bg-studio-blue group-hover:text-white"
        >
          <ArrowUpRight className="h-[18px] w-[18px]" />
        </span>
      </div>
    </Link>
  );
}
