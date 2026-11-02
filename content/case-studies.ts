export type CaseStudy = {
  slug: string;
  title: string;
  client: string; // Use a description such as "A logistics company" if the name can't be public.
  summary: string;
  service: string;
  link?: string;
  challenge: string;
  solution: string;
  // Verified results only. Leave empty rather than estimating.
  outcomes: string[];
};

// TODO: add real projects here, then set features.work to true in lib/site.ts.
export const caseStudies: CaseStudy[] = [];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
