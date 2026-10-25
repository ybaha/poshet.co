import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { FOCUS_RING } from "./styles";

const TONES = {
  accent: "font-medium text-studio-blue",
  ink: "text-studio-navy",
} as const;

/** Inline link that underlines on hover. Also used to style text-only buttons. */
export function textLinkClasses(tone: keyof typeof TONES = "accent", className?: string) {
  return cn("underline-offset-4 hover:underline", TONES[tone], FOCUS_RING, className);
}

type TextLinkProps = Omit<ComponentPropsWithoutRef<typeof Link>, "className"> & {
  tone?: keyof typeof TONES;
  className?: string;
};

export function TextLink({ tone, className, ...props }: TextLinkProps) {
  return <Link className={textLinkClasses(tone, className)} {...props} />;
}
