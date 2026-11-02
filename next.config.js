/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== "production";

// Next.js injects inline bootstrap scripts, and the theme script runs inline
// to prevent a flash on load, so script-src needs 'unsafe-inline'.
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' https://plausible.io${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  `connect-src 'self' https://plausible.io${isDev ? " ws:" : ""}`,
  "frame-src https://cal.com https://app.cal.com https://calendly.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

// A noindex header rather than a robots.txt block, because crawlers must be
// able to fetch a page to see the instruction.
const indexingHeaders =
  process.env.SITE_LAUNCHED === "true" ? [] : [{ key: "X-Robots-Tag", value: "noindex, nofollow" }];

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  turbopack: { root: __dirname },
  async headers() {
    return [{ source: "/:path*", headers: [...securityHeaders, ...indexingHeaders] }];
  },
};

module.exports = nextConfig;
