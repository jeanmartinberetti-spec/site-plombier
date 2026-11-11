import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `Plombier à ${site.city}, ${site.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Image affichée quand on partage le site (WhatsApp, Facebook, SMS…).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#1D2125",
          color: "#FFFFFF",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", right: 0, top: 120, width: 420, height: 28, background: "#8C949B" }} />
        <div style={{ position: "absolute", right: 392, top: 120, width: 28, height: 510, background: "#8C949B" }} />
        <div style={{ fontSize: 34, color: "#9CC6D2" }}>{site.name}</div>
        <div style={{ fontSize: 76, fontWeight: 700, marginTop: 16, maxWidth: 700, lineHeight: 1.05 }}>
          {`Plombier à ${site.city}`}
        </div>
        <div style={{ fontSize: 34, marginTop: 28, color: "#B9BEC3" }}>Fuite, débouchage, chauffe-eau</div>
        <div style={{ fontSize: 40, marginTop: 40, fontWeight: 700 }}>{site.phone}</div>
      </div>
    ),
    size,
  );
}
