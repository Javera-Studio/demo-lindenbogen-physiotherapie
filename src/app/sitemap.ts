import type { MetadataRoute } from "next";

// Next.js 16 + `output: "export"`: Metadata-Routen müssen explizit als
// statisch markiert werden.
export const dynamic = "force-static";

const baseUrl = "https://lindenbogen-physiotherapie.example";

const routes = [
  "",
  "/leistungen",
  "/praxis-team",
  "/kontakt",
  "/impressum",
  "/datenschutz",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
