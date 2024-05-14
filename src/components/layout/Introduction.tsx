import Container from "../Container";
import { CheckIcon } from "@/components/CheckIcon";
import { useTranslations } from "next-intl";

const FEATURES = ["feature1", "feature2", "feature3", "feature4", "feature5"];

export default function Introduction() {
	const t = useTranslations("Introduction");

	return (
		<section
			id="introduction"
			aria-label="Introduction"
			className="flex justify-start sm:justify-center"
		>
			<Container className="flex flex-col gap-y-4 sm:items-center text-lg text-slate-700 text-balance sm:text-center">
				<p className="font-display text-4xl font-bold text-slate-900">
					{t("mainHeading")}
				</p>
				<p className="sm:text-center leading-normal">
					{t("introParagraph")}
				</p>
				<ul role="list" className="flex flex-col items-start gap-y-3">
					{FEATURES.map((feature) => (
						<li key={feature} className="flex gap-x-2">
							<CheckIcon className="h-8 w-8 flex-none -ml-2 fill-blue-500" />
							<span className="">{t(feature)}</span>
						</li>
					))}
				</ul>
			</Container>
		</section>
	);
}
