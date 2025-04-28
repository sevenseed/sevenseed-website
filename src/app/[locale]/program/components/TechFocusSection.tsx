import { BoltIcon, ShieldCheckIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import FeatureCard from "./ui/FeatureCard";

export default function TechFocusSection() {
	return (
		<section className="py-20 bg-gradient-to-br from-blue-50 to-white relative">
			{/* Wave pattern background */}
			<div className="absolute top-0 left-0 right-0 h-20 overflow-hidden">
				<svg
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
					className="absolute bottom-0 w-full h-20 text-white fill-current"
				>
					<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
				</svg>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<h2 className="text-3xl font-bold text-center mb-4">
					Channel Your Ambition
				</h2>
				<p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
					Contribute to Europe's technological resilience. Build something
					that matters.
				</p>

				<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
					<FeatureCard
						icon={<BoltIcon className="h-8 w-8 text-blue-600" />}
						title="Artificial Intelligence"
						description="Develop AI that drives efficiency, discovery, and ethical advancement. Shape the future of European tech."
					/>

					<FeatureCard
						icon={<ShieldCheckIcon className="h-8 w-8 text-blue-600" />}
						title="Cybersecurity"
						description="Build the shields that protect critical infrastructure, data, and digital freedom in an increasingly complex world."
					/>

					<FeatureCard
						icon={<GlobeAltIcon className="h-8 w-8 text-blue-600" />}
						title="Defense & Dual-Use"
						description="Innovate for a more secure and resilient Europe with technologies that safeguard citizens and sovereignty."
					/>
				</div>

				<div className="mt-16 text-center">
					<p className="text-gray-600 italic max-w-2xl mx-auto text-lg">
						"This isn't just about finding product-market fit; it's about
						contributing to something bigger."
					</p>
				</div>
			</div>
		</section>
	);
}
