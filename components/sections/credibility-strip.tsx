import { capabilities, stack } from "@/content/company";

function Row({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:gap-8">
      <p className="w-28 shrink-0 font-mono text-xs text-subtle">{label}</p>
      <ul className="flex flex-wrap gap-x-7 gap-y-1.5 text-sm text-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function CredibilityStrip() {
  return (
    <section aria-label="Capabilities" className="border-b border-line">
      <div className="site-container space-y-4 py-7">
        <Row label="What we do" items={capabilities} />
        {stack.length > 0 ? <Row label="Built with" items={stack} /> : null}
      </div>
    </section>
  );
}
