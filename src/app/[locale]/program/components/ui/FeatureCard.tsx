import type React from "react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:border-blue-300 transition-all">
      <div className="bg-blue-100 p-4 rounded-2xl inline-flex mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
