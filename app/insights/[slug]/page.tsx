import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHeader } from "@/components/ui/page-header";
import { getInsight, insights } from "@/content/insights";
import { features } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return features.insights ? insights.map((post) => ({ slug: post.slug })) : [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getInsight((await params).slug);
  if (!features.insights || !post) return {};
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/insights/${post.slug}` },
  };
}

export default async function InsightPage({ params }: Props) {
  const post = getInsight((await params).slug);
  if (!features.insights || !post) notFound();

  return (
    <>
      <PageHeader eyebrow={post.publishedAt} title={post.title} lead={post.summary} />
      <article className="site-container py-section">
        <div className="prose-legal max-w-prose">
          {post.body.map((block) =>
            block.startsWith("## ") ? (
              <h2 key={block}>{block.slice(3)}</h2>
            ) : (
              <p key={block}>{block}</p>
            ),
          )}
        </div>
      </article>
      <FinalCta />
    </>
  );
}
