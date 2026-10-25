import { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1200px] px-5 md:px-8 lg:px-10", className)}
      {...props}
    />
  );
}

export function Section({ className, ...props }: ComponentPropsWithoutRef<"section">) {
  return (
    <section
      className={cn("scroll-mt-20 py-[72px] md:py-24 lg:py-[120px]", className)}
      {...props}
    />
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.08em] text-studio-blue">
      {children}
    </p>
  );
}
