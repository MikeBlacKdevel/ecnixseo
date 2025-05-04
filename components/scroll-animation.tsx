"use client"

import { useEffect, useRef } from "react"

export default function ScrollAnimation() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Initialize the IntersectionObserver
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add the is-visible class when the element is in view
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    // Select all elements with the animate-on-scroll class
    const elements = document.querySelectorAll(".animate-on-scroll")

    // Observe each element
    elements.forEach((element) => {
      if (observerRef.current) {
        observerRef.current.observe(element)
      }
    })

    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return null
}
