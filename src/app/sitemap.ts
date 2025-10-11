import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fazezero.com";

  const routes = [
    // Main pages
    "",
    "/platform",
    "/solutions",
    "/industries",
    "/developers",
    "/compliance",
    "/contact",

    // Platform pages
    "/platform/digital-assets",
    "/platform/mpc",
    "/platform/payment-platform",
    "/platform/api",
    "/platform/dashboard",
    "/platform/analytics",
    "/platform/audit",
    "/platform/sandbox",
    "/platform/studio",

    // Solution pages (BaaS by Industry)
    "/solutions/central-banks",
    "/solutions/esg",
    "/solutions/financial-services",
    "/solutions/gaming",
    "/solutions/government",
    "/solutions/healthcare",
    "/solutions/insurance",
    "/solutions/media",
    "/solutions/supply-chain",

    // Professional Services pages
    "/services",
    "/services/consulting",
    "/services/implementation",
    "/services/migration",
    "/services/poc",
    "/services/scalability",
    "/services/security",

    // Developer pages
    "/developers/docs",
    "/developers/api",
    "/developers/sdks",
    "/developers/tutorials",
    "/developers/forum",
    "/developers/discord",
    "/developers/events",
    "/developers/blog",
    "/developers/support",
    "/developers/status",
    "/developers/changelog",

    // Resource pages
    "/resources/blog",
    "/resources/case-studies",
    "/resources/whitepapers",
    "/resources/webinars",

    // Company pages
    "/company/about",
    "/company/careers",
    "/company/press",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/developers") ? 0.9 : 0.8,
  }));
}
