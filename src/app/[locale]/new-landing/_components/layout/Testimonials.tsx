import { type PropsWithChildren } from "react";
import Image, { type ImageProps } from "next/image";
import { Container } from "@/components/Container";
import { GridPattern } from "@/components/GridPattern";
import { StarRating } from "../StarRating";

type TestimonialAuthor = {
	name: string;
	role: string;
	company: string;
	image: ImageProps["src"];
};

export function Testimonial({
	id,
	author,
	children,
}: PropsWithChildren<{
	id: string;
	author: TestimonialAuthor;
}>) {
	return (
		<aside
			id={id}
			aria-label={`Testimonial from ${author.name}`}
			className="flex flex-col items-center relative bg-slate-100 py-16 sm:py-32 -mx-8"
		>
			<div className="text-slate-900/10">
				<GridPattern x="50%" patternTransform="translate(0 80)" />
			</div>
			<Container
				size="xs"
				className="relative bg-slate-50 border rounded-xl py-16 mx-4"
			>
				<figure className="flex flex-col sm:items-center gap-y-6">
					<div className="text-slate-900">
						<StarRating />
					</div>
					<blockquote className="sm:px-8 font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-center text-balance">
						{children}
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
							<div className="text-sm text-slate-600">
								<span className="sm:block">{author.role}</span>
								<span className="sm:hidden">, </span>
								<span>{author.company}</span>
							</div>
						</div>
					</figcaption>
				</figure>
			</Container>
		</aside>
	);
}
