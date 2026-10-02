import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./v2.css";
import "lenis/dist/lenis.css";
import SmoothScroll from "@/components/SmoothScroll";

const bricolage = localFont({
  src: "./fonts/bricolage-grotesque.woff2",
  weight: "400 700",
  variable: "--font-bricolage",
  display: "swap",
});

const geist = localFont({
  src: "./fonts/geist.woff2",
  weight: "400 700",
  variable: "--font-geist",
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
      className={`${bricolage.variable} ${geist.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("kacy-theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}`,
          }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
