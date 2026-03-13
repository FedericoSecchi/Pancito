/**
 * Centralized Spanish copy for Pancito.
 * Tone: calm, precise, minimal. Avoid generic bakery or marketing language.
 */

export const copy = {
  hero: {
    tagline: "El tiempo transforma los ingredientes.",
    subheadline:
      "Micro-obrador de masa madre y fermentaciones lentas. Trabajamos con procesos vivos, precisión y pequeñas tandas cada semana.",
    ctaPrimary: "Hacer pedido",
    ctaSecondary: "Ver productos",
  },
  concepto: {
    title: "No somos una panadería.",
    paragraph1:
      "Pancito es un pequeño obrador donde trabajamos con fermentaciones lentas y procesos precisos. Creemos que el tiempo es el ingrediente más importante.",
    paragraph2:
      "Ingredientes simples, pequeñas tandas, sin atajos. El resultado es un pan que habla de proceso, no de producción.",
  },
  proceso: {
    title: "El proceso",
    intro:
      "Cada pan nace de una fermentación lenta. Cada conserva respeta el mismo principio.",
    steps: [
      {
        title: "Masa madre",
        text: "Un ecosistema vivo de harina y agua que fermenta lentamente y transforma el pan.",
      },
      {
        title: "Tiempo",
        text: "Cada fermentación toma horas. A veces días. No aceleramos los procesos.",
      },
      {
        title: "Pequeñas tandas",
        text: "Horneamos en cantidades limitadas cada semana.",
      },
      {
        title: "Compotas fermentadas",
        text: "Fruta trabajada con el mismo respeto por el tiempo.",
      },
    ],
  },
  fermentacion: {
    title: "Fermentación",
    intro: "Del grano al pan: harina, agua, masa madre y tiempo.",
    steps: ["Harina", "Agua", "Masa madre", "Fermentación lenta", "24 horas", "Pan"],
  },
  productos: {
    title: "Lo que hacemos",
    intro:
      "Pan de masa madre, focaccia, rolls y compotas. Fermentación lenta y pequeñas tandas.",
  },
  pedidos: {
    title: "Cómo pedir",
    intro:
      "Elegí tus productos, armá tu pedido y confirmalo por WhatsApp. Retirá el sábado.",
    steps: ["Elegí tus productos", "Armá tu pedido", "Confirmalo por WhatsApp", "Retirá el sábado"],
    totalLabel: "Total",
    productsLabel: (n: number) => (n === 1 ? "producto" : "productos"),
    ctaSend: "Enviar pedido",
    ctaEmpty: "Elegí cantidades arriba",
    hintEmpty: "Sumá cantidades y luego abrí WhatsApp para enviar tu pedido.",
  },
  filosofia: {
    title: "Nuestra filosofía",
    paragraph1:
      "Trabajamos con procesos vivos. Fermentaciones naturales, ingredientes simples y atención obsesiva al detalle.",
    paragraph2:
      "Pequeñas tandas, cocción lenta, obrador antes que fábrica. Sin prisas.",
  },
  newsletter: {
    title: "Enterate cuando horneamos",
    intro: "Avisamos cuando sale una nueva tanda.",
    placeholder: "tu email",
    submit: "Anotarme",
    submitting: "Enviando…",
    done: "Listo",
    thankYou: "Gracias. Te avisamos en la próxima horneada.",
  },
  footer: {
    tagline: "Pan de masa madre y fermentaciones lentas.",
    links: [
      { href: "#concepto", label: "Concepto" },
      { href: "#proceso", label: "Proceso" },
      { href: "#productos", label: "Productos" },
      { href: "#pedidos", label: "Pedidos" },
      { href: "#filosofia", label: "Filosofía" },
      { href: "#newsletter", label: "Newsletter" },
    ],
    rights: "Todos los derechos reservados.",
  },
  header: {
    navProductos: "Productos",
    navPedidos: "Pedidos",
    cta: "Hacer pedido",
  },
  whatsapp: {
    messageIntro: "Hola, quiero hacer un pedido de Pancito:",
    messageThanks: "Gracias.",
  },
} as const;
