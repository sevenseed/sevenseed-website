import { Button } from "@/components/Button";
import { useTranslations } from "next-intl";

const Hero = () => {
	const t = useTranslations("Hero");

	return (
		<header className="flex justify-center mt-16 px-8">
			<div className="md:max-w-3xl flex flex-col place-items-center gap-y-6 text-balance text-center">
				<h1 className="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
					{t("preTitle")}{" "}
					<span className="text-blue-700">{t("sevenDays")}</span>
				</h1>
				<p className="text-2xl text-slate-600">{t("content")}</p>
				<div className="flex gap-4">
					<Button href="/start" color="blue">
						{t("getStarted")}
					</Button>
					<Button href="/contact" variant="outline" color="blue">
						{t("contactUs")}
					</Button>
				</div>
			</div>
		</header>
	);
};

export default Hero;
