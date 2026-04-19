import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#111217",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            background: "#d8ff37",
            borderRadius: 44,
            color: "#111111",
            display: "flex",
            fontSize: 64,
            fontWeight: 800,
            height: 132,
            justifyContent: "center",
            letterSpacing: "-0.08em",
            width: 132,
          }}
        >
          cr8t
        </div>
      </div>
    ),
    size,
  );
}
