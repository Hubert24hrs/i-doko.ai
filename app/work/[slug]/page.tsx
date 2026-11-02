import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHeader } from "@/components/ui/page-header";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { features } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return features.work ? caseStudies.map((study) => ({ slug: study.slug })) : [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  if (!features.work || !study) return {};
  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: `/work/${study.slug}` },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const study = getCaseStudy((await params).slug);
  if (!features.work || !study) notFound();

  return (
    <>
      <PageHeader eyebrow={study.service} title={study.title} lead={study.summary}>
        <p className="mt-6 font-mono text-xs text-subtle">{study.client}</p>
      </PageHeader>
      <article className="site-container py-section">
        <div className="max-w-prose space-y-10">
          <section>
            <h2 className="text-h3">The challenge</h2>
            <p className="mt-3 text-muted">{study.challenge}</p>
          </section>
          <section>
            <h2 className="text-h3">What we built</h2>
            <p className="mt-3 text-muted">{study.solution}</p>
          </section>
          {study.outcomes.length > 0 ? (
            <section>
              <h2 className="text-h3">Outcome</h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted">
                {study.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </section>
          ) : null}
          {study.link ? (
            <a
              href={study.link}
              rel="noreferrer"
              className="inline-block font-medium text-accent-text hover:underline"
            >
              View the project
            </a>
          ) : null}
        </div>
      </article>
      <FinalCta />
    </>
  );
}
