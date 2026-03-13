import type { Metadata } from "next";
import { Nunito, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const canonicalBase = "https://pancito.shop";

export const metadata: Metadata = {
  metadataBase: new URL(canonicalBase),
  title: "Pancito — Pan de masa madre",
  description:
    "Pan de masa madre artesanal. Fermentación lenta, ingredientes simples y conservas naturales.",
  keywords: [
    "pan masa madre",
    "pan artesanal",
    "pan fermentación lenta",
    "compotas fermentadas",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pancito — Pan de masa madre",
    description: "Pan artesanal fermentado lentamente.",
    url: canonicalBase,
    type: "website",
    locale: "es_AR",
  },
};

const bakeryStructuredData = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: "Pancito",
  url: canonicalBase,
  image: `${canonicalBase}/assets/pan-masa-madre-recipiente.png`,
  description:
    "Pan artesanal de masa madre y conservas fermentadas elaboradas con fermentación lenta.",
  servesCuisine: "Bakery",
  areaServed: "Argentina",
  sameAs: [] as string[],
  brand: {
    "@type": "Brand",
    name: "Pancito",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${nunito.variable} ${sourceSans.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(bakeryStructuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}
