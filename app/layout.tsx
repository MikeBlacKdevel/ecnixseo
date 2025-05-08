import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import { Raleway } from "next/font/google"

// Configuración correcta de Raleway desde Google Fonts
const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700"],
})

// Metadatos SEO optimizados
export const metadata: Metadata = {
  title: "Ecnix SEO - Agencia de Posicionamiento SEO | Estrategias Avanzadas",
  description:
    "Estrategias SEO avanzadas para empresas y particulares que buscan dominar los resultados de búsqueda. Auditorías SEO, posicionamiento local y optimización web.",
  keywords:
    "SEO, posicionamiento web, marketing digital, auditoría SEO, SEO local, estrategia SEO, optimización web, palabras clave, link building, resultados de búsqueda",
  authors: [{ name: "Ecnix SEO" }],
  creator: "Ecnix SEO",
  publisher: "Ecnix SEO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://seo.ecnix.com",
    languages: {
      "es-ES": "https://seo.ecnix.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://seo.ecnix.com",
    siteName: "Ecnix SEO",
    title: "Ecnix SEO - Agencia de Posicionamiento SEO | Estrategias Avanzadas",
    description:
      "Estrategias SEO avanzadas para empresas y particulares que buscan dominar los resultados de búsqueda. Auditorías SEO, posicionamiento local y optimización web.",
    images: [
      {
        url: "https://seo.ecnix.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ecnix SEO - Agencia de Posicionamiento SEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecnix SEO - Agencia de Posicionamiento SEO | Estrategias Avanzadas",
    description:
      "Estrategias SEO avanzadas para empresas y particulares que buscan dominar los resultados de búsqueda.",
    images: ["https://seo.ecnix.com/images/twitter-image.jpg"],
    creator: "@ecnixseo",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    yandex: "verificacion-yandex",
    bing: "verificacion-bing",
  },
  category: "Marketing Digital",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={raleway.className} suppressHydrationWarning>
      <head>
        {/* Actualizamos la referencia al favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Carga diferida de CSS no crítico */}
        <link rel="preload" href="/css/non-critical.css" as="style" />
        <noscript>
          <link rel="stylesheet" href="/css/non-critical.css" />
        </noscript>
        <Script id="load-non-critical-css" strategy="afterInteractive">
          {`
          (function() {
            var nonCriticalCSS = document.createElement('link');
            nonCriticalCSS.rel = 'stylesheet';
            nonCriticalCSS.href = '/css/non-critical.css';
            nonCriticalCSS.type = 'text/css';
            var firstLink = document.getElementsByTagName('link')[0];
            firstLink.parentNode.insertBefore(nonCriticalCSS, firstLink);
          })();
          `}
        </Script>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>

        {/* Structured Data para Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ecnix SEO",
              url: "https://seo.ecnix.com",
              logo: "https://seo.ecnix.com/logo.png",
              sameAs: [
                "https://www.facebook.com/ecnixseo",
                "https://www.twitter.com/ecnixseo",
                "https://www.linkedin.com/company/ecnixseo",
                "https://www.instagram.com/ecnixseo",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+34-000-000-000",
                contactType: "customer service",
                availableLanguage: ["Spanish"],
              },
            }),
          }}
        />

        {/* Structured Data para LocalBusiness */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Ecnix SEO",
              image: "https://seo.ecnix.com/logo.png",
              priceRange: "€€",
              description:
                "Agencia de posicionamiento SEO especializada en estrategias avanzadas para empresas y particulares.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Calle Principal 123",
                addressLocality: "Madrid",
                addressRegion: "Madrid",
                postalCode: "28001",
                addressCountry: "ES",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "40.4168",
                longitude: "-3.7038",
              },
              telephone: "+34-000-000-000",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
