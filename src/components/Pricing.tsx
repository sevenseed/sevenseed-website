import clsx from "clsx";
import { Button } from "@/components/Button";
import { CheckIcon } from "@/components/CheckIcon";
import { Container } from "@/components/Container";
import { GridPattern } from "@/components/GridPattern";
import { SectionHeading } from "@/components/SectionHeading";
import { useTranslations } from "next-intl";

function Plan({
	nameKey,
	descriptionKey,
	price,
	featureKeys,
	href,
	featured = false,
}: {
	nameKey: string;
	descriptionKey: string;
	price: string;
	featureKeys: string[];
	href: string;
	featured?: boolean;
}) {
	const t = useTranslations("Pricing");

	return (
		<div
			className={clsx(
				"relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12",
				featured && "bg-blue-600 sm:shadow-lg",
			)}
		>
			{featured && (
				<div className="absolute inset-0 text-white/10 [mask-image:linear-gradient(white,transparent)]">
					<GridPattern x="50%" y="50%" />
				</div>
			)}
			<div className="relative flex flex-col">
				<h3
					className={clsx(
						"mt-7 text-lg font-semibold tracking-tight",
						featured ? "text-white" : "text-slate-900",
					)}
				>
					{t(nameKey)}
				</h3>
				<p
					className={clsx(
						"mt-2 text-lg tracking-tight",
						featured ? "text-white" : "text-slate-600",
					)}
				>
					{t(descriptionKey)}
				</p>
				<p className="order-first flex font-display font-bold">
					<span
						className={clsx(
							"text-[1.75rem] leading-tight",
							featured ? "text-blue-200" : "text-slate-500",
						)}
					>
						€
					</span>
					<span
						className={clsx(
							"ml-1 mt-1 text-7xl tracking-tight",
							featured ? "text-white" : "text-slate-900",
						)}
					>
						{price}
					</span>
				</p>
				<div className="order-last mt-8">
					<ul
						role="list"
						className={clsx(
							"-my-2 divide-y text-base tracking-tight",
							featured
								? "divide-white/10 text-white"
								: "divide-slate-200 text-slate-900",
						)}
					>
						{featureKeys.map((key) => (
							<li key={key} className="flex py-2">
								<CheckIcon
									className={clsx(
										"h-8 w-8 flex-none",
										featured ? "fill-white" : "fill-slate-600",
									)}
								/>
								<span className="ml-4">{t(key)}</span>
							</li>
						))}
					</ul>
				</div>
				<Button
					href={href}
					color={featured ? "white" : "slate"}
					className="mt-8"
				>
					{t("getStarted")}
				</Button>
			</div>
		</div>
	);
}

export function Pricing() {
	const t = useTranslations("Pricing");

	const basicPlanFeatures = [
		"basicPlanFeature1",
		"basicPlanFeature2",
		"basicPlanFeature3",
		"basicPlanFeature4",
		"basicPlanFeature5",
		"basicPlanFeature6",
	];

	const foreignEntrepreneurPlanFeatures = [
		"foreignEntrepreneurPlanFeature1",
		"foreignEntrepreneurPlanFeature2",
		"foreignEntrepreneurPlanFeature3",
		"foreignEntrepreneurPlanFeature4",
	];

	return (
		<section
			id="pricing"
			aria-labelledby="pricing-title"
			className="scroll-mt-14 pb-8 pt-16 sm:scroll-mt-32 sm:pb-10 sm:pt-20 lg:pb-16 lg:pt-32"
		>
			<Container>
				<SectionHeading number="3" id="pricing-title">
					{t("sectionHeading")}
				</SectionHeading>
				<p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
					{t("mainDescription")}
				</p>
				<p className="mt-8 font-display text-xl font-thin tracking-tight text-slate-900">
					{t("subDescription")}
				</p>
			</Container>
			<div className="mx-auto mt-16 max-w-5xl lg:px-6">
				<div className="grid bg-slate-50 sm:px-6 sm:pb-16 md:grid-cols-2 md:rounded-6xl md:px-8 md:pt-16 lg:p-20">
					<Plan
						nameKey="basicPlanName"
						descriptionKey="basicPlanDescription"
						price="2000"
						featureKeys={basicPlanFeatures}
						href="/signup"
					/>
					<Plan
						featured
						nameKey="foreignEntrepreneurPlanName"
						descriptionKey="foreignEntrepreneurPlanDescription"
						price="2200"
						featureKeys={foreignEntrepreneurPlanFeatures}
						href="/signup"
					/>
				</div>
			</div>
		</section>
	);
}
