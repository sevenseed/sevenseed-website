import { GridPattern } from "@/components/GridPattern";
import { useTranslations } from "next-intl";
import LinkedInIcon from "../icons/LinkedInIcon";
import GithubIcon from "../icons/GithubIcon";

const navigation = {
	main: [
		{ key: "about", href: "/#about-us" },
		{ key: "jobs", href: "mailto:jobs@sevenseed.eu" },
		{ key: "press", href: "mailto:press@sevenseed.eu" },
		{ key: "partners", href: "/partners" },
		{ key: "privacyPolicy", href: "/privacy" },
	],
	social: [
		{
			key: "linkedIn",
			href: "https://www.linkedin.com/company/seven-seed",
			icon: LinkedInIcon,
		},
		{
			key: "gitHub",
			href: "https://github.com/sevenseed",
			icon: GithubIcon,
		},
	],
};

export default function Footer() {
	const t = useTranslations("Footer");

	return (
		<footer className="relative pt-8 sm:pt-14 -mx-8 -mt-16">
			<div className="absolute inset-x-0 top-0 h-32 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
				<GridPattern x="50%" />
			</div>
			<div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
				<nav
					className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
					aria-label="Footer"
				>
					{navigation.main.map((item) => (
						<div key={item.key} className="pb-6">
							<a
								href={item.href}
								className="text-sm leading-6 text-gray-600 hover:text-gray-900"
							>
								{t(item.key)}
							</a>
						</div>
					))}
				</nav>
				<div className="mt-10 flex justify-center space-x-10">
					{navigation.social.map((item) => (
						<a
							key={item.key}
							href={item.href}
							className="text-gray-400 hover:text-gray-500"
						>
							<span className="sr-only">{t(item.key)}</span>
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
