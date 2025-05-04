"use client"

import { useEffect } from "react"

export function useCssOptimization() {
  useEffect(() => {
    // Función para cargar CSS no crítico cuando el usuario comienza a desplazarse
    const loadNonCriticalCss = () => {
      const nonCriticalStyles = document.querySelectorAll('link[data-non-critical="true"]')
      nonCriticalStyles.forEach((link) => {
        // @ts-ignore
        link.media = "all"
      })

      // Eliminar el listener una vez cargados los estilos
      window.removeEventListener("scroll", loadNonCriticalCss)
    }

    // Cargar CSS no crítico después de un tiempo o cuando el usuario comienza a desplazarse
    const timer = setTimeout(loadNonCriticalCss, 2000)
    window.addEventListener("scroll", loadNonCriticalCss)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", loadNonCriticalCss)
    }
  }, [])
}

export default function OptimizeCss() {
  useCssOptimization()
  return null
}
