import { CheckIcon } from "@/components/CheckIcon";
import clsx from "clsx";
import { useTranslations } from "next-intl";

function Plan({
	nameKey,
	descriptionKey,
	price,
	featureKeys,
}: {
	nameKey: string;
	descriptionKey: string;
	price: string;
	featureKeys: string[];
}) {
	const t = useTranslations("Pricing");

	return (
		<div className="flex-auto max-w-4xl bg-slate-50 text-slate-900 border rounded-xl">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
				<div
					className={clsx(
						"flex flex-col justify-center flex-auto gap-y-2 pe-4 ps-4 py-8 text-center",
						"sm:ps-8 sm:py-4 sm:border-r sm:text-start",
						"md:py-0",
					)}
				>
					<h3 className="text-2xl font-semibold tracking-tight text-balance">
						{t(nameKey)}
					</h3>
					<p className="tracking-tight text-slate-600 text-balance">
						{t(descriptionKey)}
					</p>
				</div>
				<div
					className={clsx(
						"flex justify-center flex-auto",
						"tracking-tight text-slate-900",
						"p-8 border-t",
						"md:flex md:px-4 md:col-span-1 md:border-r md:border-t-0 md:order-none",
						"sm:block sm:text-sm sm:col-span-2 sm:columns-2 sm:order-last",
					)}
				>
					<ul className="flex flex-col gap-y-2 sm:gap-y-1">
						{featureKeys.map((key) => (
							<li key={key} className="flex gap-x-1">
								<CheckIcon className="h-6 w-6 flex-none fill-slate-600" />
								<span>{t(key)}</span>
							</li>
						))}
					</ul>
				</div>
				<div
					className={clsx(
						"flex items-center justify-center flex-auto p-8 border-t",
						"sm:pe-8 sm:border-t-0",
					)}
				>
					<div>
						<div className="flex items-start font-display font-bold">
							<span className="text-[1.75rem] leading-tight text-slate-500 self-start mt-1">
								€
							</span>
							<span className="text-7xl tracking-tight">{price}</span>
						</div>
						<span className="block text-slate-500 ml-6 -mt-2">
							one-time fee
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function Pricing() {
	const t = useTranslations("Pricing");

	const basicPlanFeatures = [
		"basicPlanFeature1",
		"basicPlanFeature2",
		"basicPlanFeature3",
		"basicPlanFeature4",
		"basicPlanFeature5",
		"basicPlanFeature6",
	];

	return (
		<section
			id="pricing"
			aria-labelledby="pricing-title"
			className="max-w-3xl flex flex-col justify-center gap-y-8 mx-auto"
		>
			<div className="max-w-2xl flex flex-col gap-y-6">
				<p className="font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
					{t("sectionHeading")}
				</p>
				<p className="font-display text-xl font-thin tracking-tight text-slate-900">
					{t("subDescription")}
				</p>
			</div>
			<div className="flex sm:justify-center">
				<Plan
					nameKey="basicPlanName"
					descriptionKey="basicPlanDescription"
					price="2000"
					featureKeys={basicPlanFeatures}
				/>
			</div>
		</section>
	);
}
