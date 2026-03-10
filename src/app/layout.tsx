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

export const metadata: Metadata = {
  title: "Pancito | Fermentaciones lentas",
  description:
    "Micro-obrador de masa madre y fermentaciones lentas. Pequeñas tandas cada semana.",
  openGraph: {
    title: "Pancito | Fermentaciones lentas",
    description:
      "Micro-obrador de masa madre y fermentaciones lentas. Pequeñas tandas cada semana.",
    type: "website",
    locale: "es_AR",
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
        {children}
      </body>
    </html>
  );
}
