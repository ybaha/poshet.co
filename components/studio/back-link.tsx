import Link from "next/link";
import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { GLASS_PILL_CLASSES } from "./glass-pill";
import { FOCUS_RING, FOCUS_RING_LIGHT } from "./styles";

const TONES = {
  /** On light backgrounds. */
  plain: cn("text-[15px] text-studio-muted hover:text-studio-navy", FOCUS_RING),
  /** On top of a gradient panel. */
  glass: cn(GLASS_PILL_CLASSES, "hover:bg-white/20", FOCUS_RING_LIGHT),
} as const;

type BackLinkProps = {
  href: string;
  children: ReactNode;
  tone?: keyof typeof TONES;
};

export function BackLink({ href, children, tone = "plain" }: BackLinkProps) {
  return (
    <Link
      href={href}
      className={cn("inline-flex w-fit items-center gap-2 transition-colors", TONES[tone])}
    >
      <ArrowLeft aria-hidden="true" className="h-4 w-4" />
      {children}
    </Link>
  );
}
