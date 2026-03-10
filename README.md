# Pancito

Sitio web del micro-obrador Pancito: pan de masa madre, fermentación lenta, conservas y pequeñas tandas.

## Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS** v4
- **Framer Motion**

## Desarrollo

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Estructura

- `src/app/` — Rutas y layout
- `src/components/` — Componentes reutilizables (Hero, Products, OrderFlow, etc.)
- `src/data/` — Datos editables: productos (`products.ts`), sitio y WhatsApp (`site.ts`)
- `src/lib/` — Lógica (generador de mensaje WhatsApp)

## Configuración

- **WhatsApp:** cambiar `WHATSAPP_NUMBER` en `src/data/site.ts` (formato: 54911xxxxyyyy para Argentina).
- **Productos y precios:** editar `src/data/products.ts`.
- **Copy y redes:** `src/data/site.ts`.

## Próximos pasos (no incluidos en esta versión)

- Suscripciones y pagos online
- CMS o panel de administración
- Backend de pedidos
- Captura de email conectada a un servicio
