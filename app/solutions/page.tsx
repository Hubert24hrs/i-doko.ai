import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHeader } from "@/components/ui/page-header";
import { audiences } from "@/content/company";
import { getService } from "@/content/services";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "How i-doko ai Technologies works with corporations, organisations, brands and individuals on software and AI.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="What we do for you depends on where you're starting"
        lead="The engineering standard stays the same. The problem and the engagement change."
      />

      <div className="site-container py-section">
        {audiences.map((audience) => (
          <Reveal key={audience.name}>
            <section
              aria-labelledby={audience.name}
              className="grid gap-8 border-t border-line py-12 first:border-t-0 first:pt-0 lg:grid-cols-12"
            >
              <div className="lg:col-span-5">
                <h2 id={audience.name} className="text-h2">
                  {audience.name}
                </h2>
                <p className="mt-3 text-lead text-muted">{audience.summary}</p>
              </div>
              <div className="lg:col-span-7">
                <p className="eyebrow">What gets in the way</p>
                <ul className="mt-4 space-y-2">
                  {audience.pains.map((pain) => (
                    <li key={pain} className="text-muted">
                      {pain}
                    </li>
                  ))}
                </ul>
                <p className="eyebrow mt-8">What we offer</p>
                <p className="mt-4">{audience.offer}</p>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
                  {audience.services.map((slug) => (
                    <li key={slug}>
                      <Link
                        href={`/services/${slug}`}
                        className="text-sm font-medium text-accent-text hover:underline"
                      >
                        {getService(slug)?.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </Reveal>
        ))}
      </div>

      <FinalCta />
    </>
  );
}
