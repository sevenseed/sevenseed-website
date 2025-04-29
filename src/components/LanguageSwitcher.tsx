"use client";
import { useState } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import locales from "@/locales";

type Locale = "en" | "fr" | "nl";
type LocaleIndicator = {
	[locale in Locale]: {
		[translated in Locale]: string;
	};
};

const localeIndicator: LocaleIndicator = {
	en: {
		en: "English",
		fr: "French",
		nl: "Dutch",
	},
	fr: {
		en: "Anglais",
		fr: "Français",
		nl: "Néerlandais",
	},
	nl: {
		en: "Engels",
		fr: "Frans",
		nl: "Nederlands",
	},
};

const DownArrow = () => (
	<svg
		className="w-2.5 h-2.5 ms-3"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 10 6"
	>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="m1 1 4 4 4-4"
		/>
	</svg>
);

const UpArrow = () => (
	<svg
		className="w-2.5 h-2.5 ms-3"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 10 6"
	>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="m9 5-4-4-4 4"
		/>
	</svg>
);

const LanguageSwitcher = () => {
	const [expanded, setExpanded] = useState(false);
	const currentLocale = useLocale() as Locale;
	const router = useRouter();

	const setLanguage = (locale: string) => {
		const url = new URL(window.location.href);
		url.searchParams.set("lang", locale);
		router.replace(url.pathname + url.search);
	};

	return (
		<>
			<div
				className="absolute top-0 left-0 right-0 bottom-0"
				onClick={() => setExpanded(false)}
				hidden={!expanded}
			/>
			<div className="relative">
				<button
					className="bg-transparent text-sm font-semibold leading-6 text-gray-900 focus:ring-0 inline-flex items-center justify-center"
					type="button"
					onClick={() => setExpanded(!expanded)}
				>
					{localeIndicator[currentLocale][currentLocale]}{" "}
					{expanded ? <UpArrow /> : <DownArrow />}
				</button>
				<div
					className={`${
						expanded ? "visible" : "hidden"
					} absolute w-max z-10 mt-1 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5`}
				>
					<div className="py-1">
						{locales.map((locale) => (
							<button
								key={locale}
								className={`${
									currentLocale === locale
										? "text-gray-900 font-bold"
										: "text-gray-700"
								} block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 hover:cursor-pointer`}
								value={locale}
								onClick={() => {
									setLanguage(locale);
									setExpanded(false);
								}}
							>
								{localeIndicator[currentLocale][locale]}
							</button>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default LanguageSwitcher;
