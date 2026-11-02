import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { primaryCta } from "@/lib/site";

export function FinalCta({
  title = "Tell us what you need built",
  lead = "A consultation is a direct conversation about your project. We'll tell you honestly whether we're the right fit.",
}: {
  title?: string;
  lead?: string;
}) {
  return (
    <section className="dot-grid border-t border-line">
      <div className="site-container py-section">
        <Reveal className="max-w-2xl">
          <h2 className="text-h2">{title}</h2>
          <p className="mt-4 text-lead text-muted">{lead}</p>
          <ButtonLink href={primaryCta.href} className="mt-8">
            {primaryCta.label}
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
