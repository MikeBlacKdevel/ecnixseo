"use client"

import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)

    // Establecer el valor inicial
    setMatches(media.matches)

    // Definir callback para actualizar el estado
    const listener = () => {
      setMatches(media.matches)
    }

    // Escuchar cambios en el media query
    media.addEventListener("change", listener)

    // Limpiar listener
    return () => {
      media.removeEventListener("change", listener)
    }
  }, [query])

  return matches
}
