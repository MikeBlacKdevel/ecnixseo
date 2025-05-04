"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbsProps {
  homeLabel?: string
  className?: string
}

export function Breadcrumbs({ homeLabel = "Inicio", className = "" }: BreadcrumbsProps) {
  const pathname = usePathname()

  // No mostrar breadcrumbs en la página de inicio
  if (pathname === "/") return null

  const pathSegments = pathname.split("/").filter(Boolean)

  // Crear un array de objetos con las rutas y etiquetas
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join("/")}`
    const label = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    return { href, label }
  })

  return (
    <nav aria-label="Breadcrumbs" className={`flex items-center text-sm text-zinc-400 ${className}`}>
      <div className="flex items-center">
        <Link href="/" className="flex items-center hover:text-blue-400 transition-colors">
          <Home className="h-4 w-4 mr-1" />
          <span className="sr-only sm:not-sr-only">{homeLabel}</span>
        </Link>
      </div>

      {breadcrumbs.map((breadcrumb, index) => (
        <div key={breadcrumb.href} className="flex items-center">
          <ChevronRight className="h-4 w-4 mx-2 text-zinc-600" aria-hidden="true" />
          {index === breadcrumbs.length - 1 ? (
            <span aria-current="page" className="font-medium text-zinc-300">
              {breadcrumb.label}
            </span>
          ) : (
            <Link href={breadcrumb.href} className="hover:text-blue-400 transition-colors">
              {breadcrumb.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
