import Image from "next/image";

export default function PartnersSection() {
	return (
		<div className="py-20 md:py-28 relative overflow-hidden w-full max-w-7xl mx-auto">
			{/* Subtle dot pattern background - matching other sections */}
			<div className="absolute inset-0 overflow-hidden opacity-10">
				<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<pattern
							id="partner-dots"
							width="20"
							height="20"
							patternUnits="userSpaceOnUse"
						>
							<circle cx="2" cy="2" r="1" fill="#2563eb" />
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#partner-dots)" />
				</svg>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-6 mx-auto text-center">
					Trusted Collaborators
				</div>

				<h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
					Our <span className="text-blue-600">Partners</span>
				</h2>

				<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto text-center mb-16">
					We collaborate with leading organizations to provide the best
					resources for our founders.
				</p>

				{/* Partners grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
					<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:shadow-md group">
						<div className="relative h-32 flex items-center justify-center">
							<div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
							<Image
								src="/images/logo/hubbrussels.svg"
								alt="Hub Brussels"
								width={240}
								height={120}
								className="opacity-80 group-hover:opacity-100 transition-opacity max-h-24 w-auto"
							/>
						</div>
						<div className="mt-4 text-center">
							<h3 className="text-gray-800 font-medium">Hub Brussels</h3>
							<p className="text-gray-500 text-sm mt-1">
								Innovation & Startup Support
							</p>
						</div>
					</div>

					<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:shadow-md group">
						<div className="relative h-32 flex items-center justify-center">
							<div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
							<Image
								src="/images/logo/ingram.svg"
								alt="Ingram"
								width={240}
								height={120}
								className="opacity-80 group-hover:opacity-100 transition-opacity max-h-24 w-auto"
							/>
						</div>
						<div className="mt-4 text-center">
							<h3 className="text-gray-800 font-medium">Ingram</h3>
							<p className="text-gray-500 text-sm mt-1">
								Technology Distribution
							</p>
						</div>
					</div>
					<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:shadow-md group">
						<div className="relative h-32 flex items-center justify-center">
							<div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
							<Image
								src="/images/logo/payoneer.svg"
								alt="Ingram"
								width={240}
								height={120}
								className="opacity-80 group-hover:opacity-100 transition-opacity max-h-24 w-auto"
							/>
						</div>
						<div className="mt-4 text-center">
							<h3 className="text-gray-800 font-medium">Payoneer</h3>
							<p className="text-gray-500 text-sm mt-1">
								Global payments made simple
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
