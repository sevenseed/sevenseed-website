import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function CTASection() {
	return (
		<div className="py-16 md:py-20 relative overflow-hidden w-full max-w-7xl mx-auto my-12">
			<div className="absolute inset-0 bg-linear-to-br from-blue-600 to-blue-700 rounded-3xl"></div>

			{/* Abstract pattern background */}
			<div className="absolute inset-0 overflow-hidden opacity-10">
				<svg
					width="100%"
					height="100%"
					viewBox="0 0 800 800"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<pattern
							id="dots-cta"
							width="20"
							height="20"
							patternUnits="userSpaceOnUse"
						>
							<circle cx="2" cy="2" r="1" fill="white" />
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#dots-cta)" />
					<path d="M0,200 L800,600" stroke="white" strokeWidth="2" />
					<path d="M0,400 L800,400" stroke="white" strokeWidth="2" />
					<path d="M0,600 L800,200" stroke="white" strokeWidth="2" />
					<circle
						cx="400"
						cy="400"
						r="200"
						fill="none"
						stroke="white"
						strokeWidth="2"
					/>
				</svg>
			</div>

			{/* Content */}
			<div className="container mx-auto px-6 md:px-8 relative z-10">
				<div className="max-w-3xl mx-auto text-center">
					<div className="inline-block bg-blue-500 bg-opacity-30 text-white px-4 py-1 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
						Limited Availability
					</div>

					<h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
						Your European Journey{" "}
						<span className="text-blue-100">Starts Now!</span>
					</h2>

					<p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-blue-50">
						Spaces are limited. Our Fall 2025 cohort is filling up fast.
						Don&apos;t miss the chance to establish your startup in
						Europe&apos;s most strategic city.
					</p>

					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<Link
							href="/apply"
							className="bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-full px-8 py-4 flex items-center justify-center transition-all duration-300 group hover:shadow-lg hover:shadow-blue-700/30"
						>
							<span>Apply for Fall 2025 Cohort</span>
							<ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
						</Link>

						<Link
							href="/contact"
							className="border-2 border-white hover:border-blue-100 text-white font-medium rounded-full px-8 py-4 flex items-center justify-center transition-all duration-300 hover:bg-blue-600"
						>
							<span>Contact Us</span>
						</Link>
					</div>

					<p className="mt-8 text-blue-100 text-sm">
						Application deadline: December 1st, 2025
					</p>
				</div>
			</div>

			{/* Decorative elements */}
			<div className="absolute top-0 right-0 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/4"></div>
			<div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/4"></div>
		</div>
	);
}
