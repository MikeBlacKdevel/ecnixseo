"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail } from "lucide-react"
import Link from "next/link"
import { type FormEvent, useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío de formulario
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", website: "", message: "" })

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Nombre
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="bg-zinc-800/50 border-zinc-700 focus:border-blue-500 rounded-lg"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="tu@email.com"
            className="bg-zinc-800/50 border-zinc-700 focus:border-blue-500 rounded-lg"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="website" className="text-sm font-medium">
            Sitio web (opcional)
          </label>
          <Input
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="https://tusitio.com"
            className="bg-zinc-800/50 border-zinc-700 focus:border-blue-500 rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Mensaje
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Cuéntanos sobre tu proyecto y objetivos"
            className="bg-zinc-800/50 border-zinc-700 focus:border-blue-500 min-h-[120px] rounded-lg"
            required
          />
        </div>
      </div>

      {submitSuccess && (
        <div className="p-3 bg-green-900/30 border border-green-800 rounded-md text-green-400 text-sm">
          ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
        </div>
      )}

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white border-0 rounded-lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Solicitar consulta gratuita"}
        <Mail className="ml-2 h-4 w-4" />
      </Button>

      <p className="text-xs text-zinc-500 text-center mt-4">
        Al enviar este formulario, aceptas nuestra{" "}
        <Link href="/politica-de-privacidad" className="text-blue-400 hover:underline">
          política de privacidad
        </Link>
        .
      </p>
    </form>
  )
}
