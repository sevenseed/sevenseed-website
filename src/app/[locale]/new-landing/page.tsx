import Hero from "./_components/layout/Hero";
import Introduction from "./_components/layout/Introduction";
// import Footer from "./_components/layout/Footer";
import Testimonials from "./_components/layout/Testimonials";

// import { FreeChapters } from "./_components/FreeChapters";
// import { HowItWorks } from "./_components/HowItWorks";
// import { Pricing } from "./_components/Pricing";
// import { Resources } from "./_components/Resources";

export default function Home() {
	return (
		<main className="flex flex-col gap-y-16 px-8">
			<Hero />
			<Introduction />
			<Testimonials />
			{/* <HowItWorks /> */}
			{/* <Resources /> */}
			{/* <FreeChapters /> */}
			{/* <Pricing /> */}
			{/* <Footer /> */}
		</main>
	);
}
