import Hero from "@/components/layout/Hero";
import Introduction from "@/components/layout/Introduction";
import Features from "@/components/layout/Features";
import Testimonials from "@/components/layout/Testimonials";
import Pricing from "@/components/layout/Pricing";
import GetStarted from "@/components/layout/GetStarted";
import Footer from "@/components/layout/Footer";

export default function Home() {
	return (
		<main className="flex flex-col gap-y-16 px-8">
			<Hero />
			<Introduction />
			<Features />
			<Testimonials />
			<Pricing />
			<GetStarted />
			<Footer />
		</main>
	);
}
