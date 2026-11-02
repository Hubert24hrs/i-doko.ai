import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  lead,
  className,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-h2">{title}</h2>
      {lead ? <p className="mt-4 text-lead text-muted">{lead}</p> : null}
    </div>
  );
}
