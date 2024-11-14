import { useTranslations } from "next-intl";

const DynamicMarket = () => {
	const t = useTranslations("Dynamic-Market");

	return (
		<div className=" py-24 sm:py-32">
			<div className="container mx-auto px-6 sm:px-8">
				<div className="max-w-4xl mx-auto text-center mb-16">
					<h1 className="font-display text-4xl font-extrabold text-slate-900 lg:text-5xl">
						{t("headerTitle")}
					</h1>
					<p className="mt-4 text-lg text-gray-600">
						{t("headerDescription")}
					</p>
				</div>

				<div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
					<div className="bg-white shadow-md rounded-lg p-8">
						<h2 className="text-3xl font-semibold text-blue-700 mb-4">
							{t("dynamicMarketTitle")}
						</h2>
						<p className="text-gray-700 text-lg">
							{t("dynamicMarketDescription")}
						</p>
					</div>

					<div className="bg-white shadow-md rounded-lg p-8">
						<h2 className="text-3xl font-semibold text-blue-700 mb-4">
							{t("strategicPartnersTitle")}
						</h2>
						<p className="text-gray-700 text-lg">
							{t("strategicPartnersDescription")}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DynamicMarket;
