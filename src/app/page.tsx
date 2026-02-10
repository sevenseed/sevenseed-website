import HeroSection from "@/components/sections/HeroSection";
import PillarsSection from "@/components/sections/PillarsSection";

export default function Home() {
	return (
		<main className="min-h-screen bg-white mx-auto">
			<HeroSection />
			<PillarsSection />
		</main>
	);
}
