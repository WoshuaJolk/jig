import { getSplit } from "@/lib/store";
import { readFileSync } from "fs";
import { ImageResponse } from "next/og";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "Jig — Split Receipt";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const split = await getSplit(id);
  const title = split ? split.title : "Split a Receipt";

  const fontData = readFileSync(join(process.cwd(), "src/fonts/Receipt.otf"));

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        fontFamily: "Receipt",
      }}
    >
      <div
        style={{
          fontSize: 48,
          color: "#999",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: 20,
        }}
      >
        Split Receipt For
      </div>
      <div
        style={{
          fontSize: 64,
          color: "#1a1a1a",
          textAlign: "center",
          maxWidth: 900,
          lineHeight: 1.2,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: 36,
          color: "#999",
          marginTop: 24,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        With Jig
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Receipt",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
