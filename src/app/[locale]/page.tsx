"use client";

import HeroSection from "./incubator/components/HeroSection";
import BrusselsSection from "./incubator/components/BrusselsSection";
import TechFocusSection from "./incubator/components/TechFocusSection";
import PartnersSection from "./incubator/components/PartnersSection";
import ProgramBenefitsSection from "./incubator/components/ProgramBenefitsSection";
import DealSection from "./incubator/components/DealSection";
import FoundersSection from "./incubator/components/FoundersSection";
import CTASection from "./incubator/components/CTASection";
import MentorsSection from "./incubator/components/MentorsSection";

export default function Home() {
	return (
		<main className="min-h-screen bg-white mx-auto ">
			<HeroSection />
			<TechFocusSection />
			<BrusselsSection />
			<PartnersSection />
			<ProgramBenefitsSection />
			<MentorsSection />
			<DealSection />
			<FoundersSection />
			<CTASection />
		</main>
	);
}
