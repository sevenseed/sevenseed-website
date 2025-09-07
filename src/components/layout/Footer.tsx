import { GridPattern } from "@/components/GridPattern";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Image from "next/image";

import logo from "@/images/logo.svg";
import Link from "next/link";
import GithubIcon from "../icons/GithubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";

const navigation = {
	main: [
		{ key: "about", href: "/#about-us" },
		{ key: "funding", href: "/funding" },
		{ key: "incorporate", href: "/incorporate" },
		{ key: "jobs", href: "mailto:jobs@sevenseed.eu" },
		{ key: "press", href: "mailto:press@sevenseed.eu" },
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
		<footer className="flex justify-center relative mt-16 pt-32 px-8 pb-8">
			<div className="absolute inset-x-0 top-0 h-32 text-slate-900/10 mask-[linear-gradient(white,transparent)]">
				<GridPattern x="50%" />
			</div>
			<div className="flex flex-col gap-y-12 w-full max-w-6xl">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Logo and description column */}
					<div className="md:col-span-1">
						<Link href="/">
							<Image
								className="w-32 mb-4"
								src={logo}
								alt="Seven Seed logo"
								aria-hidden
							/>
						</Link>
						<span className="sr-only">Seven Seed</span>
						<p className="text-sm text-gray-600 mt-2">
							Brussels-based accelerator for dual-use and defence startups.
						</p>
					</div>
					
					{/* Resources column */}
					<div>
						<h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
						<nav className="flex flex-col gap-y-2" aria-label="Resources">
							<Link href="/funding" className="text-sm text-gray-600 hover:text-blue-600 duration-200">
								{t("funding")}
							</Link>
							<Link href="/incorporate" className="text-sm text-gray-600 hover:text-blue-600 duration-200">
								{t("incorporate")}
							</Link>
							<Link href="/privacy" className="text-sm text-gray-600 hover:text-blue-600 duration-200">
								{t("privacyPolicy")}
							</Link>
						</nav>
					</div>
					
					{/* Company column */}
					<div>
						<h3 className="font-semibold text-gray-900 mb-4">Company</h3>
						<nav className="flex flex-col gap-y-2" aria-label="Company">
							<Link href="/#about-us" className="text-sm text-gray-600 hover:text-blue-600 duration-200">
								{t("about")}
							</Link>
							<a href="mailto:jobs@sevenseed.eu" className="text-sm text-gray-600 hover:text-blue-600 duration-200">
								{t("jobs")}
							</a>
							<a href="mailto:press@sevenseed.eu" className="text-sm text-gray-600 hover:text-blue-600 duration-200">
								{t("press")}
							</a>
						</nav>
					</div>
					
					{/* Connect column */}
					<div>
						<h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
						<div className="flex gap-x-4">
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
				{/* Bottom section with copyright */}
				<div className="pt-8 border-t border-gray-200">
					<p className="text-xs text-center text-gray-500">
						&copy; {new Date().getUTCFullYear()} {t("copyright")}
					</p>
				</div>
			</div>
		</footer>
	);
}
