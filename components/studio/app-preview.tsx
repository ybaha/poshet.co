import Image from "next/image";
import type { WorkPreview } from "@/data/studio";
import { cn } from "@/lib/utils";

const PHONE_FRAME =
  "absolute w-[34%] overflow-hidden rounded-[1.1rem] shadow-[0_24px_48px_-16px_rgb(14_40_93/0.45)] ring-1 ring-studio-navy/10 transition-transform duration-500 motion-reduce:transform-none";

const SCREENSHOT_SIZES = "(min-width: 1024px) 200px, 30vw";

/**
 * Artwork that fills its `relative` parent. Hover motion keys off an ancestor
 * with the `group` class, so wrap it in a link or card that has one.
 */
export function AppPreview({ preview }: { preview: WorkPreview }) {
  if (preview.kind === "icon") {
    return (
      <div className="absolute left-1/2 top-1/2 aspect-square w-[34%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[22%] shadow-[0_24px_48px_-16px_rgb(14_40_93/0.4)] ring-1 ring-studio-navy/10 transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none">
        <Image
          src={preview.icon}
          alt={preview.alt}
          fill
          sizes={SCREENSHOT_SIZES}
          className="object-cover"
        />
      </div>
    );
  }

  if (preview.kind === "cover") {
    return (
      <div className="absolute inset-x-[5%] bottom-0 aspect-video overflow-hidden rounded-t-xl shadow-[0_24px_48px_-16px_rgb(14_40_93/0.45)] ring-1 ring-studio-navy/10 transition-transform duration-500 group-hover:-translate-y-2 motion-reduce:transform-none">
        <Image src={preview.src} alt={preview.alt} fill sizes="(min-width: 1024px) 480px, 80vw" />
      </div>
    );
  }

  const [primary, secondary] = preview.images;
  return (
    <>
      <div className={cn(PHONE_FRAME, "left-[15%] top-[10%] -rotate-[5deg] group-hover:-translate-y-2")}>
        <Image src={primary.src} alt={primary.alt} width={1290} height={2796} sizes={SCREENSHOT_SIZES} />
      </div>
      {secondary && (
        <div className={cn(PHONE_FRAME, "left-[50%] top-[22%] rotate-[4deg] group-hover:translate-y-1")}>
          <Image src={secondary.src} alt={secondary.alt} width={1290} height={2796} sizes={SCREENSHOT_SIZES} />
        </div>
      )}
    </>
  );
}
