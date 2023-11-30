import { locales, usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";
import { useCallback } from "react";

const LanguageSwitcher = () => {
	const currentLocale = useLocale();
	const router = useRouter();
	const pathname = usePathname();
	const onChange = useCallback(
		(e: React.ChangeEvent<HTMLSelectElement>) => {
			router.replace(pathname, { locale: e.target.value });
		},
		[pathname, router],
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
