import locales from "@/locales";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const LanguageSwitcher = () => {
	const currentLocale = useLocale();
	const router = useRouter();
	const onChange = useCallback(
		(e: React.ChangeEvent<HTMLSelectElement>) => {
			const url = new URL(window.location.href);
			url.searchParams.set("lang", e.target.value);
			router.replace(url.pathname + url.search);
		},
		[router],
	);

	return (
		<div className="flex items-center justify-between">
			<select
				defaultValue={currentLocale}
				onChange={onChange}
				className="bg-transparent text-sm font-semibold leading-6 text-gray-900 focus:ring-0"
			>
				{locales.map((locale) => (
					<option key={locale} value={locale}>
						{locale}
					</option>
				))}
			</select>
		</div>
	);
};

export default LanguageSwitcher;
