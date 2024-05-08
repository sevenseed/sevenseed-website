import Image, { type ImageProps } from "next/image";

import { Container } from "@/components/Container";
import { GridPattern } from "@/components/GridPattern";
import { StarRating } from "./StarRating";
import { ReactNode } from "react";

export function Testimonial({
	id,
	author,
	children,
}: {
	id: string;
	author: { name: string; role: string; image: ImageProps["src"] };
	children: ReactNode;
}) {
	return (
		<aside
			id={id}
			aria-label={`Testimonial from ${author.name}`}
			className="relative bg-slate-100 py-16 sm:py-32"
		>
			<div className="text-slate-900/10">
				<GridPattern x="50%" patternTransform="translate(0 80)" />
			</div>
			<Container size="xs" className="relative bg-slate-50 border rounded-xl py-16 mx-4 md:mx-auto">
				<figure className="flex flex-col sm:items-center gap-y-6">
					<div className="text-slate-900">
						<StarRating />
					</div>
					<blockquote className="sm:px-8 font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-center text-balance">
						{children}
					</blockquote>
					<figcaption className="flex items-center sm:justify-center">
						<div className="overflow-hidden rounded-full bg-slate-200">
							<Image
								className="h-12 w-12 object-cover"
								src={author.image}
								alt=""
								width={48}
								height={48}
							/>
						</div>
						<div className="ml-4">
							<div className="text-base font-medium leading-6 tracking-tight text-slate-900">
								{author.name}
							</div>
							<div className="mt-1 text-sm text-slate-600">
								{author.role}
							</div>
						</div>
					</figcaption>
				</figure>
			</Container>
		</aside>
	);
}
