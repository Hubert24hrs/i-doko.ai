import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { caseStudies } from "@/content/case-studies";

export function SelectedWork() {
  return (
    <section className="border-t border-line py-section">
      <div className="site-container">
        <Reveal>
          <SectionHeader eyebrow="Selected work" title="Projects in production" />
        </Reveal>
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {caseStudies.slice(0, 4).map((study) => (
            <li key={study.slug}>
              <Link
                href={`/work/${study.slug}`}
                className="block h-full rounded-lg border border-line bg-surface p-6 transition-colors hover:border-line-strong"
              >
                <p className="font-mono text-xs text-subtle">{study.client}</p>
                <h3 className="mt-3 text-h3">{study.title}</h3>
                <p className="mt-2 text-muted">{study.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
