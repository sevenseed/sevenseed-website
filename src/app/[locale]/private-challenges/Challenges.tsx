import {
	CloudArrowUpIcon,
	LockClosedIcon,
	ServerIcon,
} from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import Image from "next/image";
import strategic from "@public/images/features/Strategic.svg";

const Challenges = () => {
	const t = useTranslations("Private-Assistance");

	const assistantKeys = [
		{ key: "assistance", icon: CloudArrowUpIcon },
		{ key: "assistance2", icon: LockClosedIcon },
		{ key: "assistance3", icon: ServerIcon },
		{ key: "assistance4", icon: ServerIcon },
	];

	return (
		<div className="overflow-hidden bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					<div className="lg:pr-8 lg:pt-4">
						<div className="lg:max-w-lg">
							<p className="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
								{t("title")}
							</p>
							<dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
								{assistantKeys.map((item, index) => {
									const IconComponent = item.icon;
									return (
										<div key={index} className="relative pl-9">
											<dt className="inline font-semibold text-gray-900">
												<IconComponent
													aria-hidden="true"
													className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
												/>
												{t(`${item.key}.name`)}
											</dt>{" "}
											<dd className="inline">
												{t(`${item.key}.description`)}
											</dd>
										</div>
									);
								})}
							</dl>
						</div>
					</div>
					<Image
						className="w-full sm:w-[100px] lg:w-[1000px]"
						alt=""
						src={strategic}
						width={1000}
					/>
				</div>
			</div>
		</div>
	);
};

export default Challenges;
