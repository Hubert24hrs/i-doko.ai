"use client";

import { Button } from "@/components/ui/button";

export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="dot-grid">
      <div className="site-container py-section">
        <p className="eyebrow">Error</p>
        <h1 className="mt-5 text-h1">Something went wrong</h1>
        <p className="mt-4 max-w-xl text-lead text-muted">
          That&apos;s on our side. Please try again.
        </p>
        <Button variant="secondary" onClick={reset} className="mt-8">
          Try again
        </Button>
      </div>
    </div>
  );
}
