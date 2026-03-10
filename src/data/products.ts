/**
 * Product seed data for Pancito.
 * Replace with CMS or JSON later; keep structure for future subscriptions.
 */

export interface Product {
  id: string;
  name: string;
  description: string;
  price_ars: number;
}

export const products: Product[] = [
  {
    id: "pan-masa-madre",
    name: "Pan de masa madre",
    description: "Fermentación natural de 24 horas.",
    price_ars: 9000,
  },
  {
    id: "focaccia",
    name: "Focaccia",
    description: "Aceite de oliva, sal y cocción dorada.",
    price_ars: 6000,
  },
  {
    id: "rolls",
    name: "Rolls",
    description: "Masa suave con especias.",
    price_ars: 2500,
  },
  {
    id: "compotas",
    name: "Compotas fermentadas",
    description: "Fruta transformada con el mismo respeto por el tiempo.",
    price_ars: 5000,
  },
];
