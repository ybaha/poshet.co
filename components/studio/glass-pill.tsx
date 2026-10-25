import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

/** Frosted chip for text that sits on top of the gradient panels. */
export const GLASS_PILL_CLASSES =
  "inline-flex w-fit items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md";

export function GlassPill({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return <p className={cn(GLASS_PILL_CLASSES, className)} {...props} />;
}
