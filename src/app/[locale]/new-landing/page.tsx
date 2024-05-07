import Hero from "./_components/layout/Hero";
import Introduction from "./_components/layout/Introduction";
import Footer from "./_components/layout/Footer";

import { FreeChapters } from "./_components/FreeChapters";
import { HowItWorks } from "./_components/HowItWorks";
import { Pricing } from "./_components/Pricing";
import { Resources } from "./_components/Resources";
import { Testimonial } from "./_components/Testimonial";
import { useTranslations } from "next-intl";

import avatarMichal from "@/images/avatars/michal-tarnowski.jpg";

export default function Home() {
	const t = useTranslations("Testimonials");

	return (
		<>
			<Hero />
			<Introduction />
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
			<Footer />
		</>
	);
}
