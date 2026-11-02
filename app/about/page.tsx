import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHeader } from "@/components/ui/page-header";
import { values } from "@/content/company";

export const metadata: Metadata = {
  title: "About",
  description:
    "i-doko.ai is a Nigerian technology company building software and AI for clients globally.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Local roots, global standard"
        lead="We're a technology company based in Nigeria, building software and AI for clients globally."
      />

      <section className="py-section">
        <div className="site-container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Why we exist</p>
          </div>
          <div className="space-y-5 text-lead lg:col-span-8">
            <p>
              We started because companies struggled to get software built to a high standard. The
              people who needed it most were the least well served.
            </p>
            <p className="text-muted">
              We had the skills to do that work under our own name. We&apos;d also built something
              to solve a problem of our own, and other people wanted the same thing. That was enough
              to start.
            </p>
            <p className="text-muted">
              Today we build SaaS, AI agents, automation, mobile apps and websites. We work the same
              way on every project: agree the scope, build it properly, and hand over everything you
              need to own it.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface py-section">
        <div className="site-container grid gap-10 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Mission</p>
            <p className="mt-4 text-h3">
              Build software and AI that organisations can rely on, and hand over everything they
              need to own it.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="eyebrow">Vision</p>
            <p className="mt-4 text-h3">
              Become the firm companies worldwide call for serious software and AI work.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-section">
        <div className="site-container">
          <p className="eyebrow">Values</p>
          <div className="mt-8 grid gap-x-10 md:grid-cols-2">
            {values.map((value) => (
              <Reveal key={value.name}>
                <div className="border-t border-line py-6">
                  <h2 className="text-h3">{value.name}</h2>
                  <p className="mt-1.5 text-muted">{value.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta title="Talk to the people who'll build it" />
    </>
  );
}
