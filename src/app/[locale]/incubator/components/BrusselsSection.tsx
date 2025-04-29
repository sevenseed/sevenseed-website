import Image from "next/image";

export default function BrusselsSection() {
	return (
		<div className="py-20 md:py-28 relative overflow-hidden w-full max-w-7xl mx-auto">
			{/* New lighter dot pattern background */}
			<div className="absolute inset-0 overflow-hidden opacity-10">
				<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<pattern
							id="dots"
							width="20"
							height="20"
							patternUnits="userSpaceOnUse"
						>
							<circle cx="2" cy="2" r="1" fill="#2563eb" />
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#dots)" />
				</svg>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-6 mx-auto  text-center">
					Strategic Location
				</div>

				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
					Europe Awaits. Brussels{" "}
					<span className="text-blue-600">Propels.</span>
				</h2>

				{/* Image at the top, spanning full width */}
				<div className="mb-12 relative">
					<div className="absolute -inset-2 bg-blue-100 rounded-3xl opacity-50 blur-lg"></div>
					<div className="relative overflow-hidden rounded-2xl shadow-xl">
						<Image
							src="/images/brussels.jpg"
							alt="Brussels cityscape"
							width={1200}
							height={400}
							className="w-full h-[350px] object-cover object-top"
						/>
					</div>
				</div>

				<p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
					<span className="font-medium">
						Tired of the noise? <br />
					</span>{" "}
					Looking for a place where your vision can take root and flourish?{" "}
					<br /> Europe offers a unique ecosystem for growth, collaboration,
					and impact.
				</p>

				{/* Feature grid - in a 2x2 grid spanning full width */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
					<div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-100 transition-all duration-300">
						<div className="flex items-start">
							<div className="bg-blue-50 p-3 rounded-lg mr-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-blue-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
									/>
								</svg>
							</div>
							<div>
								<h3 className="text-gray-800 font-semibold text-lg mb-2">
									Unrivaled Access
								</h3>
								<p className="text-gray-600">
									2 hours to Paris, London, Amsterdam. Tap into a
									market of 700M+ consumers.
								</p>
							</div>
						</div>
					</div>

					<div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-100 transition-all duration-300">
						<div className="flex items-start">
							<div className="bg-blue-50 p-3 rounded-lg mr-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-blue-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
									/>
								</svg>
							</div>
							<div>
								<h3 className="text-gray-800 font-semibold text-lg mb-2">
									English-First
								</h3>
								<p className="text-gray-600">
									Join a truly international city where English is the
									language of business.
								</p>
							</div>
						</div>
					</div>

					<div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-100 transition-all duration-300">
						<div className="flex items-start">
							<div className="bg-blue-50 p-3 rounded-lg mr-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-blue-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
									/>
								</svg>
							</div>
							<div>
								<h3 className="text-gray-800 font-semibold text-lg mb-2">
									Policy Meets Innovation
								</h3>
								<p className="text-gray-600">
									Operate at the nexus of EU decision-making. Crucial
									for AI, cybersecurity, and dual-use.
								</p>
							</div>
						</div>
					</div>

					<div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-100 transition-all duration-300">
						<div className="flex items-start">
							<div className="bg-blue-50 p-3 rounded-lg mr-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-blue-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<div>
								<h3 className="text-gray-800 font-semibold text-lg mb-2">
									Thriving Tech Hub
								</h3>
								<p className="text-gray-600">
									Join Brussels&apos; rapidly growing startup scene
									with accessible grants and R&amp;D incentives.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
