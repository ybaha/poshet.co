import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

/** Studio type scale from tailwind.config.ts; without this `text-card` is mistaken for a text color. */
const STUDIO_FONT_SIZES = ["display", "title", "section", "statement", "card", "lead"]

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: STUDIO_FONT_SIZES }],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
