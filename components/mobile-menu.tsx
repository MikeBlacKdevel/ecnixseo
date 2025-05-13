"use client"

import { useState } from "react"
import { Menu, X, ChevronRight } from "lucide-react"
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
  const [ecnixSubmenuOpen, setEcnixSubmenuOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)
  const toggleEcnixSubmenu = () => setEcnixSubmenuOpen(!ecnixSubmenuOpen)

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="text-white"
        onClick={toggleMenu}
        aria-label={isOpen ? "cerrar menú" : "abrir menú"}
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
          aria-label="menú de navegación"
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white"
            onClick={closeMenu}
            aria-label="cerrar menú"
          >
            <X className="h-6 w-6" />
          </Button>

          <nav className="flex flex-col items-center gap-8" aria-label="navegación principal">
            {/* Menú desplegable ecnix */}
            <div className="relative">
              <button
                className="text-xl text-white hover:text-blue-400 transition-colors flex items-center gap-1"
                onClick={toggleEcnixSubmenu}
                aria-expanded={ecnixSubmenuOpen}
                aria-haspopup="true"
              >
                ecnix
                <ChevronRight className={`h-4 w-4 transition-transform ${ecnixSubmenuOpen ? "rotate-90" : ""}`} />
              </button>

              {ecnixSubmenuOpen && (
                <div className="mt-2 bg-zinc-900/95 border border-zinc-800 rounded-lg p-2 w-64">
                  <div className="px-3 py-1 text-xs text-zinc-500">servicios principales</div>
                  <a
                    href="https://analytica.ecnix.com"
                    className="block px-3 py-2 text-sm text-zinc-300 hover:bg-blue-900/20 hover:text-blue-400"
                    onClick={closeMenu}
                  >
                    analytica
                  </a>
                  <a
                    href="https://web.ecnix.com"
                    className="block px-3 py-2 text-sm text-zinc-300 hover:bg-blue-900/20 hover:text-blue-400"
                    onClick={closeMenu}
                  >
                    web creation
                  </a>
                  <a
                    href="https://security.ecnix.com"
                    className="block px-3 py-2 text-sm text-zinc-300 hover:bg-blue-900/20 hover:text-blue-400"
                    onClick={closeMenu}
                  >
                    security
                  </a>
                  <a
                    href="https://seo.ecnix.com"
                    className="block px-3 py-2 text-sm text-zinc-300 hover:bg-blue-900/20 hover:text-blue-400"
                    onClick={closeMenu}
                  >
                    seo
                  </a>
                  <a
                    href="https://design.ecnix.com"
                    className="block px-3 py-2 text-sm text-zinc-300 hover:bg-blue-900/20 hover:text-blue-400"
                    onClick={closeMenu}
                  >
                    design
                  </a>
                  <a
                    href="https://ecnix.ai"
                    className="block px-3 py-2 text-sm text-zinc-300 hover:bg-blue-900/20 hover:text-blue-400"
                    onClick={closeMenu}
                  >
                    ecnix ai
                  </a>
                  <div className="px-3 py-1 text-xs text-zinc-500 mt-2">saas</div>
                  <a
                    href="https://ecnix.dev"
                    className="block px-3 py-2 text-sm text-zinc-300 hover:bg-blue-900/20 hover:text-blue-400"
                    onClick={closeMenu}
                  >
                    developer
                  </a>
                  <a
                    href="https://pages.ecnix.com"
                    className="block px-3 py-2 text-sm text-zinc-300 hover:bg-blue-900/20 hover:text-blue-400"
                    onClick={closeMenu}
                  >
                    landing pages
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 text-sm text-zinc-300 hover:bg-blue-900/20 hover:text-blue-400"
                    onClick={closeMenu}
                  >
                    investigación crítica y real
                  </a>
                </div>
              )}
            </div>

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
              iniciar sesión ecnix
            </Button>
          </nav>
        </div>
      )}
    </div>
  )
}
