import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function HeroSection() {
	return (
		<section className="pt-20 md:pt-28 py-20 md:py-28 relative">
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

			<div className="container mx-auto px-4 text-center relative z-10">
				<div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
					Now welcoming US founders
				</div>
				<h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
					Make the leap to <span className="text-blue-600">Europe</span>
				</h1>
				<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
					Feeling stuck as US politics take a worrying turn? <br /> Looking to
					build a better future somewhere else?
					<br />
					Re-launch your startup in Europe, with other founders like you.
				</p>
				<div className="flex flex-col sm:flex-row justify-center gap-4">
					<Link href="/contact">
						<div className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full px-8 py-6 h-auto flex items-center mx-auto">
							Apply for Fall 2025 Cohort
							<ArrowRightIcon className="ml-2 h-5 w-5" />
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
}
