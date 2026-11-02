import { AgentsSpotlight } from "@/components/sections/agents-spotlight";
import { AudiencesSection } from "@/components/sections/audiences-section";
import { CredibilityStrip } from "@/components/sections/credibility-strip";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { PrinciplesSection } from "@/components/sections/principles-section";
import { ProcessSection } from "@/components/sections/process-section";
import { SelectedWork } from "@/components/sections/selected-work";
import { ServicesBento } from "@/components/sections/services-bento";
import { features } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <ServicesBento />
      <AgentsSpotlight />
      <AudiencesSection />
      <ProcessSection />
      {features.work ? <SelectedWork /> : null}
      <PrinciplesSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
