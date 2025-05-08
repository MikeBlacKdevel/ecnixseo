"use client"

import { usePathname } from "next/navigation"
import Script from "next/script"

interface SEOHeadProps {
  title?: string
  description?: string
  type?: "website" | "article"
  imageUrl?: string
  publishedAt?: string
  updatedAt?: string
  authorName?: string
  section?: string
}

export function SEOHead({
  title = "ecnix seo - agencia de posicionamiento seo",
  description = "Estrategias SEO avanzadas para empresas y particulares que buscan dominar los resultados de búsqueda.",
  type = "website",
  imageUrl = "https://seo.ecnix.com/images/og-image.jpg",
  publishedAt,
  updatedAt,
  authorName,
  section,
}: SEOHeadProps) {
  const pathname = usePathname()
  const baseUrl = "https://seo.ecnix.com"
  const currentUrl = `${baseUrl}${pathname}`

  // Determinar el tipo de página para Schema.org
  const getSchemaType = () => {
    if (pathname === "/") {
      return {
        "@type": "WebPage",
        "@id": currentUrl,
        url: currentUrl,
        name: title,
        description: description,
        isPartOf: { "@id": `${baseUrl}/#website` },
      }
    } else if (pathname.includes("/blog/")) {
      return {
        "@type": "BlogPosting",
        headline: title,
        description: description,
        image: imageUrl,
        datePublished: publishedAt,
        dateModified: updatedAt || publishedAt,
        author: {
          "@type": "Person",
          name: authorName || "ecnix SEO",
        },
        publisher: {
          "@type": "Organization",
          name: "ecnix SEO",
          logo: {
            "@type": "ImageObject",
            url: `${baseUrl}/logo.png`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": currentUrl,
        },
        articleSection: section || "SEO",
      }
    } else {
      return {
        "@type": "WebPage",
        "@id": currentUrl,
        url: currentUrl,
        name: title,
        description: description,
        isPartOf: { "@id": `${baseUrl}/#website` },
      }
    }
  }

  const schemaData = {
    "@context": "https://schema.org",
    ...getSchemaType(),
  }

  return (
    <>
      <Script
        id="schema-script"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Breadcrumbs Schema */}
      {pathname !== "/" && (
        <Script
          id="breadcrumbs-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Inicio",
                  item: baseUrl,
                },
                ...pathname
                  .split("/")
                  .filter(Boolean)
                  .map((segment, index) => {
                    const href = `${baseUrl}/${pathname
                      .split("/")
                      .filter(Boolean)
                      .slice(0, index + 1)
                      .join("/")}`
                    const label = segment
                      .split("-")
                      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(" ")

                    return {
                      "@type": "ListItem",
                      position: index + 2,
                      name: label,
                      item: href,
                    }
                  }),
              ],
            }),
          }}
        />
      )}
    </>
  )
}
