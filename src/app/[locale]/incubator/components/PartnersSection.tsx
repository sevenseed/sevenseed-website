import Image from "next/image";

export default function PartnersSection() {
	return (
		<section className="py-16 bg-white relative">
			{/* Dotted background pattern */}
			<div className="absolute inset-0 overflow-hidden opacity-5">
				<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
					<pattern
						id="dots"
						width="20"
						height="20"
						patternUnits="userSpaceOnUse"
					>
						<circle cx="2" cy="2" r="1" fill="#2563eb" />
					</pattern>
					<rect width="100%" height="100%" fill="url(#dots)" />
				</svg>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<h2 className="text-3xl font-bold text-center mb-4">Our Partners</h2>
				<p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
					We collaborate with leading organizations to provide the best
					resources for our founders.
				</p>

				<div className="flex justify-center gap-8 items-center max-w-5xl mx-auto">
					<div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center h-32">
						<Image
							src="/images/logo/hubbrussels.svg"
							alt="/images/logo/hubbrussels.svg"
							width={240}
							height={120}
							className="opacity-80 hover:opacity-100 transition-opacity"
						/>
					</div>
					<div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center h-32">
						<Image
							src="/images/logo/ingram.svg"
							alt="/images/logo/ingram.svg"
							width={240}
							height={120}
							className="opacity-80 hover:opacity-100 transition-opacity"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
