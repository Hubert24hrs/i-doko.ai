import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="dot-grid">
      <div className="site-container py-section">
        <p className="eyebrow">404</p>
        <h1 className="mt-5 text-h1">That page doesn&apos;t exist</h1>
        <p className="mt-4 max-w-xl text-lead text-muted">
          It may have moved, or the link may be wrong.
        </p>
        <ButtonLink href="/" variant="secondary" className="mt-8">
          Go to the home page
        </ButtonLink>
      </div>
    </div>
  );
}
