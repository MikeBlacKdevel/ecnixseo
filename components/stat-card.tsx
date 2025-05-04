import { Award } from "lucide-react"

interface StatCardProps {
  sector: string
  stats: {
    label: string
    value: string
    percentage: number
  }[]
  testimonial: string
  author: {
    initials: string
    name: string
    role: string
  }
  delay?: string
}

export function StatCard({ sector, stats, testimonial, author, delay = "" }: StatCardProps) {
  return (
    <div className={`relative group animate-on-scroll ${delay}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-card blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
      <div className="relative bg-zinc-900 border border-zinc-800 rounded-card p-6 h-full hover:border-blue-500/50 transition-colors duration-300">
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="text-xs text-zinc-500 mb-1">Sector</div>
            <div className="font-medium">{sector}</div>
          </div>
          <Award className="h-8 w-8 text-blue-400" />
        </div>
        <div className="space-y-4">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <div className="text-sm text-zinc-400">{stat.label}</div>
                <div className="text-sm font-medium text-blue-400">{stat.value}</div>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-600 to-blue-400 h-2 rounded-full"
                  style={{ width: `${stat.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t border-zinc-800">
          <p className="text-sm text-zinc-500">{testimonial}</p>
          <div className="flex items-center mt-3">
            <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 font-medium">
              {author.initials}
            </div>
            <div className="ml-2">
              <div className="text-sm font-medium">{author.name}</div>
              <div className="text-xs text-zinc-500">{author.role}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
