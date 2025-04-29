import {
	CheckIcon,
	ArrowPathIcon,
	QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import type { ReactNode } from "react";

export default function DealSection() {
	return (
		<div className="py-16 md:py-20 relative overflow-hidden w-full max-w-7xl mx-auto">
			<div className="container mx-auto px-4 relative z-10">
				<div className="text-center mb-10">
					<div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
						Program Terms
					</div>

					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						The Deal:{" "}
						<span className="text-blue-600">
							Transparent & Founder-Friendly
						</span>
					</h2>

					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						We believe in straightforward partnerships where incentives are
						aligned.
					</p>
				</div>

				{/* Main Deal Content - Two Column Layout */}
				<div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
					{/* Left Column - Deal Terms */}
					<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
						<h3 className="text-xl font-bold mb-6 text-center">
							Deal Terms
						</h3>

						<div className="grid grid-cols-3 gap-4 mb-8">
							{/* Program Fee */}
							<div className="text-center">
								<div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-3 mx-auto">
									<span className="text-blue-600 font-bold text-xl">
										€
									</span>
								</div>
								<h4 className="text-lg font-bold mb-1 text-gray-900">
									€6,500
								</h4>
								<p className="text-xs text-blue-600 font-medium mb-1">
									Program Fee
								</p>
								<p className="text-xs text-gray-600">
									Company formation & benefits
								</p>
							</div>

							{/* Equity Stake */}
							<div className="text-center">
								<div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-3 mx-auto">
									<span className="text-blue-600 font-bold text-xl">
										%
									</span>
								</div>
								<h4 className="text-lg font-bold mb-1 text-gray-900">
									5%
								</h4>
								<p className="text-xs text-blue-600 font-medium mb-1">
									Equity Stake
								</p>
								<p className="text-xs text-gray-600">
									Standard for Seven Seed
								</p>
							</div>

							{/* Profit-Sharing */}
							<div className="text-center">
								<div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-3 mx-auto">
									<span className="text-blue-600 font-bold text-xl">
										↗
									</span>
								</div>
								<h4 className="text-lg font-bold mb-1 text-gray-900">
									25%
								</h4>
								<p className="text-xs text-blue-600 font-medium mb-1">
									Profit-Sharing
								</p>
								<p className="text-xs text-gray-600">
									Of profits shared with cohort
								</p>
							</div>
						</div>

						{/* Profit-Sharing Flow Diagram */}
						<div className="pt-4 border-t border-gray-100 mt-auto">
							<h4 className="text-sm font-medium mb-4 text-center text-gray-700">
								How Profit-Sharing Works
							</h4>

							<div className="flex items-center justify-between">
								<div className="bg-blue-50 p-2 rounded-lg text-center w-24">
									<p className="text-xs font-medium text-gray-800">
										Exit Event
									</p>
								</div>

								<ArrowFlow />

								<div className="bg-blue-50 p-2 rounded-lg text-center w-24">
									<p className="text-xs font-medium text-gray-800">
										Seven Seed Gets 5%
									</p>
								</div>

								<ArrowFlow />

								<div className="bg-blue-50 p-2 rounded-lg text-center w-24">
									<p className="text-xs font-medium text-gray-800">
										25% Shared
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right Column - Key Details */}
					<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
						<h3 className="text-xl font-bold mb-6 text-center">
							Key Details
						</h3>

						<div className="space-y-4 flex-grow flex flex-col justify-center">
							<CheckItem>
								Seven Seed retains 50% of proceeds from its equity
							</CheckItem>
							<CheckItem>
								25% of our profits from exits across the whole cohort
								are shared back with each cohort member
							</CheckItem>
							<CheckItem>
								Example: If Seven Seed receives €1M from an exit in your
								cohort, €250k is distributed among the other startups
							</CheckItem>
							<CheckItem>
								Optional: For an additional €5,000 investment, double
								your individual share from this profit-sharing pool
							</CheckItem>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function ArrowFlow() {
	return (
		<div className="flex justify-center w-6">
			<ArrowPathIcon className="h-4 w-4 text-blue-400 transform rotate-90" />
		</div>
	);
}

function CheckItem({ children }: { children: ReactNode }) {
	return (
		<div className="flex items-start">
			<div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
				<CheckIcon className="h-3 w-3 text-blue-600" />
			</div>
			<span className="text-gray-700 text-sm">{children}</span>
		</div>
	);
}
