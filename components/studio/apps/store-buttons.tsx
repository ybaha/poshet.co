import { PLATFORM_LABELS } from "@/lib/app-presentation";
import type { AppDownloadLink } from "@/lib/types/app";
import { ButtonLink } from "../button-link";

/** Store links for an app; platforms that are not live yet show as a quiet "Coming soon" chip. */
export function StoreButtons({ downloads }: { downloads: readonly AppDownloadLink[] }) {
  // Live stores first so the primary action is always the first button.
  const ordered = [...downloads].sort((a, b) => Number(b.available) - Number(a.available));

  return (
    <>
      {ordered.map((download) =>
        download.available ? (
          <ButtonLink key={download.platform} href={download.url} external variant="light">
            {download.label}
          </ButtonLink>
        ) : (
          <span
            key={download.platform}
            className="inline-flex min-h-12 items-center rounded-full border border-white/25 px-6 text-[15px] leading-none text-white/80"
          >
            {PLATFORM_LABELS[download.platform]} · Coming soon
          </span>
        )
      )}
    </>
  );
}
