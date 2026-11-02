import { Check, Clock } from "lucide-react";
import type { ServiceSlug } from "@/content/services";

// Small interface sketches built from tokens. Decorative, with no invented data.

function SaasIllustration() {
  return (
    <div
      aria-hidden
      className="flex h-44 overflow-hidden rounded-t-md border border-b-0 border-line bg-bg"
    >
      <div className="w-24 shrink-0 space-y-2.5 border-r border-line p-3">
        <div className="h-2 w-10 rounded-sm bg-accent" />
        <div className="h-2 w-full rounded-sm bg-surface-2" />
        <div className="h-2 w-4/5 rounded-sm bg-surface-2" />
        <div className="h-2 w-full rounded-sm bg-surface-2" />
      </div>
      <div className="min-w-0 flex-1 p-3">
        <div className="flex h-20 items-end gap-1.5">
          {[38, 52, 44, 66, 58, 74, 62, 88, 70, 96, 84, 100].map((height, index) => (
            <div
              key={index}
              className={
                index === 9 ? "flex-1 rounded-t-sm bg-accent" : "flex-1 rounded-t-sm bg-surface-2"
              }
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <div className="mt-3 space-y-2 border-t border-line pt-3">
          <div className="h-2 w-full rounded-sm bg-surface-2" />
          <div className="h-2 w-5/6 rounded-sm bg-surface-2" />
          <div className="h-2 w-3/4 rounded-sm bg-surface-2" />
        </div>
      </div>
    </div>
  );
}

function AgentsIllustration() {
  const steps = ["Read the request", "Check the records", "Prepare the action"];
  return (
    <div aria-hidden className="space-y-2 font-mono text-xs">
      {steps.map((step) => (
        <div
          key={step}
          className="flex items-center gap-2 rounded-sm border border-line bg-bg p-2.5 text-muted"
        >
          <Check className="size-3.5 shrink-0 text-success" strokeWidth={2} />
          {step}
        </div>
      ))}
      <div className="flex items-center gap-2 rounded-sm border border-accent bg-accent-soft p-2.5 text-accent-text">
        <Clock className="size-3.5 shrink-0" strokeWidth={2} />
        Waiting for approval
      </div>
    </div>
  );
}

function AutomationIllustration() {
  return (
    <svg aria-hidden viewBox="0 0 280 72" fill="none" className="h-auto w-full">
      <path d="M60 36h46M174 36h46" stroke="var(--line-strong)" strokeWidth="1.5" />
      <circle cx="83" cy="36" r="3" fill="var(--accent)" />
      <circle cx="197" cy="36" r="3" fill="var(--accent)" />
      {[0, 106, 220].map((x, index) => (
        <rect
          key={x}
          x={x + 0.75}
          y="12.75"
          width={index === 1 ? 67.5 : 58.5}
          height="46.5"
          rx="6"
          fill="var(--bg)"
          stroke={index === 1 ? "var(--accent)" : "var(--line-strong)"}
          strokeWidth="1.5"
        />
      ))}
      <path
        d="M14 30h32M14 42h22M120 30h40M120 42h28M234 30h32M234 42h20"
        stroke="var(--line-strong)"
        strokeWidth="3"
      />
    </svg>
  );
}

function WebsiteIllustration() {
  return (
    <div aria-hidden className="rounded-md border border-line bg-bg p-3">
      <div className="flex items-center justify-between">
        <div className="h-2 w-8 rounded-sm bg-accent" />
        <div className="flex gap-1.5">
          <div className="h-1.5 w-5 rounded-sm bg-surface-2" />
          <div className="h-1.5 w-5 rounded-sm bg-surface-2" />
          <div className="h-1.5 w-5 rounded-sm bg-surface-2" />
        </div>
      </div>
      <div className="mt-4 h-3 w-3/4 rounded-sm bg-surface-2" />
      <div className="mt-2 h-3 w-1/2 rounded-sm bg-surface-2" />
      <div className="mt-3 h-1.5 w-2/3 rounded-sm bg-surface-2" />
    </div>
  );
}

export function ServiceIllustration({ slug }: { slug: ServiceSlug }) {
  switch (slug) {
    case "custom-saas":
      return <SaasIllustration />;
    case "ai-agents":
      return <AgentsIllustration />;
    case "ai-automation":
      return <AutomationIllustration />;
    case "websites":
      return <WebsiteIllustration />;
  }
}
