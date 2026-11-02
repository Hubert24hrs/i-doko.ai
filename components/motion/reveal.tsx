"use client";

import { LazyMotion, m } from "framer-motion";
import type { ReactNode } from "react";

// Loaded after first paint so the animation code never delays the hero.
const loadFeatures = () => import("./motion-features").then((mod) => mod.domAnimation);

// Reduced-motion users and no-JS visitors get the content immediately through
// the [data-reveal] rules in globals.css and the noscript style in the root layout.
export function Reveal({
  as = "div",
  children,
  delay = 0,
  className,
}: {
  as?: "div" | "li";
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const Element = m[as];

  return (
    <LazyMotion features={loadFeatures}>
      <Element
        data-reveal
        className={className}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut", delay }}
      >
        {children}
      </Element>
    </LazyMotion>
  );
}
