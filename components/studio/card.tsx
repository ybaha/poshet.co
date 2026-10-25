import { ComponentPropsWithoutRef, CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

const TONES = {
  white: "border border-studio-line bg-white",
  canvas: "border border-studio-line bg-studio-canvas",
  ice: "bg-studio-ice",
} as const;

const RADII = {
  card: "rounded-[28px] lg:rounded-card",
  panel: "rounded-[28px] lg:rounded-panel",
} as const;

const PADDINGS = {
  none: "",
  sm: "p-6 md:p-8",
  md: "p-7 lg:p-8",
  lg: "p-6 md:p-10",
  xl: "p-7 md:p-10 lg:p-12",
} as const;

type CardStyle = {
  tone?: keyof typeof TONES;
  radius?: keyof typeof RADII;
  padding?: keyof typeof PADDINGS;
  /** Soft drop shadow, for cards that sit on a plain background. */
  elevated?: boolean;
};

/** Class list for the rounded surfaces used across the studio design. */
export function cardClasses({
  tone = "white",
  radius = "card",
  padding = "md",
  elevated = false,
}: CardStyle = {}) {
  return cn(TONES[tone], RADII[radius], PADDINGS[padding], elevated && "shadow-card");
}

type CardProps<T extends ElementType> = CardStyle & {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, keyof CardStyle | "as">;

export function Card<T extends ElementType = "div">({
  as,
  tone,
  radius,
  padding,
  elevated,
  className,
  ...props
}: CardProps<T> & { className?: string }) {
  const Component: ElementType = as ?? "div";
  return (
    <Component
      className={cn(cardClasses({ tone, radius, padding, elevated }), className)}
      {...props}
    />
  );
}

/** Lift-on-hover behavior for cards that are links. Pair with `group` on the same element. */
export const CARD_HOVER_CLASSES =
  "transition duration-300 hover:-translate-y-1 hover:shadow-card-hover motion-reduce:transform-none";

const MEDIA_ASPECTS = { "4/3": "aspect-[4/3]", "16/10": "aspect-[16/10]" } as const;

type CardMediaProps = {
  aspect?: keyof typeof MEDIA_ASPECTS;
  style?: CSSProperties;
  className?: string;
  children: ReactNode;
};

/** Inset artwork area inside a card with `padding="none"` plus a small outer padding. */
export function CardMedia({ aspect = "4/3", style, className, children }: CardMediaProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[22px] lg:rounded-[26px]",
        MEDIA_ASPECTS[aspect],
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}
