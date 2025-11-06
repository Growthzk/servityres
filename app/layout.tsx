// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// === FUENTES LOCALES (Geist Sans + Geist Mono) ===
const geistSans = localFont({
  src: "./fonts/Geist/Geist[wght].woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  style: "normal",
  display: "swap",
  preload: true,
});

const geistMono = localFont({
  src: "./fonts/GeistMono/GeistMono[wght].woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  style: "normal",
  display: "swap",
  preload: true,
});

// === METADATA SEO + OPENGRAPH ===
export const metadata: Metadata = {
  title: {
    default: "ServiTyres",
    template: "%s | ServiTyres",
  },
  description: "Calidad, confianza y tecnología automotriz.",
  keywords: "llantas, neumáticos, servicio técnico, ServiTyres, Bogotá",
  authors: [{ name: "ServiTyres SAS" }],
  creator: "ServiTyres",
  publisher: "ServiTyres",
  formatDetection: { telephone: false },
  metadataBase: new URL("https://servityres.com"),
  openGraph: {
    title: "ServiTyres",
    description: "Calidad, confianza y tecnología automotriz.",
    url: "https://servityres.com",
    siteName: "ServiTyres",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ServiTyres - Tu taller de confianza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ServiTyres",
    description: "Calidad, confianza y tecnología automotriz.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-de-verificacion",
  },
};

// === LAYOUT PRINCIPAL (EQUIVALE A main.tsx) ===
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* FAVICONS */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* PRELOAD CRÍTICO */}
        <link
          rel="preload"
          href="/fonts/Geist/Geist[wght].woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/GeistMono/GeistMono[wght].woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>

      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          bg-background 
          text-foreground 
          min-h-screen
        `}
      >
        {children}
      </body>
    </html>
  );
}
