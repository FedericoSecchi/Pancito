/**
 * Product seed data for Pancito.
 * Replace with CMS or JSON later; keep structure for future subscriptions.
 */

export interface Product {
  id: string;
  name: string;
  description: string;
  price_ars: number;
  /** Optional label e.g. "Próximamente" */
  label?: string;
  /** Path relative to public, e.g. "/assets/productos/pan-masa-madre.png" */
  mediaPath?: string;
  mediaType?: "image" | "video";
}

export const products: Product[] = [
  {
    id: "pan-masa-madre",
    name: "Pan de masa madre",
    description: "Fermentación natural de 24 horas.",
    price_ars: 9000,
    mediaPath: "/assets/productos/pan-masa-madre.png",
    mediaType: "image",
  },
  {
    id: "focaccia",
    name: "Focaccia",
    description: "Aceite de oliva, sal y cocción dorada.",
    price_ars: 6000,
    mediaPath: "/assets/productos/focaccia.png",
    mediaType: "image",
  },
  {
    id: "roll-canela",
    name: "Roll de canela",
    description: "Próximamente en el obrador.",
    price_ars: 2500,
    label: "Próximamente",
    mediaPath: "/assets/video/roll-canela.mp4",
    mediaType: "video",
  },
  {
    id: "compotas",
    name: "Compotas fermentadas",
    description: "Fruta transformada con el mismo respeto por el tiempo.",
    price_ars: 5000,
    mediaPath: "/assets/video/compotas.mp4",
    mediaType: "video",
  },
];
