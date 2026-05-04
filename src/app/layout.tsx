import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "lenis/dist/lenis.css";
import SmoothScroll from "@/components/SmoothScroll";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bricolage",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

const chillax = localFont({
  src: "../../public/assets/fonts/Chillax-Variable.woff2",
  variable: "--font-chillax",
  weight: "200 700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kacy — L'agent IA pour restaurants, hôtels et salons",
  description:
    "Réservez votre accès anticipé. Kacy gère vos commandes, réservations et FAQ sur WhatsApp 24/7.",
  icons: {
    icon: "/logo_2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${bricolage.variable} ${chillax.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
