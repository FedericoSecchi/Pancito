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
    description: "Fermentación lenta, corteza marcada, miga viva.",
    price_ars: 9000,
  },
  {
    id: "focaccia",
    name: "Focaccia",
    description: "Aceite de oliva, sal y una cocción dorada y precisa.",
    price_ars: 6000,
  },
  {
    id: "rolls",
    name: "Rolls",
    description: "Masa suave, especias y detalle artesanal.",
    price_ars: 2500,
  },
  {
    id: "compotas",
    name: "Compotas / conservas",
    description: "Fruta trabajada con la misma lógica del tiempo y la transformación.",
    price_ars: 5000,
  },
];
