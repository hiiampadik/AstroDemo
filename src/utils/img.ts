/**
 * Build the URL for an atlas image, honouring Astro's `base`.
 * Accepts either a public path stored by the CMS (`/images/atlas/x.png`)
 * or a bare filename (`x.png`).
 */
export function imgUrl(image: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return image.startsWith('/') ? `${base}${image}` : `${base}/images/atlas/${image}`;
}
