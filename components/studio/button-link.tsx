import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const VARIANTS = {
  primary: "bg-studio-blue text-white hover:bg-studio-blue-deep focus-visible:outline-studio-blue",
  light: "bg-white text-studio-navy hover:bg-studio-ice focus-visible:outline-white",
  outline:
    "border border-studio-line bg-white text-studio-navy hover:border-studio-blue/50 focus-visible:outline-studio-blue",
  "outline-light":
    "border border-white/40 text-white hover:bg-white/10 focus-visible:outline-white",
} as const;

export type ButtonVariant = keyof typeof VARIANTS;

/** Class list shared by every pill-shaped button in the studio design. */
export function buttonClasses(variant: ButtonVariant = "primary", className?: string) {
  return cn(
    "group/btn inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 text-[15px] font-medium leading-none tracking-[-0.01em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-60",
    VARIANTS[variant],
    className
  );
}

function ButtonContent({ children, arrow }: { children: ReactNode; arrow: boolean }) {
  return (
    <>
      {children}
      {arrow && (
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 motion-reduce:transform-none"
        />
      )}
    </>
  );
}

type SharedButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  /** Show the trailing arrow icon. */
  arrow?: boolean;
  className?: string;
};

type ButtonLinkProps = SharedButtonProps & {
  href: string;
  /** Opens in a new tab with safe rel attributes. */
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  arrow = true,
  className,
}: ButtonLinkProps) {
  const classes = buttonClasses(variant, className);
  const content = <ButtonContent arrow={arrow}>{children}</ButtonContent>;

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {content}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

type ButtonProps = SharedButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedButtonProps>;

/** The `<button>` counterpart of `ButtonLink`, e.g. for form submits. */
export function Button({
  children,
  variant = "primary",
  arrow = false,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={buttonClasses(variant, className)} {...props}>
      <ButtonContent arrow={arrow}>{children}</ButtonContent>
    </button>
  );
}
