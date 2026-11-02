import type { Config } from "tailwindcss";

// Every value resolves to a token in styles/globals.css.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.ts",
    "./lib/**/*.ts",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        subtle: "var(--subtle)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "accent-ink": "var(--accent-ink)",
        "accent-text": "var(--accent-text)",
        "accent-soft": "var(--accent-soft)",
        danger: "var(--danger)",
        success: "var(--success)",
      },
      fontFamily: {
        display: ["var(--font-general-sans)", "system-ui", "sans-serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        display: ["var(--step-display)", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
        h1: ["var(--step-h1)", { lineHeight: "1.06", letterSpacing: "-0.03em" }],
        h2: ["var(--step-h2)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        h3: ["var(--step-h3)", { lineHeight: "1.25", letterSpacing: "-0.015em" }],
        lead: ["var(--step-lead)", { lineHeight: "1.6" }],
        label: ["0.75rem", { lineHeight: "1.3", letterSpacing: "0.06em" }],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      maxWidth: {
        site: "var(--site-width)",
        prose: "65ch",
      },
      spacing: {
        section: "var(--space-section)",
      },
    },
  },
};

export default config;
