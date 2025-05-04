"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import { useMediaQuery } from "@/hooks/use-mobile"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(30,64,175,0.2),transparent_70%)]"></div>
      <div className="container mx-auto px-4 relative z-10 mt-[-120px] md:mt-0">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Ajustamos el padding-top en móvil para evitar solapamiento con el logo */}
          <div
            className={`inline-block px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800/50 text-blue-400 text-xs font-medium mb-4 mt-[calc(4rem+5px)] md:mt-[-50px] ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          >
            Posicionamiento SEO de Alto Rendimiento
          </div>
          <h1
            id="hero-heading"
            className={`text-3xl md:text-6xl font-bold leading-tight md:leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-300 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            Potencia tu visibilidad online con{" "}
            <span className="inline-block bg-clip-text text-transparent animate-gradient-smooth">estrategias SEO</span>{" "}
            de élite
          </h1>
          <p
            className={`text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto ${isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"}`}
          >
            Transformamos tu visibilidad online con técnicas SEO personalizadas que generan tráfico cualificado y
            aumentan tus conversiones.
          </p>
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 ${isVisible ? "animate-fade-in-up animation-delay-300" : "opacity-0"}`}
          >
            <Button
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white border-0 h-12 px-8 rounded-lg"
              onClick={() => scrollToSection("contact")}
              aria-label="Solicitar auditoría SEO gratuita"
            >
              Solicitar Auditoría
              <ChevronRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto border-zinc-700 text-zinc-300 hover:bg-zinc-800 h-12 px-8 rounded-lg"
              onClick={() => scrollToSection("business")}
              aria-label="Ver servicios de SEO"
            >
              Ver Servicios
            </Button>
          </div>
        </div>
      </div>

      {/* Ocultamos el indicador de scroll en dispositivos móviles */}
      <div className="absolute bottom-8 left-0 right-0 hidden md:flex justify-center animate-bounce">
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => scrollToSection("what-is-seo")}
          role="button"
          aria-label="Desplazarse hacia abajo para descubrir más sobre SEO"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              scrollToSection("what-is-seo")
            }
          }}
        >
          <p className="text-xs text-zinc-400 mb-2">Descubre más</p>
          <div className="w-6 h-10 border-2 border-zinc-400 rounded-full flex justify-center pt-1">
            <div className="w-1 h-2 bg-zinc-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
