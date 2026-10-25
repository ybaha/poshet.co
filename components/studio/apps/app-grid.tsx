import type { AppSlug, AppData } from "@/lib/types/app";
import { toFeaturedWork } from "@/lib/app-presentation";
import { ProjectCard } from "../project-card";

type AppGridProps = {
  apps: ReadonlyArray<{ slug: AppSlug; data: AppData }>;
  /** Status chip shown on every card in this group. */
  badge?: string;
};

export function AppGrid({ apps, badge }: AppGridProps) {
  return (
    <ul className="grid gap-6 md:grid-cols-2 lg:gap-8">
      {apps.map(({ slug, data }) => (
        <li key={slug}>
          <ProjectCard work={toFeaturedWork(slug, data)} badge={badge} />
        </li>
      ))}
    </ul>
  );
}
