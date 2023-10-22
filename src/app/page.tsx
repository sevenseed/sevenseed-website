import { AboutUs } from "@/components/AboutUs";
import { Footer } from "@/components/Footer";
import { FreeChapters } from "@/components/FreeChapters";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Introduction } from "@/components/Introduction";
import { NavBar } from "@/components/NavBar";
import { Pricing } from "@/components/Pricing";
import { Resources } from "@/components/Resources";
import { Testimonial } from "@/components/Testimonial";
import avatarImage1 from "@/images/avatars/avatar-1.png";

export default function Home() {
	return (
		<>
			<Hero />
			<Introduction />
			<NavBar />
			<Testimonial
				id="testimonial-from-tommy-stroman"
				author={{
					name: "Someone Famous",
					role: "Financial Consultant",
					image: avatarImage1,
				}}
			>
				<p>“I love Seven Seed!”</p>
			</Testimonial>
			<HowItWorks />
			<Resources />
			<FreeChapters />
			<Pricing />
			<AboutUs />
			<Footer />
		</>
	);
}
