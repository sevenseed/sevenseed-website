"use client";

import Image from "next/image";
import { useState } from "react";
import {
	BuildingLibraryIcon,
	GlobeAltIcon,
	LightBulbIcon,
	CurrencyEuroIcon,
	BanknotesIcon,
} from "@heroicons/react/24/outline";
import type { ReactNode } from "react";

export default function ProgramBenefitsSection() {
	const [activeBenefit, setActiveBenefit] = useState<string>("company");

	return (
		<div className="py-20 md:py-28 relative overflow-hidden w-full max-w-7xl mx-auto">
			<div className="container mx-auto px-4 relative z-10">
				<div className="text-center mb-16">
					<div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
						Program Benefits
					</div>

					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						Everything You Need to{" "}
						<span className="text-blue-600">Land, Launch, and Lead</span>
					</h2>

					<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
						Join a hand-picked cohort of 12-15 US-based startups for an
						intensive, hands-on program.
					</p>
				</div>

				{/* Interactive Benefits Display */}
				<div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
					{/* Benefit Navigation */}
					<div className="lg:w-1/3">
						<div className="sticky top-8">
							<h3 className="text-xl font-semibold mb-6 text-gray-800">
								Program Components
							</h3>

							<div className="space-y-3">
								<BenefitNavItem
									isActive={activeBenefit === "company"}
									onClick={() => setActiveBenefit("company")}
									icon={<BuildingLibraryIcon className="h-6 w-6" />}
									title="Company Formation"
									label="Company Setup"
								/>

								<BenefitNavItem
									isActive={activeBenefit === "relocation"}
									onClick={() => setActiveBenefit("relocation")}
									icon={<GlobeAltIcon className="h-6 w-6" />}
									title="Relocation Assistance"
									label="Relocation"
								/>

								<BenefitNavItem
									isActive={activeBenefit === "guidance"}
									onClick={() => setActiveBenefit("guidance")}
									icon={<LightBulbIcon className="h-6 w-6" />}
									title="Strategic Guidance"
									label="Mentorship"
								/>

								<BenefitNavItem
									isActive={activeBenefit === "funding"}
									onClick={() => setActiveBenefit("funding")}
									icon={<CurrencyEuroIcon className="h-6 w-6" />}
									title="EU Funding Access"
									label="Funding"
								/>

								<BenefitNavItem
									isActive={activeBenefit === "banking"}
									onClick={() => setActiveBenefit("banking")}
									icon={<BanknotesIcon className="h-6 w-6" />}
									title="Banking Setup"
									label="Banking"
								/>
							</div>
						</div>
					</div>

					{/* Benefit Content */}
					<div className="lg:w-2/3">
						<div className="relative">
							{/* Company Formation */}
							<BenefitContent
								isActive={activeBenefit === "company"}
								title="Seamless Company Formation"
								description="We handle it all – legal setup, financial plan, statutes, registered address, VAT, compliance. Hit the ground running."
								imageSrc="/images/company.jpg"
								imageAlt="Company formation"
								features={[
									"Complete legal entity setup",
									"Financial plan development",
									"VAT and compliance handling",
								]}
							/>

							{/* Relocation */}
							<BenefitContent
								isActive={activeBenefit === "relocation"}
								title="Relocation Assistance"
								description="Moving continents is complex. We offer guidance on visa processes, housing advice, and cultural integration support. Your soft landing guaranteed."
								imageSrc="/images/relocation.jpg"
								imageAlt="Relocation assistance"
								features={[
									"Visa and immigration process guidance",
									"Housing assistance",
									"Cultural integration support",
								]}
							/>

							{/* Strategic Guidance */}
							<BenefitContent
								isActive={activeBenefit === "guidance"}
								title="Strategic Guidance"
								description="1-on-1 coaching tailored to your startup. Refine strategy, nail your fundraising narrative, and navigate the European landscape."
								imageSrc="/images/strategic.jpg"
								imageAlt="Strategic guidance"
								features={[
									"Personalized mentorship",
									"Fundraising strategy",
									"European market navigation",
								]}
							/>

							{/* EU Funding */}
							<BenefitContent
								isActive={activeBenefit === "funding"}
								title="EU Funding Access"
								description="Get expert help identifying and applying for lucrative European grants and subsidies. Tap into millions in non-dilutive funding."
								imageSrc="/images/eu.jpg"
								imageAlt="EU funding access"
								features={[
									"Grant identification and application",
									"Subsidy program navigation",
									"Non-dilutive funding opportunities",
								]}
							/>

							{/* Banking */}
							<BenefitContent
								isActive={activeBenefit === "banking"}
								title="Banking Setup"
								description="We'll help you navigate the European banking system and set up your business accounts with trusted financial institutions."
								imageSrc="/images/banking.jpg"
								imageAlt="Banking setup"
								features={[
									"Assistance opening a European business banking account with our partner",
									"Company set up without blocked capital",
									"Payment processing credits on your first 5000€",
								]}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

interface BenefitNavItemProps {
	isActive: boolean;
	onClick: () => void;
	icon: ReactNode;
	title: string;
	label: string;
}

function BenefitNavItem({
	isActive,
	onClick,
	icon,
	title,
	label,
}: BenefitNavItemProps) {
	return (
		<button
			onClick={onClick}
			className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-start gap-4 ${
				isActive
					? "bg-white shadow-md border border-blue-100"
					: "hover:bg-white/50"
			}`}
		>
			<div
				className={`p-2 rounded-lg ${isActive ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"}`}
			>
				{icon}
			</div>
			<div>
				<div
					className={`text-xs font-medium ${isActive ? "text-blue-600" : "text-gray-500"}`}
				>
					{label}
				</div>
				<div
					className={`font-medium ${isActive ? "text-gray-900" : "text-gray-700"}`}
				>
					{title}
				</div>
			</div>
		</button>
	);
}

interface BenefitContentProps {
	isActive: boolean;
	title: string;
	description: string;
	imageSrc: string;
	imageAlt: string;
	features: string[];
}

function BenefitContent({
	isActive,
	title,
	description,
	imageSrc,
	imageAlt,
	features,
}: BenefitContentProps) {
	if (!isActive) return null;

	return (
		<div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 animate-fade-in">
			<div className="relative h-64 md:h-80 bg-gradient-to-r from-blue-50 to-white">
				<Image
					src={imageSrc || "/placeholder.svg"}
					alt={imageAlt}
					fill
					className="object-cover "
				/>
			</div>

			<div className="p-8">
				<h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
				<p className="text-gray-600 mb-6">{description}</p>

				<div className="space-y-3">
					{features.map((feature, index) => (
						<div key={index} className="flex items-start">
							<div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
								<svg
									className="h-4 w-4 text-blue-600"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<span className="text-gray-700">{feature}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
