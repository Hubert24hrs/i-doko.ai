import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { processSteps } from "@/content/company";

export function ProcessSection() {
  return (
    <section id="process" className="border-t border-line py-section">
      <div className="site-container">
        <Reveal>
          <SectionHeader eyebrow="How we work" title="Five stages, each with something to show" />
        </Reveal>
        <ol className="mt-12 grid gap-8 md:grid-cols-5 md:gap-6">
          {processSteps.map((step, index) => (
            <Reveal
              as="li"
              key={step.name}
              delay={index * 0.06}
              className="relative border-l border-line-strong pl-5 md:border-t md:border-l-0 md:pt-5 md:pl-0"
            >
              <span
                aria-hidden
                className="absolute top-1.5 -left-[3.5px] size-1.5 rounded-full bg-accent md:-top-[3.5px] md:left-0"
              />
              <h3 className="text-h3">{step.name}</h3>
              <p className="mt-2 text-[0.9375rem] leading-snug text-muted">{step.detail}</p>
              <p className="mt-3 font-mono text-xs text-subtle">{step.output}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
