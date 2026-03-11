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

Genera la carpeta `out/` lista para hosting estático. Para GitHub Pages el build usa `basePath: /Pancito` y se despliega automáticamente al hacer push a `main`.

## Despliegue (GitHub Pages)

- El sitio se publica en **https://federicosecchi.github.io/Pancito**
- En el repo: **Settings → Pages → Build and deployment → Source**: elegir **GitHub Actions**
- Cada push a `main` ejecuta `.github/workflows/deploy-pages.yml`: instala dependencias, hace `npm run build` (export estático a `out/`) y despliega el artefacto a GitHub Pages.
- Los assets en `public/assets` (p. ej. `pattern-bakery.png`) se sirven con el `basePath` correcto en producción.

## Estructura

- `src/app/` — Rutas y layout
- `src/components/` — Componentes reutilizables (Hero, Products, OrderFlow, etc.)
- `src/data/` — Datos y copy: productos (`products.ts`), sitio y WhatsApp (`site.ts`), textos (`copy.ts`)
- `src/lib/` — Lógica (generador de mensaje WhatsApp)

## Configuración

- **WhatsApp:** cambiar `WHATSAPP_NUMBER` en `src/data/site.ts` (formato: 54911xxxxyyyy para Argentina).
- **Productos y precios:** editar `src/data/products.ts`.
- **Textos y copy:** `src/data/copy.ts` y `src/data/site.ts`.
- **Imágenes de marca:** colocar en `public/assets/` y referenciar con `assetUrl("/assets/nombre.png")` para que respeten el `basePath` en GitHub Pages.

## Próximos pasos (no incluidos en esta versión)

- Suscripciones y pagos online
- CMS o panel de administración
- Backend de pedidos
- Captura de email conectada a un servicio
