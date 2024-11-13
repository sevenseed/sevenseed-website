import { useTranslations } from "next-intl";

const Services = () => {
	const t = useTranslations("Grants-services");
	const serviceKeys = [
		"service",
		"service2",
		"service3",
		"service4",
		"service5",
		"service6",
	];

	return (
		<div className="py-20 lg:py-40">
			<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
				<div className="mb-5 max-w-4xl m-auto">
					<h1 className="font-display font-extrabold text-slate-900 lg:text-5xl text-5xl">
						{t("title")}
					</h1>
					<p className=" text-pretty text-sm font-medium text-gray-500 sm:text-lg">
						{t("subtitle")}
					</p>
				</div>
				<div className="-mx-6 grid grid-cols-1 gap-5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3 drop-shadow-xl">
					{serviceKeys.map((key, index) => (
						<div
							key={index}
							className="bg-gray-50 border-x-cyan-900 p-8 sm:p-10 text-center flex flex-col gap-y-4"
						>
							<h1 className="font-display text-4xl font-extrabold text-blue-700 sm:text-4xl">
								{t(`${key}.title`)}
							</h1>
							<p className=" text-pretty text-sm font-medium text-gray-500 sm:text-sm">
								{t(`${key}.description`)}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
