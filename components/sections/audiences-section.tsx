import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { audiences } from "@/content/company";

export function AudiencesSection() {
  return (
    <section className="py-section">
      <div className="site-container">
        <Reveal>
          <SectionHeader eyebrow="Who we build for" title="Different scale, same standard" />
        </Reveal>
        <ul className="mt-12">
          {audiences.map((audience) => (
            <Reveal
              as="li"
              key={audience.name}
              className="grid gap-2 border-t border-line py-6 md:grid-cols-12 md:gap-8"
            >
              <h3 className="text-h3 md:col-span-3">{audience.name}</h3>
              <p className="text-muted md:col-span-4">{audience.summary}</p>
              <p className="md:col-span-5">{audience.offer}</p>
            </Reveal>
          ))}
        </ul>
        <Link
          href="/solutions"
          className="mt-4 inline-block text-sm font-medium text-accent-text hover:underline"
        >
          See solutions by audience
        </Link>
      </div>
    </section>
  );
}
