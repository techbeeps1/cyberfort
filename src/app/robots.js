import { siteConfig } from "@/constants/site";

/**
 * Generates the robots.txt file dynamically based on site configuration.
 *
 * @returns {import('next').MetadataRoute.Robots}
 */
export default function robots() {
  const baseUrl = siteConfig.url;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
