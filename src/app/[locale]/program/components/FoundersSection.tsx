import Image from "next/image"
import CheckItem from "./ui/CheckItem"

export default function FoundersSection() {
  return (
    <section className="py-20 relative">
      {/* Hexagon pattern background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <polygon points="25,0 50,14.4 50,43.3 25,57.7 0,43.3 0,14.4" fill="none" stroke="#2563eb" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-16">Are You Ready to Build Boldly in Brussels?</h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-72 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl -z-10"></div>
            <Image src="/images/features/Challenge.svg" alt="Founders collaborating" fill className="object-contain p-6" />
          </div>
          <div>
            <p className="text-lg text-gray-600 mb-8">We partner with founders who are:</p>

            <div className="space-y-6">
              <CheckItem title="US-Based:">
                Committed to relocating and establishing primary operations in Brussels
              </CheckItem>
              <CheckItem title="Early-Stage:">From idea to pre-seed/seed, ready to build and scale</CheckItem>
              <CheckItem title="Tech Innovators:">
                Focused on AI, Cybersecurity, or Defense/Dual-Use technologies
              </CheckItem>
              <CheckItem title="Collaborative:">
                Eager to contribute to and benefit from a tight-knit cohort community
              </CheckItem>
              <CheckItem title="Impact-Driven:">
                Motivated to build significant companies that contribute to European tech resilience
              </CheckItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
