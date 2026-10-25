import { publicImageDataUri } from "./assets";

const ICON_SIZE = 250;
const PHONE_WIDTH = 250;
const PHONE_RATIO = 2796 / 1290;
const PHONE_SHADOW = "0 30px 60px rgba(0, 0, 20, 0.55)";

/** A single app icon, centered on the right-hand side of the panel. */
export async function AppIconArt({ icon }: { icon: string }) {
  return (
    <div style={{ position: "absolute", right: 96, top: 190, display: "flex" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={await publicImageDataUri(icon)}
        width={ICON_SIZE}
        height={ICON_SIZE}
        style={{
          borderRadius: ICON_SIZE * 0.22,
          boxShadow: PHONE_SHADOW,
          border: "2px solid rgba(255,255,255,0.35)",
        }}
      />
    </div>
  );
}

/** Two tilted phone screenshots rising from the bottom edge. */
export async function PhonesArt({ screenshots }: { screenshots: readonly string[] }) {
  const [first, second] = await Promise.all(screenshots.slice(0, 2).map(publicImageDataUri));
  const phone = (src: string, right: number, bottom: number, rotate: number) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      width={PHONE_WIDTH}
      height={Math.round(PHONE_WIDTH * PHONE_RATIO)}
      style={{
        position: "absolute",
        right,
        bottom,
        borderRadius: 34,
        boxShadow: PHONE_SHADOW,
        transform: `rotate(${rotate}deg)`,
      }}
    />
  );

  return (
    <>
      {phone(first, 300, -170, -6)}
      {second && phone(second, 40, -230, 5)}
    </>
  );
}

/** A tidy 2×2 of app icons, for pages that represent several apps. */
export async function IconGridArt({ icons }: { icons: readonly string[] }) {
  const sources = await Promise.all(icons.slice(0, 4).map(publicImageDataUri));
  const size = 150;
  return (
    <div style={{ position: "absolute", right: 90, top: 170, width: size * 2 + 24, display: "flex", flexWrap: "wrap", gap: 24 }}>
      {sources.map((src, index) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={index}
          src={src}
          width={size}
          height={size}
          style={{ borderRadius: size * 0.22, boxShadow: PHONE_SHADOW, border: "2px solid rgba(255,255,255,0.3)" }}
        />
      ))}
    </div>
  );
}
