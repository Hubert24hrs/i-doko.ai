import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/case-studies";
import { insights } from "@/content/insights";
import { services } from "@/content/services";
import { features, site } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/services",
    ...services.map((service) => `/services/${service.slug}`),
    "/solutions",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    ...(features.work ? ["/work", ...caseStudies.map((study) => `/work/${study.slug}`)] : []),
    ...(features.insights
      ? ["/insights", ...insights.map((post) => `/insights/${post.slug}`)]
      : []),
  ];

  return paths.map((path) => ({ url: absoluteUrl(path, site.url) }));
}
