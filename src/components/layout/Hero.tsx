import { Button } from "@/components/Button";
import { useTranslations } from "next-intl";

const Hero = () => {
	const t = useTranslations("Hero");

	return (
		<header className="flex sm:justify-center">
			<div className="md:max-w-3xl flex flex-col place-items-center gap-y-6 text-balance">
				<h1 className="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl sm:text-center">
					{t("preTitle")}{" "}
					<span className="text-blue-700">{t("sevenDays")}</span>
				</h1>
				<p className="text-2xl text-slate-600 sm:text-center">{t("content")}</p>
				<div className="w-full flex gap-4 justify-between sm:justify-center">
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
		</header>
	);
};

export default Hero;
