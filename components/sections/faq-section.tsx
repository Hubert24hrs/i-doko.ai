import { Plus } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { faqs } from "@/content/company";
import { JsonLd, faqJsonLd } from "@/lib/seo";

export function FaqSection() {
  return (
    <section className="border-t border-line py-section">
      <JsonLd data={faqJsonLd(faqs)} />
      <div className="site-container grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <SectionHeader eyebrow="FAQ" title="Questions we get asked" />
        </Reveal>
        <div className="lg:col-span-8">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-t border-line last:border-b">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-medium [&::-webkit-details-marker]:hidden">
                {faq.question}
                <Plus
                  className="size-5 shrink-0 text-subtle transition-transform group-open:rotate-45"
                  strokeWidth={1.75}
                  aria-hidden
                />
              </summary>
              <p className="max-w-prose pb-5 text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
