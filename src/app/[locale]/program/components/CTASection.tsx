import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function CTASection() {
	return (
		<section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white relative">
			{/* Abstract lines background */}
			<div className="absolute inset-0 overflow-hidden opacity-10">
				<svg
					width="100%"
					height="100%"
					viewBox="0 0 800 800"
					xmlns="http://www.w3.org/2000/svg"
				>
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

			<div className="container mx-auto px-4 text-center relative z-10">
				<h2 className="text-3xl font-bold mb-6">
					Your European Journey Starts Now!
				</h2>
				<p className="text-lg mb-10 max-w-2xl mx-auto">
					Spaces are limited. Our Fall 2025 cohort is filling up fast. Don't
					miss the chance to establish your startup in Europe's most strategic
					city.
				</p>
				<div className="flex flex-col sm:flex-row justify-center gap-4">
					<Link href="/contact">
						<div className="bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-full px-8 py-6 h-auto flex items-center mx-auto">
							Apply for Fall 2025 Cohort
							<ArrowRightIcon className="ml-2 h-5 w-5" />
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
}
