import { CheckIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";

import Image from "next/image";

import challenge from "@public/images/features/Challenge.svg";

const Challenges = () => {
	const t = useTranslations("Grants-challenges");
	const challengeKeys = [
		"challenge",
		"challenge2",
		"challenge3",
		"challenge4",
		"challenge5",
		"challenge6",
	];
	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					<div className="col-span-2">
						<p className="font-display text-5xl font-extrabold text-slate-900">
							{t("title")}
						</p>
						<p className="mt-6 text-base leading-7 text-gray-600">
							{t("subtitle")}
						</p>
						<Image alt="" src={challenge} width={450}></Image>
					</div>
					<dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
						{challengeKeys.map((key, index) => (
							<div key={index} className="relative pl-9">
								<dt className="font-semibold text-gray-900">
									<CheckIcon
										aria-hidden="true"
										className="absolute left-0 top-1 h-5 w-5 text-indigo-500"
									/>
									{t(`${key}.name`)}
								</dt>
								<dd className="mt-2">{t(`${key}.description`)}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
};

export default Challenges;
