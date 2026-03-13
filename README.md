# Pancito

Sitio web del micro-obrador Pancito: pan de masa madre, fermentación lenta, conservas y pequeñas tandas.

## Stack

- **Next.js** (App Router, static export)
- **TypeScript**
- **Tailwind CSS** v4
- **Framer Motion**

## Desarrollo

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Build y export estático

```bash
npm run build
```

Genera la carpeta `out/` con HTML, CSS y assets listos para hosting estático. Next.js usa `output: "export"` y `images.unoptimized: true` en `next.config.ts`; no hace falta `next export` (incluido en `next build`).

## Despliegue (GitHub Pages)

- El sitio se publica en **https://pancito.shop** (dominio custom; `CNAME` en la raíz).
- En el repo: **Settings → Pages → Build and deployment → Source**: **GitHub Actions**
- Cada push a `main` ejecuta `.github/workflows/deploy.yml`: instala dependencias, ejecuta `npm run build` (export estático a `out/`) y sube `./out` como artefacto a GitHub Pages.
- Los assets en `public/` se sirven desde `/assets` en producción (paths relativos a la raíz).

## Estructura

- `src/app/` — Rutas y layout
- `src/components/` — Componentes reutilizables (Hero, Products, OrderFlow, etc.)
- `src/data/` — Datos y copy: productos (`products.ts`), sitio y WhatsApp (`site.ts`), textos (`copy.ts`)
- `src/lib/` — Lógica (generador de mensaje WhatsApp)

## Configuración

- **WhatsApp:** cambiar `WHATSAPP_NUMBER` en `src/data/site.ts` (formato: 54911xxxxyyyy para Argentina).
- **Productos y precios:** editar `src/data/products.ts`.
- **Textos y copy:** `src/data/copy.ts` y `src/data/site.ts`.
- **Imágenes de marca:** colocar en `public/assets/` y referenciar con `assetUrl("/assets/nombre.png")` para que carguen correctamente en pancito.shop.

## Próximos pasos (no incluidos en esta versión)

- Suscripciones y pagos online
- CMS o panel de administración
- Backend de pedidos
- Captura de email conectada a un servicio
