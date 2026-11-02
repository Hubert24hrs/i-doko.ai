import { ButtonLink } from "@/components/ui/button";
import { primaryCta, site } from "@/lib/site";
import { AgentConsole } from "./agent-console";

export function Hero() {
  return (
    <section className="dot-grid -mt-[var(--nav-height)] border-b border-line pt-[var(--nav-height)]">
      <div className="site-container grid grid-cols-1 items-center gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="lg:col-span-6">
          <p className="eyebrow mb-5">{site.name}</p>
          <h1 className="text-display">
            <span className="block">AI that does real work.</span>
            <span className="block">Software you own.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lead text-muted">
            We design and build custom SaaS, AI agents and automation for corporations and
            organisations, then hand over the code and documentation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
            <ButtonLink href="/#process" variant="secondary">
              See how we work
            </ButtonLink>
          </div>
        </div>
        <div className="lg:col-span-6">
          <AgentConsole />
        </div>
      </div>
    </section>
  );
}
