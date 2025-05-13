"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ChevronRight,
  CheckCircle,
  BarChart3,
  Users,
  Search,
  Zap,
  Mail,
  MapPin,
  Clock,
  Target,
  Shield,
  Lightbulb,
  Star,
  TrendingUp,
  ArrowRight,
} from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { SectionTitle } from "@/components/section-title"
import { FeatureCard } from "@/components/feature-card"
import { StatCard } from "@/components/stat-card"
import { MobileMenu } from "@/components/mobile-menu"
import { ContactForm } from "@/components/contact-form"
import { HeroSection } from "@/components/hero-section"
import { FAQSection } from "@/components/faq-section"
import { SEOHead } from "@/components/seo-head"
import { useEffect, useState } from "react"
// Añadir el componente FontLoader al inicio del componente Home
import FontLoader from "./font-loader"
// Añadir la siguiente importación al inicio del archivo:
import OptimizeCss from "./optimize-css"

// Añadir el componente OptimizeCss justo después de FontLoader en el componente Home:
export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [ecnixMenuOpen, setEcnixMenuOpen] = useState(false)

  // Detectar scroll para cambiar el estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Cerrar el menú desplegable cuando se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (ecnixMenuOpen && !target.closest(".ecnix-menu-container")) {
        setEcnixMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ecnixMenuOpen])

  const navLinks = [
    { href: "#what-is-seo", label: "¿Qué es SEO?" },
    { href: "#business", label: "Empresas" },
    { href: "#personal", label: "Particulares" },
    { href: "#results", label: "Resultados" },
    { href: "#contact", label: "Contacto" },
  ]

  // FAQ para la sección de preguntas frecuentes
  const faqs = [
    {
      question: "¿Qué es el SEO y por qué es importante para mi negocio?",
      answer:
        "El SEO (Search Engine Optimization) es el conjunto de técnicas que mejoran la visibilidad de tu sitio web en los resultados orgánicos de los motores de búsqueda. Es importante porque aumenta el tráfico cualificado a tu web, mejora la credibilidad de tu marca y ofrece un ROI superior a largo plazo en comparación con la publicidad pagada.",
    },
    {
      question: "¿Cuánto tiempo se tarda en ver resultados con el SEO?",
      answer:
        "El SEO es una estrategia a medio-largo plazo. Generalmente, se pueden empezar a ver mejoras en el posicionamiento entre 3 y 6 meses después de implementar las optimizaciones, aunque los resultados significativos suelen verse a partir de los 6-12 meses, dependiendo de la competitividad del sector y el estado inicial del sitio web.",
    },
    {
      question: "¿Qué diferencia a ecnix SEO de otras agencias?",
      answer:
        "En ecnix SEO nos diferenciamos por nuestro enfoque basado en datos, transparencia total en los procesos y resultados, y estrategias personalizadas para cada cliente. No utilizamos plantillas genéricas, sino que desarrollamos planes específicos adaptados a los objetivos y necesidades de cada negocio, con un equipo de especialistas certificados y en constante formación.",
    },
    {
      question: "¿Cómo miden el éxito de una estrategia SEO?",
      answer:
        "Medimos el éxito a través de KPIs específicos y relevantes para cada proyecto, como el aumento del tráfico orgánico, mejora en el posicionamiento de palabras clave estratégicas, incremento en la tasa de conversión, reducción del porcentaje de rebote, y aumento en el tiempo de permanencia en el sitio. Proporcionamos informes detallados y transparentes con estos datos.",
    },
    {
      question: "¿Trabajan con empresas de cualquier tamaño y sector?",
      answer:
        "Sí, trabajamos con empresas de todos los tamaños, desde pequeños negocios locales hasta grandes corporaciones, y en diversos sectores. Adaptamos nuestras estrategias y servicios según las necesidades específicas de cada cliente, ofreciendo soluciones escalables y personalizadas para maximizar los resultados independientemente del tamaño o industria.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-950 text-white">
      <FontLoader />
      <OptimizeCss />
      <SEOHead />
      <ScrollAnimation />

      {/* Header - Ajustamos el padding en móvil */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-sm py-2 shadow-md" : "py-2 md:py-4"}`}
      >
        <div className="container mx-auto px-4 relative md:flex md:items-center md:justify-between">
          {/* Actualizar la URL del logotipo en el header */}
          <Link
            href="/"
            className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none flex items-center gap-2"
            aria-label="Ecnix SEO - Ir a la página de inicio"
            title="Ir a la página de inicio"
          >
            <Image
              src="https://ecnixssd.com/logo%20ecnix%20white.png"
              alt="ecnix analytica logo"
              width={120}
              height={40}
              className="h-auto"
              priority
            />
          </Link>

          {/* Navegación de escritorio - Centrada */}
          <nav className="hidden md:flex items-center mx-auto" aria-label="Navegación principal">
            {/* Menú desplegable ecnix integrado en la navegación principal */}
            <div className="relative ecnix-menu-container">
              <Button
                variant="ghost"
                className="text-zinc-400 hover:text-blue-400 transition-colors flex items-center px-3 py-2"
                onClick={() => setEcnixMenuOpen(!ecnixMenuOpen)}
                aria-expanded={ecnixMenuOpen}
                aria-haspopup="true"
              >
                ecnix
                <ChevronRight className={`h-4 w-4 transition-transform ${ecnixMenuOpen ? "rotate-90" : ""}`} />
              </Button>

              {ecnixMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-zinc-900/95 border border-zinc-800 rounded-lg shadow-lg z-50 overflow-hidden">
                  <div className="py-0">
                    <div className="px-4 py-2 text-xs text-zinc-500 border-b border-zinc-800">
                      servicios principales
                    </div>
                    <a
                      href="https://analytica.ecnix.com"
                      className="block px-4 py-2 text-sm text-zinc-300 hover:bg-blue-900/20 hover:text-blue-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      analytica
                    </a>
                    <a
                      href="https://web.ecnix.com"
                      className="block px-4 py-2 text-sm text-zinc-300 hover:bg-blue-900/20 hover:text-blue-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      web creation
                    </a>
                    <a
                      href="https://security.ecnix.com"
                      className="block px-4 py-2 text-sm text-zinc-300 hover:bg-blue-900/20 hover:text-blue-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      security
                    </a>
                    <a
                      href="https://seo.ecnix.com"
                      className="block px-4 py-2 text-sm text-zinc-300 hover:bg-blue-900/20 hover:text-blue-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      seo
                    </a>
                    <a
                      href="https://design.ecnix.com"
                      className="block px-4 py-2 text-sm text-zinc-300 hover:bg-blue-900/20 hover:text-blue-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      design
                    </a>
                    <a
                      href="https://ecnix.ai"
                      className="block px-4 py-2 text-sm text-zinc-300 hover:bg-blue-900/20 hover:text-blue-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ecnix ai
                    </a>
                    <div className="px-4 py-2 text-xs text-zinc-500 border-t border-b border-zinc-800">saas</div>
                    <a
                      href="https://ecnix.dev"
                      className="block px-4 py-2 text-sm text-zinc-300 hover:bg-blue-900/20 hover:text-blue-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      developer
                    </a>
                    <a
                      href="https://pages.ecnix.com"
                      className="block px-4 py-2 text-sm text-zinc-300 hover:bg-blue-900/20 hover:text-blue-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      landing pages
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-zinc-300 hover:bg-blue-900/20 hover:text-blue-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      investigación crítica y real
                    </a>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-blue-400 transition-colors px-3 py-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center ml-auto md:ml-0 gap-4">
            <Button
              className="hidden md:flex bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white border-0"
              aria-label="iniciar sesión en ecnix"
            >
              iniciar sesión ecnix
            </Button>

            {/* Menú móvil */}
            <MobileMenu links={navLinks} />
          </div>
        </div>
      </header>

      <main id="main-content">
        {/* Hero Section */}
        <HeroSection />

        {/* What is SEO Section */}
        <section id="what-is-seo" className="py-20 md:py-32 relative" aria-labelledby="what-is-seo-heading">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(30,64,175,0.1),transparent_50%)]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-on-scroll">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800/50 text-blue-400 text-xs font-medium">
                  Fundamentos
                </div>
                <h2 id="what-is-seo-heading" className="text-3xl md:text-4xl font-bold leading-tight">
                  ¿Qué es el SEO y por qué es <span className="text-blue-400">fundamental hoy</span>?
                </h2>
                <p className="text-zinc-400">
                  El SEO (Search Engine Optimization) es el conjunto de técnicas que mejoran la visibilidad de tu sitio
                  web en los resultados orgánicos de los motores de búsqueda.
                </p>
                <div className="space-y-4 pt-4">
                  {[
                    {
                      title: "Visibilidad constante",
                      description: "A diferencia de la publicidad, el SEO genera tráfico continuo sin costes por clic.",
                    },
                    {
                      title: "Credibilidad y confianza",
                      description: "Los usuarios confían más en los resultados orgánicos que en los anuncios pagados.",
                    },
                    {
                      title: "Retorno de inversión superior",
                      description: "El SEO ofrece uno de los mejores ROI en marketing digital a largo plazo.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-sm text-zinc-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative animate-on-scroll animation-delay-200 group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur-sm opacity-30 transition-all duration-300 group-hover:opacity-70 group-hover:blur"></div>
                <div className="relative bg-zinc-900 rounded-lg p-6 md:p-8 border border-zinc-800 transition-all duration-300 group-hover:transform group-hover:scale-[1.02] group-hover:border-blue-500/50 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      {
                        icon: BarChart3,
                        value: "93%",
                        description: "de las experiencias online comienzan con un motor de búsqueda",
                      },
                      {
                        icon: Users,
                        value: "75%",
                        description: "de usuarios nunca pasan de la primera página de resultados",
                      },
                      {
                        icon: Search,
                        value: "70-80%",
                        description: "ignoran los anuncios pagados y prefieren resultados orgánicos",
                      },
                      {
                        icon: Zap,
                        value: "14.6%",
                        description: "tasa de conversión promedio del SEO (vs 1.9% en publicidad)",
                      },
                    ].map((stat, index) => (
                      <div
                        key={index}
                        className="space-y-2 p-4 rounded-lg bg-zinc-800/50 transition-all duration-300 hover:bg-zinc-800/80 hover:transform hover:scale-[1.03] hover:shadow-md hover:shadow-blue-500/10"
                      >
                        <stat.icon className="h-8 w-8 text-blue-400" aria-hidden="true" />
                        <h3 className="font-medium">{stat.value}</h3>
                        <p className="text-xs text-zinc-500">{stat.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Services */}
        <section id="business" className="py-20 md:py-32 relative bg-zinc-950" aria-labelledby="business-heading">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,64,175,0.1),transparent_70%)]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <SectionTitle
              badge="Para Empresas"
              title={
                <>
                  Soluciones SEO avanzadas para <span className="text-blue-400">potenciar tu negocio</span>
                </>
              }
              description="Desarrollamos estrategias personalizadas que se adaptan a los objetivos específicos de tu empresa, mejorando tu visibilidad online y generando resultados medibles."
              center
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={Search}
                title="Auditoría SEO Completa"
                description="Análisis exhaustivo de tu sitio web para identificar problemas técnicos, oportunidades de contenido y estrategias de enlazado."
                features={[
                  "Análisis técnico en profundidad",
                  "Evaluación de palabras clave",
                  "Análisis de competencia",
                ]}
                ctaText="Solicitar auditoría"
                ctaLink="#contact"
              />

              <FeatureCard
                icon={BarChart3}
                title="Estrategia SEO Integral"
                description="Desarrollo de un plan estratégico personalizado para mejorar tu posicionamiento y aumentar el tráfico cualificado."
                features={[
                  "Investigación de palabras clave",
                  "Optimización de contenidos",
                  "Estrategia de link building",
                ]}
                ctaText="Solicitar estrategia"
                ctaLink="#contact"
                delay="animation-delay-100"
              />

              <FeatureCard
                icon={MapPin}
                title="SEO Local"
                description="Optimización para búsquedas locales que aumenta la visibilidad de tu negocio en tu área geográfica y atrae clientes cercanos."
                features={[
                  "Optimización de perfiles de negocio locales",
                  "Gestión de reseñas y reputación local",
                  "Estrategia de contenido geolocalizado",
                ]}
                ctaText="Mejorar presencia local"
                ctaLink="#contact"
                delay="animation-delay-200"
              />
            </div>
          </div>
        </section>

        {/* Personal Services */}
        <section id="personal" className="py-20 md:py-32 relative" aria-labelledby="personal-heading">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(30,64,175,0.1),transparent_50%)]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <SectionTitle
              badge="Para Particulares"
              title={
                <>
                  Impulsa tu <span className="text-blue-400">presencia personal</span> en internet
                </>
              }
              description="Soluciones SEO adaptadas a las necesidades de profesionales independientes, creadores de contenido y pequeños emprendedores."
              center
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Marca Personal */}
              <div className="relative animate-on-scroll">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur-sm opacity-20"></div>
                <div className="relative bg-zinc-900 rounded-lg p-6 md:p-8 border border-zinc-800 h-full">
                  <div className="flex flex-col gap-6 items-start">
                    <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-blue-400" aria-hidden="true" />
                    </div>
                    <div className="w-full">
                      <h3 className="text-xl font-bold mb-3">Marca Personal</h3>
                      <p className="text-zinc-400 mb-4">
                        Posiciona tu nombre y expertise en los motores de búsqueda para destacar en tu sector
                        profesional.
                      </p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <div>
                            <h4 className="font-medium">Optimización de perfiles</h4>
                            <p className="text-sm text-zinc-500">
                              Mejoramos tus perfiles en redes sociales y directorios profesionales.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <div>
                            <h4 className="font-medium">Estrategia de contenidos</h4>
                            <p className="text-sm text-zinc-500">
                              Creamos contenido que posiciona tu expertise y atrae a tu audiencia ideal.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <div>
                            <h4 className="font-medium">Gestión de reputación</h4>
                            <p className="text-sm text-zinc-500">
                              Monitorizamos y mejoramos tu presencia online para crear una imagen positiva.
                            </p>
                          </div>
                        </li>
                      </ul>
                      <Link
                        href="#contact"
                        className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
                      >
                        Potenciar mi marca personal
                        <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* SEO */}
              <div className="relative animate-on-scroll animation-delay-100">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur-sm opacity-20"></div>
                <div className="relative bg-zinc-900 rounded-lg p-6 md:p-8 border border-zinc-800 h-full">
                  <div className="flex flex-col gap-6 items-start">
                    <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="h-6 w-6 text-blue-400" aria-hidden="true" />
                    </div>
                    <div className="w-full">
                      <h3 className="text-xl font-bold mb-3">SEO</h3>
                      <p className="text-zinc-400 mb-4">
                        Mejora la visibilidad de tu sitio web en los resultados de búsqueda para atraer tráfico
                        cualificado.
                      </p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <div>
                            <h4 className="font-medium">Auditoría técnica</h4>
                            <p className="text-sm text-zinc-500">
                              Analizamos tu sitio web para identificar y corregir problemas que afectan tu
                              posicionamiento.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <div>
                            <h4 className="font-medium">Optimización de contenido</h4>
                            <p className="text-sm text-zinc-500">
                              Creamos y optimizamos contenido relevante que conecta con tu audiencia y posiciona en
                              buscadores.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <div>
                            <h4 className="font-medium">Estrategia de keywords</h4>
                            <p className="text-sm text-zinc-500">
                              Identificamos las palabras clave más relevantes para tu negocio con mayor potencial de
                              conversión.
                            </p>
                          </div>
                        </li>
                      </ul>
                      <Link
                        href="#contact"
                        className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
                      >
                        Mejorar mi posicionamiento
                        <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* SEO Local */}
              <div className="relative animate-on-scroll animation-delay-200">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur-sm opacity-20"></div>
                <div className="relative bg-zinc-900 rounded-lg p-6 md:p-8 border border-zinc-800 h-full">
                  <div className="flex flex-col gap-6 items-start">
                    <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Search className="h-6 w-6 text-blue-400" aria-hidden="true" />
                    </div>
                    <div className="w-full">
                      <h3 className="text-xl font-bold mb-3">SEO Local</h3>
                      <p className="text-zinc-400 mb-4">
                        Aumenta tu visibilidad en búsquedas locales para atraer clientes de tu zona geográfica.
                      </p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <div>
                            <h4 className="font-medium">Perfiles de negocio locales</h4>
                            <p className="text-sm text-zinc-500">
                              Optimizamos tus perfiles en plataformas locales para maximizar tu visibilidad.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <div>
                            <h4 className="font-medium">Directorios locales</h4>
                            <p className="text-sm text-zinc-500">
                              Gestionamos tus menciones en directorios relevantes para tu negocio local.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <div>
                            <h4 className="font-medium">Contenido geolocalizado</h4>
                            <p className="text-sm text-zinc-500">
                              Creamos contenido optimizado para búsquedas con intención local.
                            </p>
                          </div>
                        </li>
                      </ul>
                      <Link
                        href="#contact"
                        className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
                      >
                        Mejorar mi presencia local
                        <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section id="results" className="py-20 md:py-32 relative bg-zinc-950" aria-labelledby="results-heading">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,64,175,0.1),transparent_70%)]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <SectionTitle
              badge="Resultados"
              title={
                <>
                  Impacto <span className="text-blue-400">medible</span> y cuantificable
                </>
              }
              description="Nuestras estrategias SEO generan resultados concretos que impulsan el crecimiento de tu negocio. Estos son algunos de nuestros logros."
              center
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <StatCard
                sector="E-commerce de Moda"
                stats={[
                  { label: "Tráfico orgánico", value: "+46.75%", percentage: 21.75 },
                  { label: "Conversiones", value: "+35.75%", percentage: 18.25 },
                  { label: "Palabras clave en Top 10", value: "+64", percentage: 23 },
                ]}
                testimonial="&quot;ecnix SEO transformó nuestra visibilidad online. Nuestras ventas orgánicas se han duplicado en 6 meses.&quot;"
                author={{
                  initials: "MC",
                  name: "María Campos",
                  role: "Directora de Marketing",
                }}
              />

              <StatCard
                sector="SaaS B2B"
                stats={[
                  { label: "Tráfico orgánico", value: "+53.75%", percentage: 23.75 },
                  { label: "Leads generados", value: "+42%", percentage: 19.5 },
                  { label: "Palabras clave en Top 10", value: "+78", percentage: 21.25 },
                ]}
                testimonial="&quot;Gracias a ecnix SEO, hemos multiplicado por tres nuestras demostraciones de producto desde búsquedas orgánicas.&quot;"
                author={{
                  initials: "JR",
                  name: "Javier Ruiz",
                  role: "CEO",
                }}
                delay="animation-delay-100"
              />

              <StatCard
                sector="Blog de Viajes"
                stats={[
                  { label: "Tráfico orgánico", value: "+85.5%", percentage: 24.5 },
                  { label: "Ingresos por afiliados", value: "+69.5%", percentage: 22 },
                  { label: "Palabras clave en Top 10", value: "+130", percentage: 24 },
                ]}
                testimonial="&quot;Mi blog pasó de 5.000 a más de 100.000 visitas mensuales en un año. La inversión en SEO ha sido la mejor decisión.&quot;"
                author={{
                  initials: "LM",
                  name: "Laura Martínez",
                  role: "Creadora de contenido",
                }}
                delay="animation-delay-200"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 md:py-32 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(30,64,175,0.1),transparent_60%)]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <FAQSection
              title="Preguntas Frecuentes sobre SEO"
              description="Resolvemos tus dudas sobre el posicionamiento web y cómo podemos ayudarte a mejorar tu visibilidad online."
              faqs={faqs}
            />
          </div>
        </section>

        {/* About Us Section */}
        <section id="about-us" className="py-20 md:py-32 relative" aria-labelledby="about-us-heading">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(30,64,175,0.15),transparent_60%)]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <SectionTitle
              badge="Quiénes Somos"
              title={
                <>
                  Expertos en <span className="text-blue-400">posicionamiento SEO</span> con resultados probados
                </>
              }
              description="En ecnix SEO nos apasiona ayudar a empresas y profesionales a alcanzar su máximo potencial online mediante estrategias SEO personalizadas y efectivas."
              center
            />

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="relative animate-on-scroll h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-card blur-sm opacity-20"></div>
                <div className="relative bg-zinc-900 rounded-card p-6 md:p-8 border border-zinc-800 h-full flex flex-col justify-between">
                  <div>
                    <h3 id="about-us-heading" className="text-2xl font-bold mb-4">
                      Nuestra Historia
                    </h3>
                    <p className="text-zinc-400 mb-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit
                      arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut
                      in nulla enim.
                    </p>
                    <p className="text-zinc-400">
                      Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.
                      Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget
                      diam.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-on-scroll animation-delay-200">
                {[
                  {
                    icon: Shield,
                    title: "Misión",
                    content:
                      "Potenciar el crecimiento de nuestros clientes mediante estrategias SEO innovadoras y efectivas que generen resultados tangibles y sostenibles.",
                  },
                  {
                    icon: Lightbulb,
                    title: "Visión",
                    content:
                      "Ser reconocidos como la agencia SEO más innovadora y orientada a resultados, estableciendo nuevos estándares de calidad en la industria.",
                  },
                  {
                    icon: Target,
                    title: "Valores",
                    content: (
                      <ul className="text-zinc-400 text-sm space-y-2">
                        <li>
                          <CheckCircle className="inline-block h-4 w-4 text-blue-500 mr-1" aria-hidden="true" />
                          Transparencia
                        </li>
                        <li>
                          <CheckCircle className="inline-block h-4 w-4 text-blue-500 mr-1" aria-hidden="true" />
                          Innovación
                        </li>
                        <li>
                          <CheckCircle className="inline-block h-4 w-4 text-blue-500 mr-1" aria-hidden="true" />
                          Compromiso
                        </li>
                      </ul>
                    ),
                  },
                  {
                    icon: Mail,
                    title: "Contacto",
                    content:
                      "¿Listo para llevar tu estrategia SEO al siguiente nivel? Contáctanos hoy mismo para una consulta gratuita.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-zinc-900 rounded-card p-6 border border-zinc-800 hover:border-blue-500/30 transition-colors duration-300 group h-full flex flex-col"
                  >
                    <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-900/50 transition-colors duration-300">
                      <item.icon className="h-6 w-6 text-blue-400" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <div className="text-zinc-400 text-sm">{item.content}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section
          id="why-choose-us"
          className="py-20 md:py-32 relative bg-zinc-950"
          aria-labelledby="why-choose-us-heading"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,64,175,0.15),transparent_70%)]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <SectionTitle
              badge="Por Qué Elegirnos"
              title={
                <>
                  Lo que nos <span className="text-blue-400">diferencia</span> de otras agencias
                </>
              }
              description="En ecnix SEO no solo prometemos resultados, los entregamos. Nuestra metodología única y enfoque centrado en datos nos permite ofrecer un servicio superior."
              center
            />

            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={TrendingUp}
                title="Resultados Medibles"
                description="Nos enfocamos en métricas que realmente importan: tráfico cualificado, conversiones y ROI. Cada estrategia está diseñada para generar resultados tangibles y medibles."
                features={[
                  "Informes detallados y transparentes",
                  "KPIs personalizados según objetivos",
                  "Seguimiento continuo del rendimiento",
                ]}
              />

              <FeatureCard
                icon={Star}
                title="Experiencia Especializada"
                description="Nuestro equipo está formado por especialistas con más de 8 años de experiencia en SEO y marketing digital, con certificaciones de Google y otras plataformas líderes."
                features={[
                  "Equipo certificado y especializado",
                  "Formación continua en las últimas tendencias",
                  "Experiencia en múltiples sectores",
                ]}
                delay="animation-delay-100"
              />

              <FeatureCard
                icon={Clock}
                title="Metodología Probada"
                description="Trabajamos con un enfoque estructurado que hemos ido perfeccionando con el tiempo, adaptándolo a las necesidades específicas de cada cliente para obtener resultados consistentes."
                features={[
                  "Proceso estructurado y eficiente",
                  "Estrategias personalizadas, no plantillas",
                  "Mejora continua basada en datos",
                ]}
                delay="animation-delay-200"
              />
            </div>

            <div className="mt-16 text-center animate-on-scroll">
              <div className="relative inline-block">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur-sm opacity-30"></div>
                <div className="relative bg-zinc-900 rounded-lg p-6 md:p-8 border border-zinc-800">
                  <h3 id="why-choose-us-heading" className="text-2xl font-bold mb-4">
                    Nuestro Compromiso
                  </h3>
                  <p className="text-zinc-400 mb-6 max-w-3xl mx-auto">
                    En ecnix SEO no trabajamos para ti, trabajamos contigo. Nos involucramos en tu proyecto como si
                    fuera nuestro, estableciendo una comunicación constante y transparente para asegurar que alcanzamos
                    y superamos tus objetivos.
                  </p>
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white border-0 rounded-lg"
                    aria-label="conocer nuestro proceso seo"
                  >
                    conoce nuestro proceso
                    <ChevronRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 relative" aria-labelledby="contact-heading">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,64,175,0.15),transparent_60%)]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 animate-on-scroll">
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800/50 text-blue-400 text-xs font-medium">
                    Contacto
                  </div>
                  <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold leading-tight">
                    Comienza a <span className="text-blue-400">dominar</span> los resultados de búsqueda
                  </h2>
                  <p className="text-zinc-400">
                    Estamos listos para ayudarte a alcanzar tus objetivos de posicionamiento. Completa el formulario y
                    nos pondremos en contacto contigo en menos de 24 horas.
                  </p>
                  <div className="space-y-4 pt-4">
                    {[
                      {
                        title: "Consulta inicial gratuita",
                        description: "Analizamos tu situación actual sin compromiso.",
                      },
                      {
                        title: "Propuesta personalizada",
                        description: "Desarrollamos una estrategia adaptada a tus necesidades específicas.",
                      },
                      {
                        title: "Resultados garantizados",
                        description: "Trabajamos con objetivos claros y medibles.",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-sm text-zinc-500">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative animate-on-scroll animation-delay-200">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur-sm opacity-30"></div>
                  <div className="relative bg-zinc-900 rounded-lg p-6 md:p-8 border border-zinc-800">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-black/50 border-t border-zinc-800">
        <div className="container mx-auto px-4">
          {/* Actualizar la URL del logotipo en el footer */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="https://ecnixssd.com/logo%20ecnix%20white.png"
                alt="ecnix analytica logo"
                width={100}
                height={30}
                className="h-auto"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-zinc-400 hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 md:mt-0 text-sm text-zinc-500">
              &copy; {new Date().getFullYear()} ecnix SEO. Es propiedad de ecnix analytica y sus socios.
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-zinc-800/50 text-center text-xs text-zinc-500">
            <p>
              <Link href="https://legal.ecnix.com" className="hover:text-blue-400 transition-colors">
                política de privacidad
              </Link>{" "}
              |{" "}
              <Link href="https://legal.ecnix.com" className="hover:text-blue-400 transition-colors">
                términos y condiciones
              </Link>{" "}
              |{" "}
              <Link href="/mapa-del-sitio" className="hover:text-blue-400 transition-colors">
                mapa del sitio
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
