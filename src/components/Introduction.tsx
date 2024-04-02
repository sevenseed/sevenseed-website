import { CheckIcon } from "@/components/CheckIcon";
import { Container } from "@/components/Container";
import { useTranslations } from "next-intl";
import Link from "next/link";

const FEATURES = ["feature1", "feature2", "feature3", "feature4", "feature5"];

export function Introduction() {
	const t = useTranslations("Introduction");

	return (
		<section
			id="introduction"
			aria-label="Introduction"
			className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
		>
			<Container className="text-lg tracking-tight text-slate-700">
				<p className="font-display text-4xl font-bold tracking-tight text-slate-900">
					{t("mainHeading")}
				</p>
				<p className="mt-4">{t("introParagraph")}</p>
				<ul role="list" className="mt-8 space-y-3">
					{FEATURES.map((feature) => (
						<li key={feature} className="flex">
							<CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
							<span className="ml-4">{t(feature)}</span>
						</li>
					))}
				</ul>
				<p className="mt-10">
					<Link
						href="#whitepaper"
						className="text-base font-medium text-blue-600 hover:text-blue-800"
					>
						{t("linkText")} <span aria-hidden="true">&rarr;</span>
					</Link>
				</p>
			</Container>
		</section>
	);
}
