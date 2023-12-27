import { AboutUs } from "@/components/AboutUs";
import { Footer } from "@/components/Footer";
import { FreeChapters } from "@/components/FreeChapters";
import Hero from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Introduction } from "@/components/Introduction";
import NavBar from "@/components/TranslatedNavBar";
import { Pricing } from "@/components/Pricing";
import { Resources } from "@/components/Resources";
import { Testimonial } from "@/components/Testimonial";
import avatarMichal from "@/images/avatars/michal-tarnowski.jpg";
import { useTranslations } from "next-intl";

export default function Home() {
	const t = useTranslations("Testimonials");

	return (
		<>
			<Hero />
			<Introduction />
			<NavBar />
			<Testimonial
				id="testimonial"
				author={{
					name: "Michal Tarnowski",
					role: t("authorTitle"),
					image: avatarMichal,
				}}
			>
				<p>“{t("review")}”</p>
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
