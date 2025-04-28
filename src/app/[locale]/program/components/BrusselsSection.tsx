import Image from "next/image"
import CheckItem from "./ui/CheckItem"

export default function BrusselsSection() {
  return (
    <section className="py-20 relative">
      {/* Diagonal lines background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="diagonalLines"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="40" stroke="#2563eb" strokeWidth="1" />
            <line x1="20" y1="0" x2="20" y2="40" stroke="#2563eb" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-16">
          Europe Awaits. Brussels <span className="text-blue-600">Propels.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-8">
              <span className="font-medium">Tired of the noise?</span> Looking for a place where your vision can take
              root and flourish? Europe offers a unique ecosystem for growth, collaboration, and impact.
            </p>

            <div className="space-y-6">
              <CheckItem title="Unrivaled Access:">
                2 hours to Paris, London, Amsterdam. Tap into a market of 700M+ consumers.
              </CheckItem>
              <CheckItem title="English-First:">
                Join a truly international city where English is the language of business.
              </CheckItem>
              <CheckItem title="Policy Meets Innovation:">
                Operate at the nexus of EU decision-making. Crucial for AI, cybersecurity, and dual-use.
              </CheckItem>
              <CheckItem title="Thriving Tech Hub:">
                Join Brussels' rapidly growing startup scene with accessible grants and R&D incentives.
              </CheckItem>
            </div>
          </div>
          <div className="relative h-80 md:h-96">
            <Image
              src="/images/features/company.svg"
              alt="Brussels tech ecosystem"
              fill
              className="object-contain rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
