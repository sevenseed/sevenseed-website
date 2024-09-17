import clsx from "clsx";
import { useTranslations } from "next-intl";
import { CheckIcon } from "@/components/CheckIcon";

const basicPlanFeatures = [
	"basicPlanFeature1",
	"basicPlanFeature2",
	"basicPlanFeature3",
	"basicPlanFeature4",
	"basicPlanFeature5",
	"basicPlanFeature6",
	"basicPlanFeature7",
];

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
		<div className="max-w-4xl flex-auto border rounded-xl bg-slate-50 text-slate-900">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
				<div
					className={clsx(
						"flex flex-col flex-auto justify-center gap-y-2 py-8 text-center pe-4 ps-4",
						"sm:ps-8 sm:py-4 sm:border-r sm:text-start",
						"md:py-0",
					)}
				>
					<h3 className="font-semibold text-2xl text-balance tracking-tight">
						{t(nameKey)}
					</h3>
					<p className="text-balance text-slate-600 tracking-tight">
						{t(descriptionKey)}
					</p>
				</div>
				<div
					className={clsx(
						"flex flex-auto justify-center",
						"tracking-tight text-slate-900",
						"p-8 border-t",
						"md:flex md:px-4 md:col-span-1 md:border-r md:border-t-0 md:order-none",
						"sm:block sm:text-sm sm:col-span-2 sm:columns-2 sm:order-last",
					)}
				>
					<ul className="flex flex-col gap-y-2 sm:gap-y-1">
						{featureKeys.map((key) => (
							<li key={key} className="flex gap-x-1">
								<CheckIcon className="h-6 flex-none fill-slate-600 w-6" />
								<span>{t(key)}</span>
							</li>
						))}
					</ul>
				</div>
				<div
					className={clsx(
						"flex flex-auto justify-center items-center p-8 border-t",
						"sm:pe-8 sm:border-t-0",
					)}
				>
					<div>
						<div className="flex items-start font-bold font-display">
							<span className="self-start mt-1 text-[1.75rem] text-slate-500 leading-tight">
								€
							</span>
							<span className="text-7xl tracking-tight">{price}</span>
						</div>
						<span className="block -mt-2 ml-6 text-slate-500">
							HVAT — one-time fee
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function Pricing() {
	const t = useTranslations("Pricing");

	return (
		<section
			id="pricing"
			aria-labelledby="pricing-title"
			className="max-w-3xl flex flex-col justify-center gap-y-8 mx-auto"
		>
			<div className="max-w-2xl flex flex-col gap-y-6">
				<p className="font-display font-extrabold text-5xl text-slate-900 sm:text-6xl tracking-tight">
					{t("sectionHeading")}
				</p>
				<p className="font-display font-thin text-slate-900 text-xl tracking-tight">
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
