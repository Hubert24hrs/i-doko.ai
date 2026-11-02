import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { ServiceIllustration } from "@/components/sections/service-illustrations";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeader } from "@/components/ui/section-header";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom SaaS, AI agents, AI automation and websites, built by engineers and handed over with the code and documentation.",
  alternates: { canonical: "/services" },
};

const engagements = [
  {
    name: "Fixed-price project",
    detail: "An agreed scope, price and delivery plan. Best when you know what you need built.",
  },
  {
    name: "Monthly retainer",
    detail: "Ongoing support, maintenance and development. Best after launch, or for steady work.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="What we build"
        lead="We lead with SaaS and AI, and every engagement ends with working software you own."
      />

      <div className="site-container py-section">
        <div className="space-y-4">
          {services.map((service) => (
            <Reveal key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="grid items-center gap-8 rounded-lg border border-line bg-surface p-6 transition-colors hover:border-line-strong md:grid-cols-12 md:p-8"
              >
                <div className="md:col-span-7">
                  <h2 className="text-h2">{service.name}</h2>
                  <p className="mt-3 max-w-lg text-muted">{service.summary}</p>
                  <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs text-subtle">
                    {service.builds.map((build) => (
                      <li key={build.title}>{build.title}</li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-5">
                  <ServiceIllustration slug={service.slug} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <section className="border-t border-line py-section">
        <div className="site-container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="Engagement" title="How we work together" />
          </div>
          <div className="lg:col-span-7">
            {engagements.map((engagement) => (
              <div key={engagement.name} className="border-t border-line py-6">
                <h3 className="text-h3">{engagement.name}</h3>
                <p className="mt-1.5 text-muted">{engagement.detail}</p>
              </div>
            ))}
            <p className="border-t border-line pt-6 text-sm text-muted">
              We also consider equity partnerships and white-label work for other agencies. Pricing
              is on request, once we understand the scope.
            </p>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
