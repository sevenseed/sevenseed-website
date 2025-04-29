import { useTranslations } from "next-intl";

const Taglines = () => {
	const t = useTranslations("Grants-taglines");
	const taglines = [
		{
			name: t("tagline1"),
			description: t("description1"),
		},
		{
			name: "From Concept to Funding:",
			description: "Guiding SMEs Through the Grant Challenges and Beyond",
		},
		{
			name: "Europe Innovation Landscape:",
			description:
				"Expert Mentoring, Securing Funding, Partnerships, and Strategic Support",
		},
	];
	return (
		<div>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:mt-18 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
						{taglines.map((tagline) => (
							<div
								key={tagline.name}
								className="flex flex-col text-center gap-y-2 border-l border-x-gray-300 pl-6"
							>
								<dt className="flex items-center justify-center text-3xl font-display font-extrabold text-slate-900 h-10">
									{tagline.name}
								</dt>
								<dd className="mt-auto flex flex-auto flex-col text-base leading-7 text-gray-500">
									<p className="flex-auto">{tagline.description}</p>
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
};

export default Taglines;
