import Image from "next/image";
import { type TestimonialAuthor } from "./layout/Testimonials";
import { useTranslations } from "next-intl";
import Container from "./Container";
import { StarRating } from "./StarRating";

export default function Testimonial({ author }: { author: TestimonialAuthor }) {
	const t = useTranslations("Testimonials");

	return (
		<Container size="xs" className="relative bg-white border rounded-xl py-16 px-8">
			<figure className="flex flex-col sm:items-center gap-y-6">
				<StarRating />
				<blockquote className="font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-center text-balance">
					“{t(`review.${author.reviewKey}`)}”
				</blockquote>
				<figcaption className="flex gap-2 sm:flex-col sm:items-center sm:text-center">
					<Image
						className="h-12 w-12 object-cover rounded-full"
						src={author.image}
						alt={`Avatar of ${author.name}`}
						width={48}
						height={48}
						aria-hidden
					/>
					<div>
						<div className="font-medium leading-6 tracking-tight text-slate-900">
							{author.name}
						</div>
						<div className="text-sm text-slate-600 text-balance leading-tight sm:leading-normal">
							<span className="sm:block">{t(author.role)}</span>
							<span className="sm:hidden">, </span>
							<span>{author.company}</span>
						</div>
					</div>
				</figcaption>
			</figure>
		</Container>
	);
}
