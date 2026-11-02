const allowedHosts = ["cal.com", "app.cal.com", "calendly.com"];

// Returns the embed URL only when it points at a host the CSP allows.
export function getBookingUrl() {
  const value = process.env.NEXT_PUBLIC_BOOKING_URL;
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && allowedHosts.includes(url.hostname) ? url.toString() : null;
  } catch {
    return null;
  }
}
