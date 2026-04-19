import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "cr8t",
    short_name: "cr8t",
    description:
      "A progressive web app for makers, artisans, and creatives to promote work, build networks, and manage client conversations.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f1017",
    theme_color: "#0f1017",
    orientation: "portrait",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
