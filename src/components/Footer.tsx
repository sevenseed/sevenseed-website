import { GridPattern } from "@/components/GridPattern";
import { useTranslations } from "next-intl";

export function Footer() {
	const t = useTranslations("Footer");

	const navigation = {
		main: [
			{ name: t("about"), href: "/#about-us" },
			{ name: t("jobs"), href: "mailto:jobs@sevenseed.eu" },
			{ name: t("press"), href: "mailto:press@sevenseed.eu" },
			{ name: t("partners"), href: "/partners" },
			{ name: t("privacyPolicy"), href: "/privacy" },
		],
		social: [
			{
				name: t("linkedIn"),
				href: "https://www.linkedin.com/company/seven-seed",
				icon: () => (
					<svg
						fill="currentColor"
						viewBox="0 0 192 192"
						aria-hidden={true}
						className="h-6 w-6"
					>
						<path d="M156,0h-120c-19.875,0 -36,16.125 -36,36v120c0,19.875 16.125,36 36,36h120c19.875,0 36,-16.125 36,-36v-120c0,-19.875 -16.125,-36 -36,-36zM59.36539,162.98077h-29.82693l-0.17307,-89.30769h29.82692zM43.70192,61.99038h-0.17308c-9.75,0 -16.03846,-6.72115 -16.03846,-15.08653c0,-8.56731 6.49039,-15.0577 16.41347,-15.0577c9.92308,0 16.00961,6.49038 16.21153,15.0577c0,8.36538 -6.31731,15.08653 -16.41346,15.08653zM162.77885,162.98077h-30.08654v-48.51923c0,-11.74039 -3.11538,-19.73077 -13.61538,-19.73077c-8.01923,0 -12.34615,5.39423 -14.42308,10.61538c-0.77885,1.875 -0.98077,4.44231 -0.98077,7.06731v50.56731h-30.23077l-0.17308,-89.30769h30.23077l0.17308,12.60577c3.86538,-5.97116 10.29808,-14.42308 25.70192,-14.42308c19.09616,0 33.37501,12.46154 33.37501,39.25961v51.86539z" />
					</svg>
				),
			},
			{
				name: t("gitHub"),
				href: "https://github.com/sevenseed",
				icon: () => (
					<svg
						fill="currentColor"
						viewBox="0 0 24 24"
						aria-hidden={true}
						className="h-6 w-6"
					>
						<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
					</svg>
				),
			},
		],
	};

	return (
		<footer className="relative pb-20 pt-5 sm:pb-32 sm:pt-14">
			<div className="absolute inset-x-0 top-0 h-32 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
				<GridPattern x="50%" />
			</div>
			<div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
				<nav
					className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
					aria-label="Footer"
				>
					{navigation.main.map((item) => (
						<div key={item.name} className="pb-6">
							<a
								href={item.href}
								className="text-sm leading-6 text-gray-600 hover:text-gray-900"
							>
								{item.name}
							</a>
						</div>
					))}
				</nav>
				<div className="mt-10 flex justify-center space-x-10">
					{navigation.social.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="text-gray-400 hover:text-gray-500"
						>
							<span className="sr-only">{item.name}</span>
							<item.icon />
						</a>
					))}
				</div>
				<p className="mt-10 text-center text-xs leading-5 text-gray-500">
					&copy; {new Date().getUTCFullYear()} {t("copyright")}
				</p>
			</div>
		</footer>
	);
}
