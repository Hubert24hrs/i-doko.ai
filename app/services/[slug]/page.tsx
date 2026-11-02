import { Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/reveal";
import { FinalCta } from "@/components/sections/final-cta";
import { ServiceIllustration } from "@/components/sections/service-illustrations";
import { ButtonLink } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { getService, services } from "@/content/services";
import { JsonLd, serviceJsonLd } from "@/lib/seo";
import { primaryCta } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <JsonLd data={serviceJsonLd(service)} />
      <PageHeader eyebrow={service.name} title={service.headline} lead={service.summary}>
        <ButtonLink href={primaryCta.href} className="mt-8">
          {primaryCta.label}
        </ButtonLink>
      </PageHeader>

      <section className="py-section">
        <div className="site-container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">What we build</p>
            <div className="mt-6 max-w-sm">
              <ServiceIllustration slug={service.slug} />
            </div>
          </div>
          <ul className="grid gap-x-8 sm:grid-cols-2 lg:col-span-8">
            {service.builds.map((build) => (
              <li key={build.title} className="border-t border-line py-5">
                <h2 className="text-h3">{build.title}</h2>
                <p className="mt-1.5 text-muted">{build.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-line bg-surface py-section">
        <div className="site-container grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">How we approach it</p>
            <ol className="mt-6">
              {service.approach.map((item, index) => (
                <li
                  key={item.title}
                  className="grid grid-cols-[2.5rem_1fr] border-t border-line py-5"
                >
                  <span className="pt-1 font-mono text-xs text-subtle">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-h3">{item.title}</h2>
                    <p className="mt-1.5 text-muted">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">What you receive</p>
            <ul className="mt-6 space-y-3">
              {service.receive.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check
                    className="mt-1 size-4 shrink-0 text-accent-text"
                    strokeWidth={2}
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-section">
        <div className="site-container">
          <p className="eyebrow">Other services</p>
          <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/services/${other.slug}`}
                  className="block h-full rounded-lg border border-line p-5 transition-colors hover:border-line-strong"
                >
                  <span className="font-medium">{other.name}</span>
                  <span className="mt-1 block text-sm text-muted">{other.navBlurb}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
