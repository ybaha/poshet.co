import fs from "fs/promises";
import path from "path";

const FONT_DIR = path.join(process.cwd(), "app", "fonts", "og");

const FONT_FILES = [
  { weight: 400, file: "MonaSans-Regular.ttf" },
  { weight: 500, file: "MonaSans-Medium.ttf" },
  { weight: 600, file: "MonaSans-SemiBold.ttf" },
] as const;

/** Loads the static Mona Sans weights bundled in app/fonts/og (satori cannot read variable woff2). */
export async function loadOgFonts() {
  return Promise.all(
    FONT_FILES.map(async ({ weight, file }) => {
      const data = await fs.readFile(path.join(FONT_DIR, file));
      return { name: "Mona Sans", weight, style: "normal" as const, data };
    })
  );
}
