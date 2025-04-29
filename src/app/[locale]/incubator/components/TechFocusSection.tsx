import { BoltIcon, ShieldCheckIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

export default function TechFocusSection() {
	return (
		<div className="py-16 md:py-20 relative overflow-hidden w-full max-w-7xl mx-auto">
			{/* Subtle dot pattern background */}
			<div className="absolute inset-0 overflow-hidden opacity-10">
				<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<pattern
							id="tech-dots"
							width="20"
							height="20"
							patternUnits="userSpaceOnUse"
						>
							<circle cx="2" cy="2" r="1" fill="#2563eb" />
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#tech-dots)" />
				</svg>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-6 mx-auto text-center">
					Technology Focus
				</div>

				<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4">
					Channel Your <span className="text-blue-600">Ambition</span>
				</h2>

				<p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">
					Contribute to Europe&apos;s technological resilience. Build
					something that matters.
				</p>

				{/* Feature cards */}
				<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
					<div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-100 transition-all duration-300 flex flex-col items-center text-center group hover:shadow-md">
						<div className="bg-blue-50 p-3 rounded-xl mb-4 group-hover:bg-blue-100 transition-colors duration-300">
							<BoltIcon className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
						</div>
						<h3 className="text-gray-800 font-semibold text-lg md:text-xl mb-3">
							Artificial Intelligence
						</h3>
						<p className="text-gray-600 text-sm md:text-base">
							Develop AI that drives efficiency, discovery, and ethical
							advancement. Shape the future of European tech.
						</p>
					</div>

					<div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-100 transition-all duration-300 flex flex-col items-center text-center group hover:shadow-md">
						<div className="bg-blue-50 p-3 rounded-xl mb-4 group-hover:bg-blue-100 transition-colors duration-300">
							<ShieldCheckIcon className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
						</div>
						<h3 className="text-gray-800 font-semibold text-lg md:text-xl mb-3">
							Cybersecurity
						</h3>
						<p className="text-gray-600 text-sm md:text-base">
							Build the shields that protect critical infrastructure,
							data, and digital freedom in an increasingly complex world.
						</p>
					</div>

					<div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-100 transition-all duration-300 flex flex-col items-center text-center group hover:shadow-md">
						<div className="bg-blue-50 p-3 rounded-xl mb-4 group-hover:bg-blue-100 transition-colors duration-300">
							<GlobeAltIcon className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
						</div>
						<h3 className="text-gray-800 font-semibold text-lg md:text-xl mb-3">
							Defense & Dual-Use
						</h3>
						<p className="text-gray-600 text-sm md:text-base">
							Innovate for a more secure and resilient Europe with
							technologies that safeguard citizens and sovereignty.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
