"use client";

import { RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";
import { agentRuns } from "@/content/agent-runs";
import { cn } from "@/lib/utils";

const STEP_DELAY = 950;

type Decision = "approved" | "rejected" | null;

export function AgentConsole() {
  const [runIndex, setRunIndex] = useState(0);
  const [visible, setVisible] = useState(1);
  const [decision, setDecision] = useState<Decision>(null);

  const run = agentRuns[runIndex] ?? agentRuns[0]!;
  const atGate = visible >= run.steps.length;

  useEffect(() => {
    if (atGate) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(
      () => setVisible((count) => count + 1),
      reduced ? 0 : STEP_DELAY,
    );
    return () => window.clearTimeout(timer);
  }, [atGate, visible]);

  function start(index: number) {
    setRunIndex(index);
    setVisible(1);
    setDecision(null);
  }

  const status =
    decision === "approved"
      ? "Complete"
      : decision === "rejected"
        ? "Returned"
        : atGate
          ? "Awaiting approval"
          : "Running";

  return (
    <div className="overflow-hidden rounded-lg border border-line-strong bg-surface">
      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
        <p className="font-mono text-xs text-subtle">agent run · sample</p>
        <p role="status" className="font-mono text-xs text-accent-text">
          {status}
        </p>
      </div>

      <div
        role="group"
        aria-label="Choose a sample task"
        className="flex gap-1 overflow-x-auto border-b border-line p-2"
      >
        {agentRuns.map((item, index) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={index === runIndex}
            onClick={() => start(index)}
            className={cn(
              "rounded-sm px-3 py-1.5 text-[0.8125rem] whitespace-nowrap transition-colors",
              index === runIndex
                ? "bg-surface-2 font-medium text-ink"
                : "text-muted hover:text-ink",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Every step stays in the layout, so the panel doesn't change height as the run plays. */}
      <ol key={run.id} className="px-4 pt-4 sm:px-5">
        {run.steps.map((step, index) => {
          const shown = index < visible;
          return (
            <li
              key={step.text}
              aria-hidden={!shown}
              className={cn(
                "grid grid-cols-[4.75rem_1fr] gap-x-3 pb-3.5 sm:grid-cols-[5.5rem_1fr]",
                shown ? "step-enter" : "invisible",
              )}
            >
              <span className="pt-0.5 font-mono text-[0.6875rem] tracking-wide text-subtle uppercase">
                {step.kind}
              </span>
              <span className="min-w-0 text-sm leading-snug">
                <span className={step.kind === "Tool" ? "font-mono text-[0.8125rem]" : ""}>
                  {step.text}
                </span>
                {step.result ? (
                  <span className="mt-0.5 block text-[0.8125rem] text-muted">{step.result}</span>
                ) : null}
              </span>
            </li>
          );
        })}
      </ol>

      <div
        aria-hidden={!atGate}
        className={cn("px-4 pb-4 sm:px-5", atGate ? "step-enter" : "invisible")}
      >
        <div className="min-h-[6.5rem] rounded-md border border-accent bg-accent-soft p-3.5">
          {decision ? (
            <>
              <p className="eyebrow">{decision === "approved" ? "Approved" : "Sent back"}</p>
              <p className="mt-2 text-sm leading-snug">
                {decision === "approved" ? run.approved : run.rejected}
              </p>
              <button
                type="button"
                onClick={() => start(runIndex)}
                className="mt-2 inline-flex items-center gap-1.5 text-[0.8125rem] text-muted transition-colors hover:text-ink"
              >
                <RotateCcw className="size-3.5" strokeWidth={1.75} aria-hidden />
                Run it again
              </button>
            </>
          ) : (
            <>
              <p className="eyebrow">Human approval</p>
              <p className="mt-2 text-sm leading-snug">{run.approver}. The agent is waiting.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  tabIndex={atGate ? 0 : -1}
                  onClick={() => setDecision("approved")}
                  className="rounded-sm bg-accent px-3 py-1.5 text-[0.8125rem] font-medium text-accent-ink transition-colors hover:bg-accent-hover"
                >
                  {run.approveLabel}
                </button>
                <button
                  type="button"
                  tabIndex={atGate ? 0 : -1}
                  onClick={() => setDecision("rejected")}
                  className="rounded-sm border border-line-strong px-3 py-1.5 text-[0.8125rem] transition-colors hover:bg-surface-2"
                >
                  Send back
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
