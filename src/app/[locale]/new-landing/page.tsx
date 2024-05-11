import Hero from "./_components/layout/Hero";
import Introduction from "./_components/layout/Introduction";
import Features from "./_components/layout/Features";
import Testimonials from "./_components/layout/Testimonials";
import Pricing from "./_components/layout/Pricing";
import GetStarted from "./_components/layout/GetStarted";
import Footer from "./_components/layout/Footer";

// import { FreeChapters } from "./_components/FreeChapters";
// import { HowItWorks } from "./_components/HowItWorks";
// import { Resources } from "./_components/Resources";

export default function Home() {
	return (
		<main className="flex flex-col gap-y-16 px-8">
			<Hero />
			<Introduction />
			<Features />
			<Testimonials />
			{/* <HowItWorks /> */}
			{/* <Resources /> */}
			{/* <FreeChapters /> */}
			<Pricing />
			<GetStarted />
			<Footer />
		</main>
	);
}
