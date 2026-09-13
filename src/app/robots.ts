import type { MetadataRoute } from "next";

// Next.js 16 + `output: "export"`: Metadata-Routen müssen explizit als
// statisch markiert werden.
export const dynamic = "force-static";

// Konzeptstudie: Indexierung vollständig ausschließen.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
