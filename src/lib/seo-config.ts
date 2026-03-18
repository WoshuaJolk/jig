export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://jig.so";
export const SITE_NAME = "Jig";
export const SITE_TAGLINE = "Split Any Receipt";
export const SITE_DESCRIPTION =
  "Upload a receipt, assign items to people, and share the split. Free receipt splitting tool with AI-powered parsing, tax and tip calculation, and Venmo integration.";

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path}`;
}
