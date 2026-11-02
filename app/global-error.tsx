"use client";

// Replaces the root layout, so it can't rely on the global stylesheet.
export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          padding: "4rem 1.5rem",
          background: "#0b0d11",
          color: "#eceef2",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <h1>Something went wrong</h1>
        <p>That&apos;s on our side. Please try again.</p>
        <button type="button" onClick={reset}>
          Try again
        </button>
      </body>
    </html>
  );
}
