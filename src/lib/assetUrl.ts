/**
 * Base path for static assets (empty in dev, /Pancito in prod for GitHub Pages).
 * Use for img src and background-image URLs so they resolve correctly.
 */
export function assetUrl(path: string): string {
  const base = process.env.NODE_ENV === "production" ? "/Pancito" : "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
