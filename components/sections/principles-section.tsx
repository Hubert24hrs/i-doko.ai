import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { principles } from "@/content/company";

export function PrinciplesSection() {
  return (
    <section className="border-t border-line py-section">
      <div className="site-container grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal className="lg:sticky lg:top-28">
            <SectionHeader
              eyebrow="Engineering principles"
              title="The standard behind every project"
            />
          </Reveal>
        </div>
        <ol className="lg:col-span-7">
          {principles.map((principle, index) => (
            <Reveal
              as="li"
              key={principle.name}
              className="grid grid-cols-[2.5rem_1fr] border-t border-line py-6"
            >
              <span className="pt-1 font-mono text-xs text-subtle">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-h3">{principle.name}</h3>
                <p className="mt-1.5 text-muted">{principle.detail}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
