import { CheckCircle, type LucideIcon } from "lucide-react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  features?: string[]
  ctaText?: string
  ctaLink?: string
  delay?: string
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  features,
  ctaText,
  ctaLink,
  delay = "",
}: FeatureCardProps) {
  return (
    <div className={`relative group animate-on-scroll ${delay}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-card blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
      <div className="relative bg-zinc-900 border border-zinc-800 rounded-card p-6 h-full hover:border-blue-500/50 transition-colors duration-300">
        <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-blue-400" />
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-zinc-400 mb-4">{description}</p>
        {features && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-zinc-500">
                <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}
        {ctaText && ctaLink && (
          <Link
            href={ctaLink}
            className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
          >
            {ctaText}
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  )
}
