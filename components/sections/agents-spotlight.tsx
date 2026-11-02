import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { agentFlow, agentUseCases } from "@/content/company";
import { cn } from "@/lib/utils";

export function AgentsSpotlight() {
  return (
    <section className="border-y border-line bg-surface py-section">
      <div className="site-container">
        <Reveal>
          <SectionHeader
            eyebrow="AI agents and automation"
            title="How an agent does a job"
            lead="An agent is software with a defined task, limited tools and a person in charge of what matters."
          />
        </Reveal>

        <Reveal className="mt-12">
          <ol className="grid gap-px overflow-hidden rounded-lg md:grid-cols-5">
            {agentFlow.map((stage, index) => {
              const isHandoff = index === agentFlow.length - 1;
              return (
                <li
                  key={stage.name}
                  className={cn("p-5", isHandoff ? "bg-accent-soft" : "bg-surface-2")}
                >
                  <p
                    className={cn(
                      "font-mono text-xs",
                      isHandoff ? "text-accent-text" : "text-subtle",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-base">{stage.name}</h3>
                  <p className="mt-1.5 text-sm leading-snug text-muted">{stage.detail}</p>
                </li>
              );
            })}
          </ol>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h3 className="text-h3">What we can build for you</h3>
            <Link
              href="/services/ai-agents"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent-text hover:underline"
            >
              More on AI agents
              <ArrowRight className="size-4" strokeWidth={1.75} aria-hidden />
            </Link>
          </Reveal>
          <Reveal className="lg:col-span-8">
            <ul>
              {agentUseCases.map((useCase) => (
                <li key={useCase} className="border-t border-line py-3.5 last:border-b">
                  {useCase}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
