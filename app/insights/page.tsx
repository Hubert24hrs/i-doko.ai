import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/page-header";
import { insights } from "@/content/insights";
import { features } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights",
  description: "Writing from i-doko ai Technologies on software and AI.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  if (!features.insights) notFound();

  return (
    <>
      <PageHeader eyebrow="Insights" title="Notes on building software and AI" />
      <div className="site-container py-section">
        <ul>
          {insights.map((post) => (
            <li key={post.slug} className="border-t border-line py-6">
              <Link href={`/insights/${post.slug}`} className="group block max-w-2xl">
                <time dateTime={post.publishedAt} className="font-mono text-xs text-subtle">
                  {post.publishedAt}
                </time>
                <h2 className="mt-2 text-h3 transition-colors group-hover:text-accent-text">
                  {post.title}
                </h2>
                <p className="mt-1.5 text-muted">{post.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
