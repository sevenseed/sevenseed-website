"use client";

import HeroSection from "./components/HeroSection";
import BrusselsSection from "./components/BrusselsSection";
import TechFocusSection from "./components/TechFocusSection";
import PartnersSection from "./components/PartnersSection";
import ProgramBenefitsSection from "./components/ProgramBenefitsSection";
import DealSection from "./components/DealSection";
import FoundersSection from "./components/FoundersSection";
import CTASection from "./components/CTASection";

export default function ProgramPage() {
	return (
		<main className="min-h-screen bg-white  max-w-7xl mx-auto">
			<HeroSection />
			<BrusselsSection />
			<TechFocusSection />
			<PartnersSection />
			<ProgramBenefitsSection />
			<DealSection />
			<FoundersSection />
			<CTASection />
		</main>
	);
}
