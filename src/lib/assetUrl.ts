/**
 * Base path for static assets. Empty for custom domain (pancito.shop) at root.
 * Use for img src and background-image URLs so they resolve correctly.
 */
export function assetUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized;
}
