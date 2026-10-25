import Link from "next/link";
import { cn } from "@/lib/utils";
import { FOCUS_RING } from "./styles";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link
      href="/"
      aria-label="Poshet home"
      className={cn(
        "font-display text-[26px] font-semibold leading-none tracking-[-0.05em]",
        FOCUS_RING,
        tone === "light" ? "text-white" : "text-studio-navy"
      )}
    >
      poshet<span className="text-studio-blue">.</span>
    </Link>
  );
}
