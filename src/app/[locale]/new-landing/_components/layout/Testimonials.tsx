import { type ImageProps } from "next/image";
import { GridPattern } from "@/components/GridPattern";
import Testimonial from "../Testimonial";

import avatarMichal from "@/images/avatars/michal-tarnowski.jpg";

// * this is important to enforce because `role` is a key used in translations
type TestimonialRole = "founder";

export type TestimonialAuthor = {
	name: string;
	role: TestimonialRole;
	company: string;
	reviewKey: string;
	image: ImageProps["src"];
};

const testimonials: TestimonialAuthor[] = [
	{
		name: "Michal Tarnowski",
		role: "founder",
		company: "Trifolium Belgium Consulting SRL",
		image: avatarMichal,
		reviewKey: "michal-tarnowski",
	},
];

export default function Testimonials() {
	return (
		<section
			id="testimonials"
			aria-label="Testimonials"
			className="flex flex-col items-center relative bg-slate-100 py-16 sm:py-32 -mx-8"
		>
			<div className="text-slate-900/10">
				<GridPattern x="50%" patternTransform="translate(0 80)" />
			</div>

			{testimonials.map((author) => {
				return <Testimonial key={author.name} author={author} />;
			})}
		</section>
	);
}
