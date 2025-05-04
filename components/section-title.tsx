import type React from "react"
interface SectionTitleProps {
  badge: string
  title: React.ReactNode
  description?: string
  className?: string
  center?: boolean
}

export function SectionTitle({ badge, title, description, className = "", center = false }: SectionTitleProps) {
  return (
    <div
      className={`${center ? "text-center" : ""} max-w-3xl ${center ? "mx-auto" : ""} mb-16 animate-on-scroll ${className}`}
    >
      <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800/50 text-blue-400 text-xs font-medium mb-4">
        {badge}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
      {description && <p className="text-zinc-400">{description}</p>}
    </div>
  )
}
