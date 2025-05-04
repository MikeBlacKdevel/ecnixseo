"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-950 text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Volver al inicio
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-8">Política de Privacidad</h1>

          {/* Añadir sección destacada sobre no recopilación de datos */}
          <div className="bg-blue-900/20 border border-blue-800/50 rounded-card p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-blue-400">Nuestra postura sobre la privacidad</h2>
            <p className="mb-4">
              En ecnix SEO tenemos una postura clara y firme sobre la privacidad de nuestros usuarios:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li>
                <strong>NO</strong> registramos direcciones IP.
              </li>
              <li>
                <strong>NO</strong> utilizamos cookies de seguimiento.
              </li>
              <li>
                <strong>NO</strong> compartimos ningún tipo de dato con Google ni con otras empresas de obtención de
                datos.
              </li>
              <li>
                <strong>NO</strong> implementamos herramientas de análisis que puedan comprometer su privacidad.
              </li>
            </ul>
            <p className="mt-4">
              Las políticas de ecnix analytica sobre la obtención de datos son muy claras y concisas:{" "}
              <strong className="text-blue-400">NO</strong>. Esta es la respuesta que damos a cualquier solicitud de
              compartir información de nuestros usuarios.
            </p>
          </div>

          <div className="space-y-8 text-zinc-300">
            <section>
              <h2 className="text-xl font-bold mb-4 text-white">1. Información que recopilamos</h2>
              <p className="mb-4">
                En ecnix SEO, recopilamos únicamente la información personal que usted nos proporciona directamente y
                voluntariamente cuando utiliza nuestro sitio web o servicios, como:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                <li>
                  Información de contacto que usted proporciona en formularios (nombre, dirección de correo electrónico)
                </li>
                <li>Información sobre su sitio web y objetivos de SEO que usted comparte con nosotros</li>
                <li>Comunicaciones que mantenemos con usted</li>
              </ul>
              <p className="mt-4 text-blue-400 font-medium">
                A diferencia de otras empresas, NO recopilamos datos de navegación, NO utilizamos cookies de seguimiento
                y NO monitorizamos su comportamiento en nuestro sitio.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-white">2. Cómo utilizamos su información</h2>
              <p className="mb-4">
                Nosotros no utilizamos la información personal más que lo esencial para comunicarnos con usted.
                Específicamente, limitamos el uso de su información a:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                <li>Responder a sus consultas y solicitudes</li>
                <li>Proporcionar los servicios que usted ha solicitado expresamente</li>
                <li>Enviar información relevante sobre nuestros servicios solo cuando usted lo ha autorizado</li>
              </ul>
              <p className="mt-4 text-blue-400">
                No utilizamos su información para análisis de comportamiento, perfiles de usuario, ni para ningún otro
                propósito que no sea estrictamente necesario para nuestra comunicación directa.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-white">3. Compartición de información</h2>
              <p className="mb-4">
                En ecnix SEO, solo compartimos su información con las páginas asociadas con ecnix analytica para poder
                proporcionarle todo el soporte profesional de otros sectores.
              </p>
              <p className="mb-4">
                Esta compartición limitada tiene como único objetivo mejorar la calidad de nuestros servicios y
                ofrecerle soluciones integrales dentro de nuestro ecosistema de empresas.
              </p>
              <p className="mb-4 text-blue-400">
                No vendemos, alquilamos ni transferimos su información personal a terceros fuera de nuestro grupo
                empresarial bajo ninguna circunstancia.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-white">4. Cookies y tecnologías similares</h2>
              <p className="mb-4">
                <strong className="text-blue-400">NO utilizamos cookies ni tecnologías similares</strong> para recopilar
                información sobre cómo interactúa con nuestro sitio web. A diferencia de la mayoría de sitios web, hemos
                tomado la decisión consciente de respetar completamente su privacidad evitando cualquier tipo de
                seguimiento de su actividad.
              </p>
              <p className="mb-4">
                Nuestro sitio web está diseñado para funcionar sin necesidad de cookies de seguimiento, análisis o
                publicidad. Las únicas cookies que podrían estar presentes son aquellas estrictamente necesarias para el
                funcionamiento técnico básico del sitio, como mantener su sesión activa mientras navega.
              </p>
              <p className="mt-4 bg-zinc-800/50 p-4 rounded-md border-l-4 border-blue-500 text-zinc-300">
                <strong className="text-blue-400">Importante:</strong> Si usted está usando Chrome o alguna tecnología
                de Google, es Google quien le trackea, no nosotros. Queremos dejar claro que no tenemos control sobre
                las prácticas de recopilación de datos de Google a través de sus productos como Chrome, Gmail o
                cualquier otro servicio de Google que usted utilice para acceder a nuestro sitio.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-white">5. Sus derechos</h2>
              <p className="mb-4">
                Dependiendo de su ubicación, puede tener ciertos derechos con respecto a su información personal, como:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                <li>Acceder a la información personal que tenemos sobre usted</li>
                <li>Corregir información inexacta o incompleta</li>
                <li>Solicitar la eliminación de su información personal</li>
                <li>Oponerse al procesamiento de su información</li>
                <li>Solicitar la portabilidad de sus datos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-white">6. Seguridad de la información</h2>
              <p className="mb-4">
                Implementamos medidas de seguridad diseñadas para proteger su información personal contra pérdida,
                acceso, divulgación, alteración o destrucción no autorizados.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-white">7. Cambios a esta política</h2>
              <p className="mb-4">
                Podemos actualizar esta política de privacidad periódicamente. Le notificaremos cualquier cambio
                material publicando la nueva política de privacidad en esta página y, cuando sea apropiado, le
                notificaremos por correo electrónico.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-white">8. Contacto</h2>
              <p className="mb-4">
                Si tiene preguntas o inquietudes sobre nuestra política de privacidad o prácticas de datos, contáctenos
                en:
              </p>
              <p className="text-blue-400">curiosity@ecnix.com</p>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Button
              onClick={() => window.history.back()}
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white border-0 rounded-lg"
            >
              Volver
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
