"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface MobileMenuProps {
  links: {
    href: string
    label: string
  }[]
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="text-white"
        onClick={toggleMenu}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white"
            onClick={closeMenu}
            aria-label="Cerrar menú"
          >
            <X className="h-6 w-6" />
          </Button>

          <nav className="flex flex-col items-center gap-8" aria-label="Navegación principal">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xl text-white hover:text-blue-400 transition-colors"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <Button
              className="mt-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white border-0"
              onClick={closeMenu}
            >
              Iniciar sesión ecnix
            </Button>
          </nav>
        </div>
      )}
    </div>
  )
}
