import { AboutUs } from "@/components/AboutUs";
import { Footer } from "@/components/Footer";
import { FreeChapters } from "@/components/FreeChapters";
import Hero from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Introduction } from "@/components/Introduction";
import { NavBar } from "@/components/NavBar";
import { Pricing } from "@/components/Pricing";
import { Resources } from "@/components/Resources";
import { Testimonial } from "@/components/Testimonial";
import avatarMichal from "@/images/avatars/michal-tarnowski.jpg";

export default function Home() {
	return (
		<>
			<Hero />
			<Introduction />
			<NavBar />
			<Testimonial
				id="testimonial"
				author={{
					name: "Michal Tarnowski",
					role: "Founder, Trifolium Belgium Consulting SRL",
					image: avatarMichal,
				}}
			>
				<p>
					“Seven Seed helped me creating my company quickly and efficiently.
					Great communication and responsiveness!”
				</p>
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
