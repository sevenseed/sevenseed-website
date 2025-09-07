import { ArrowPathIcon, CheckIcon } from "@heroicons/react/24/outline";
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
						The Program:{" "}
						<span className="text-blue-600">Funded & Collaborative</span>
					</h2>

					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						We invest in your success with cash, resources, and a unique
						redistribution model that aligns everyone&apos;s interests.
					</p>
				</div>

				{/* Main Deal Content - Two Column Layout */}
				<div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
					{/* Left Column - Deal Terms */}
					<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
						<h3 className="text-xl font-bold mb-6 text-center">
							Program Structure
						</h3>

						<div className="grid grid-cols-3 gap-4 mb-8">
							{/* Cash Contribution */}
							<div className="text-center">
								<div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-3 mx-auto">
									<span className="text-blue-600 font-bold text-xl">
										€
									</span>
								</div>
								<h4 className="text-lg font-bold mb-1 text-gray-900">
									€12,500
								</h4>
								<p className="text-xs text-blue-600 font-medium mb-1">
									Cash Contribution
								</p>
								<p className="text-xs text-gray-600">Per startup</p>
							</div>

							{/* Equity Stake */}
							<div className="text-center">
								<div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-3 mx-auto">
									<span className="text-blue-600 font-bold text-xl">
										%
									</span>
								</div>
								<h4 className="text-lg font-bold mb-1 text-gray-900">
									7%
								</h4>
								<p className="text-xs text-blue-600 font-medium mb-1">
									Equity Stake
								</p>
								<p className="text-xs text-gray-600">For Seven Seed</p>
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
									Redistribution
								</p>
								<p className="text-xs text-gray-600">
									Exit proceeds shared back with cohort
								</p>
							</div>
						</div>

						{/* Profit-Sharing Flow Diagram */}
						<div className="pt-4 border-t border-gray-100 mt-auto">
							<h4 className="text-sm font-medium mb-4 text-center text-gray-700">
								How Redistribution Works
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
										Seven Seed Gets 7%
									</p>
								</div>

								<ArrowFlow />

								<div className="bg-blue-50 p-2 rounded-lg text-center w-24">
									<p className="text-xs font-medium text-gray-800">
										25% Shared Back
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

						<div className="space-y-4 grow flex flex-col justify-center">
							<CheckItem>
								Seven Seed receives proceeds from exits based on its 7%
								stake.
							</CheckItem>
							<CheckItem>
								25% of these across the whole cohort are shared back to
								the other cohort members.
							</CheckItem>
							<CheckItem>
								50% are redistributed to Cohort Investors.
							</CheckItem>
							<CheckItem>
								The remaining 25% are retained by Seven Seed.
							</CheckItem>
							<CheckItem>
								Example: If one cohort members has a €20M exit, €1.4M
								gets redistributed and each cohort participant gets
								~€35K.
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
			<div className="shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
				<CheckIcon className="h-3 w-3 text-blue-600" />
			</div>
			<span className="text-gray-700 text-sm">{children}</span>
		</div>
	);
}
