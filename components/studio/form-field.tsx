import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const CONTROL_CLASSES =
  "mt-2 block w-full rounded-2xl border border-studio-line bg-studio-canvas px-4 py-3.5 text-[16px] text-studio-navy placeholder:text-studio-muted/70 transition-colors focus:border-studio-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-studio-blue/20";

type FieldProps = {
  label: string;
  name: string;
  optional?: boolean;
} & (
  | ({ multiline?: false } & Omit<ComponentPropsWithoutRef<"input">, "name">)
  | ({ multiline: true } & Omit<ComponentPropsWithoutRef<"textarea">, "name">)
);

export function FormField({ label, name, optional, multiline, className, ...rest }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-studio-navy">
        {label}
        {optional && <span className="ml-1 font-normal text-studio-muted">(optional)</span>}
      </label>
      {multiline ? (
        <textarea
          id={name}
          name={name}
          rows={6}
          className={cn(CONTROL_CLASSES, "resize-y", className)}
          {...(rest as ComponentPropsWithoutRef<"textarea">)}
        />
      ) : (
        <input
          id={name}
          name={name}
          className={cn(CONTROL_CLASSES, className)}
          {...(rest as ComponentPropsWithoutRef<"input">)}
        />
      )}
    </div>
  );
}
