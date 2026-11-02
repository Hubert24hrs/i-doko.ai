import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { services, type ServiceSlug } from "@/content/services";
import { cn } from "@/lib/utils";
import { ServiceIllustration } from "./service-illustrations";

const tiles: Record<ServiceSlug, string> = {
  "custom-saas": "md:col-span-2 lg:col-span-8",
  "ai-agents": "lg:col-span-4 lg:row-span-2",
  "ai-automation": "lg:col-span-4",
  websites: "md:col-span-2 lg:col-span-4",
};

export function ServicesBento() {
  return (
    <section className="py-section">
      <div className="site-container">
        <Reveal>
          <SectionHeader
            eyebrow="What we build"
            title="Four services, led by SaaS and AI"
            lead="Each one ends the same way: working software, the code, and the documentation to run it."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          {services.map((service, index) => (
            <Reveal
              key={service.slug}
              delay={index * 0.05}
              className={cn("flex", tiles[service.slug])}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group flex w-full flex-col justify-between gap-8 rounded-lg border border-line bg-surface p-6 transition-colors hover:border-line-strong"
              >
                <div>
                  <h3 className="flex items-center justify-between gap-3 text-h3">
                    {service.name}
                    <ArrowUpRight
                      className="size-5 shrink-0 text-subtle transition-colors group-hover:text-accent-text"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  </h3>
                  <p className="mt-2 max-w-md text-[0.9375rem] text-muted">{service.summary}</p>
                </div>
                <div className={service.slug === "custom-saas" ? "-mb-6" : undefined}>
                  <ServiceIllustration slug={service.slug} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
