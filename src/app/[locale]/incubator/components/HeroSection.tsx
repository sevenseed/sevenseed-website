import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
	return (
		<div className="pt-10 md:pt-10 py-16 md:py-20 relative overflow-hidden w-full max-w-7xl mx-auto">
			{/* Abstract background pattern */}
			<div className="absolute inset-0 overflow-hidden opacity-10">
				<svg
					width="100%"
					height="100%"
					viewBox="0 0 800 800"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<pattern
							id="grid"
							width="50"
							height="50"
							patternUnits="userSpaceOnUse"
						>
							<path
								d="M 50 0 L 0 0 0 50"
								fill="none"
								stroke="#2563eb"
								strokeWidth="1"
							/>
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#grid)" />
					<circle
						cx="400"
						cy="400"
						r="200"
						fill="none"
						stroke="#2563eb"
						strokeWidth="2"
					/>
					<circle
						cx="400"
						cy="400"
						r="300"
						fill="none"
						stroke="#2563eb"
						strokeWidth="1.5"
					/>
					<circle
						cx="400"
						cy="400"
						r="400"
						fill="none"
						stroke="#2563eb"
						strokeWidth="1"
					/>
				</svg>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="flex flex-col lg:flex-row items-center">
					<div className="lg:w-3/5 text-center lg:text-left mb-8 lg:mb-0">
						<div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
							Now welcoming US founders
						</div>
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
							Make the leap to{" "}
							<span className="text-blue-600">Europe</span>
						</h1>
						<p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-6">
							Have your US activities been impacted by recent
							administrative decisions?
							<br className="hidden md:block" /> Looking to rebuild a
							future somewhere else? <br className="hidden md:block" />
							Launch your startup in the heart of Europe, with other
							founders like you.
						</p>

						{/* Feature highlights */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
							<div className="bg-white bg-opacity-70 backdrop-blur-sm p-3 md:p-4 rounded-lg shadow-sm">
								<div className="text-blue-600 mb-1 md:mb-2 flex justify-center lg:justify-start">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 md:h-6 md:w-6"
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
								<p className="text-gray-600 text-xs md:text-sm text-center lg:text-left">
									Network across Europe
								</p>
							</div>
							<div className="bg-white bg-opacity-70 backdrop-blur-sm p-3 md:p-4 rounded-lg shadow-sm">
								<div className="text-blue-600 mb-1 md:mb-2 flex justify-center lg:justify-start">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 md:h-6 md:w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
										/>
									</svg>
								</div>
								<p className="text-gray-600 text-xs md:text-sm text-center lg:text-left">
									Access new opportunities
								</p>
							</div>
							<div className="bg-white bg-opacity-70 backdrop-blur-sm p-3 md:p-4 rounded-lg shadow-sm">
								<div className="text-blue-600 mb-1 md:mb-2 flex justify-center lg:justify-start">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 md:h-6 md:w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
										/>
									</svg>
								</div>
								<p className="text-gray-600 text-xs md:text-sm text-center lg:text-left">
									Join a community of founders
								</p>
							</div>
						</div>

						<div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
							<Link
								href="/apply"
								className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full px-6 py-3 flex items-center justify-center transition-all duration-300"
							>
								<span>Apply for Fall 2025 Cohort</span>
								<ArrowRightIcon className="ml-2 h-5 w-5" />
							</Link>
						</div>
					</div>

					{/* Image section */}
					<div className="lg:w-2/5">
						<div className="relative">
							<div className="absolute -inset-4 bg-blue-100 rounded-full opacity-50 blur-xl"></div>
							<div className="relative bg-white p-2 rounded-2xl shadow-xl rotate-2">
								<Image
									src="/images/atomium.jpg"
									alt="European Opportunity"
									width={500}
									height={400}
									className="rounded-xl"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
