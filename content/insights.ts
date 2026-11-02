export type Insight = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string; // YYYY-MM-DD
  // Each string is one paragraph. A string starting with "## " is a section heading.
  body: string[];
};

// TODO: add at least three posts here, then set features.insights to true in lib/site.ts.
export const insights: Insight[] = [];

export function getInsight(slug: string) {
  return insights.find((post) => post.slug === slug);
}
