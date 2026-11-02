import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHeader } from "@/components/ui/page-header";
import { caseStudies } from "@/content/case-studies";
import { features } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects from i-doko ai Technologies.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  if (!features.work) notFound();

  return (
    <>
      <PageHeader eyebrow="Work" title="Selected projects" />
      <div className="site-container py-section">
        <ul className="grid gap-4 md:grid-cols-2">
          {caseStudies.map((study) => (
            <li key={study.slug}>
              <Link
                href={`/work/${study.slug}`}
                className="block h-full rounded-lg border border-line bg-surface p-6 transition-colors hover:border-line-strong"
              >
                <p className="font-mono text-xs text-subtle">
                  {study.client} · {study.service}
                </p>
                <h2 className="mt-3 text-h3">{study.title}</h2>
                <p className="mt-2 text-muted">{study.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <FinalCta />
    </>
  );
}
