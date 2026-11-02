import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        background: "#0b0d11",
        color: "#eceef2",
      }}
    >
      <div style={{ display: "flex", fontSize: 36, fontWeight: 600 }}>
        i-doko<span style={{ color: "#f0a63a" }}>.</span>ai
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, fontWeight: 600 }}>
          <span>Our team&apos;s best work.</span>
          <span>Software and AI you own.</span>
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 32, color: "#a2a9b5" }}>
          {site.name}
        </div>
      </div>
    </div>,
    size,
  );
}
