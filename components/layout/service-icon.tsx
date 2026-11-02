import { Layers, PanelTop, Waypoints, Workflow, type LucideProps } from "lucide-react";
import type { ServiceSlug } from "@/content/services";

const icons = {
  "custom-saas": Layers,
  "ai-agents": Waypoints,
  "ai-automation": Workflow,
  websites: PanelTop,
} satisfies Record<ServiceSlug, unknown>;

export function ServiceIcon({ slug, ...props }: { slug: ServiceSlug } & LucideProps) {
  const Icon = icons[slug];
  return <Icon strokeWidth={1.75} aria-hidden {...props} />;
}
