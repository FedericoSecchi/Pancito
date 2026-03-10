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
  title: "Pancito | Pan de masa madre y fermentación lenta",
  description:
    "Micro-obrador de masa madre y conservas lentas. Fermentación lenta, pequeñas tandas, precisión y obsesión por el detalle.",
  openGraph: {
    title: "Pancito | Pan de masa madre y fermentación lenta",
    description:
      "Micro-obrador de masa madre y conservas lentas. Fermentación lenta, pequeñas tandas, precisión y obsesión por el detalle.",
    type: "website",
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
