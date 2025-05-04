"use client"

import { useEffect } from "react"

// Este componente ya no es necesario con la implementación directa de Google Fonts
// pero lo mantenemos para facilitar la transición futura a MBType
export default function FontLoader() {
  useEffect(() => {
    console.log("Raleway cargada correctamente desde Google Fonts")
  }, [])

  return null
}
