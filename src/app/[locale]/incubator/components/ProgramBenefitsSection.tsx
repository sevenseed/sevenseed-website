"use client";

import {
	BuildingLibraryIcon,
	CurrencyEuroIcon,
	DocumentTextIcon,
	ShieldCheckIcon,
	UserGroupIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import type { ReactNode } from "react";
import { useState } from "react";

export default function ProgramBenefitsSection() {
	const [activeBenefit, setActiveBenefit] = useState<string>("entity");

	return (
		<div className="py-20 md:py-28 relative overflow-hidden w-full max-w-7xl mx-auto">
			<div className="container mx-auto px-4 relative z-10">
				<div className="text-center mb-16">
					<div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
						Program Benefits
					</div>

					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						Everything You Need for{" "}
						<span className="text-blue-600">Defence Market Entry</span>
					</h2>

					<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
						Comprehensive support for dual-use startups entering the European
						defence ecosystem.
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
									isActive={activeBenefit === "entity"}
									onClick={() => setActiveBenefit("entity")}
									icon={<BuildingLibraryIcon className="h-6 w-6" />}
									title="Belgian Entity Setup"
									label="Legal Entity"
								/>

								<BenefitNavItem
									isActive={activeBenefit === "procurement"}
									onClick={() => setActiveBenefit("procurement")}
									icon={<ShieldCheckIcon className="h-6 w-6" />}
									title="Path to Procurement"
									label="Procurement"
								/>

								<BenefitNavItem
									isActive={activeBenefit === "funding"}
									onClick={() => setActiveBenefit("funding")}
									icon={<CurrencyEuroIcon className="h-6 w-6" />}
									title="Funding & Grants"
									label="Funding"
								/>

								<BenefitNavItem
									isActive={activeBenefit === "mentorship"}
									onClick={() => setActiveBenefit("mentorship")}
									icon={<UserGroupIcon className="h-6 w-6" />}
									title="Expert Mentorship"
									label="Mentorship"
								/>

								<BenefitNavItem
									isActive={activeBenefit === "events"}
									onClick={() => setActiveBenefit("events")}
									icon={<DocumentTextIcon className="h-6 w-6" />}
									title="Events & Networks"
									label="Events"
								/>
							</div>
						</div>
					</div>

					{/* Benefit Content */}
					<div className="lg:w-2/3">
						<div className="relative">
							{/* Belgian Entity */}
							<BenefitContent
								isActive={activeBenefit === "entity"}
								title="Belgian Legal Entity (SRL)"
								description="Establish your official Belgian presence with full legal and administrative support. Complete incorporation to unlock EU market access."
								imageSrc="/images/company.jpg"
								imageAlt="Belgian entity setup"
								features={[
									"Complete SRL incorporation and legal presence",
									"VAT registration and compliance handling",
									"Business address and administrative support",
								]}
							/>

							{/* Path to Procurement */}
							<BenefitContent
								isActive={activeBenefit === "procurement"}
								title="Clear Pathways to Procurement"
								description="Navigate the complex procurement landscape with expert guidance. Access corporate partners and government contracts through our established network."
								imageSrc="/images/strategic.jpg"
								imageAlt="Procurement pathways"
								features={[
									"Direct access to corporate procurement teams",
									"Government tender workshops and preparation",
									"Defence and dual-use market navigation",
								]}
							/>

							{/* Funding & Grants */}
							<BenefitContent
								isActive={activeBenefit === "funding"}
								title="EU Funding & Grant Support"
								description="Access millions in non-dilutive funding. We help identify and apply for EU grants, including EDF, Horizon Europe, and dual-use technology programs."
								imageSrc="/images/banking.jpg"
								imageAlt="EU funding access"
								features={[
									"Grant identification and application support",
									"Tender eligibility and compliance",
									"Non-dilutive funding opportunities",
								]}
							/>

							{/* Expert Mentorship */}
							<BenefitContent
								isActive={activeBenefit === "mentorship"}
								title="Expert Mentorship Network"
								description="Learn from successful entrepreneurs and industry experts. Get personalized guidance on strategy, fundraising, and scaling in the European market."
								imageSrc="/images/atomium.jpg"
								imageAlt="Expert mentorship"
								features={[
									"1-on-1 coaching with industry veterans",
									"Strategic advice on market entry",
									"Fundraising and investor introductions",
								]}
							/>

							{/* Events & Networks */}
							<BenefitContent
								isActive={activeBenefit === "events"}
								title="Major Event Representation"
								description="Get visibility at major European defence and tech events. We ensure your startup is represented where key decisions and partnerships are made."
								imageSrc="/images/eu.jpg"
								imageAlt="Event representation"
								features={[
									"Representation at major EU defence events",
									"Access to exclusive industry gatherings",
									"Direct introductions to key stakeholders",
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
			<div className="relative h-64 md:h-80 bg-linear-to-r from-blue-50 to-white">
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
							<div className="shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
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
