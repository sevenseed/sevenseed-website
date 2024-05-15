import clsx from "clsx";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { GridPattern } from "@/components/GridPattern";

import LinkedInIcon from "../icons/LinkedInIcon";
import GithubIcon from "../icons/GithubIcon";
import logo from "@/images/logo.svg";

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
		<footer className="flex justify-center relative pt-32 px-8 pb-8">
			<div className="absolute inset-x-0 top-0 h-32 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
				<GridPattern x="50%" />
			</div>
			<div className="flex flex-col gap-y-6 w-full max-w-3xl">
				<div className="max-w-3xl grid sm:grid-cols-2 sm:place-content-center gap-y-8">
					<div>
						<a href="/">
							<Image
								className="w-32"
								src={logo}
								alt="Seven Seed logo"
								aria-hidden
							/>
						</a>
						<span className="sr-only">Seven Seed</span>
					</div>
					<nav
						className="flex flex-col sm:items-end gap-y-6"
						aria-label="Footer"
					>
						<div className="flex flex-col items-start sm:items-end sm:gap-y-2">
							{navigation.main.map((item) => (
								<a
									key={item.key}
									href={item.href}
									className={clsx(
										"leading-6 text-gray-600 hover:text-blue-600 duration-200 p-2 -mx-2",
										"sm:text-sm sm:p-0 sm:mx-0",
									)}
								>
									{t(item.key)}
								</a>
							))}
						</div>
					</nav>
				</div>
				<div className="flex sm:flex-row-reverse justify-between items-center flex-wrap gap-x-8 gap-y-4">
					<p className="sm:text-xs leading-5 text-gray-500">
						&copy; {new Date().getUTCFullYear()} {t("copyright")}
					</p>
					<div className="flex justify-center gap-x-6 sm:gap-x-4">
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
				</div>
			</div>
		</footer>
	);
}
