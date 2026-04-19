import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "linear-gradient(135deg, #111217 0%, #202332 42%, #6a63ff 100%)",
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
            borderRadius: 120,
            color: "#111111",
            display: "flex",
            fontSize: 176,
            fontWeight: 800,
            height: 360,
            justifyContent: "center",
            letterSpacing: "-0.08em",
            width: 360,
          }}
        >
          cr8t
        </div>
      </div>
    ),
    size,
  );
}
