import { Button } from "@/components/Button";
import { useTranslations } from "next-intl";

const Introduction = () => {
	const t = useTranslations("Grants-getStarted");
	return (
		<div className="mx-auto max-w-2xl ">
			<div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
			<div className="text-center">
				<h1 className="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
					{t("pretitle")}
					<span className="font-display text-5xl font-extrabold text-blue-700 sm:text-6xl">
						{" "}
						<br />
						{t("title")}
					</span>
				</h1>
				<p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
					{t("description")}
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
	);
};

export default Introduction;
