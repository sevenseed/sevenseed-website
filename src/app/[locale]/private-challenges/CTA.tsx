import { Button } from "@/components/Button";
import { useTranslations } from "next-intl";

const CTA = () => {
	const t = useTranslations("Grants-getStarted");
	const t2 = useTranslations("Private-cta");
	return (
		<div>
			<div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
				<div className="mx-auto max-w-5xl text-center">
					<h2 className="font-display font-extrabold text-blue-700 lg:text-5xl text-4xl">
						{t2("title")}
					</h2>
					<p className="mx-auto mt-6  text-pretty text-lg/8 text-gray-500">
						{t2("description")}
					</p>
					<div className="w-full flex gap-4 justify-between sm:justify-center pt-6">
						<Button
							className="flex-1 sm:flex-none"
							href="/dashboard/get-started"
							color="blue"
						>
							{t("getStarted")}
						</Button>
						<Button
							className="flex-1 sm:flex-none"
							href="/contact"
							variant="outline"
							color="blue"
						>
							{t("contactUs")}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CTA;
