import Image from "next/image";
import { useTranslations } from "next-intl";

const Overcoming = () => {
	const t = useTranslations("OvercomingChallenges");

	const people = [
		{
			name: t("person1.name"),
			role: t("person1.role"),
			imageUrl: "/images/features/networking.svg",
			bio: t("person1.bio"),
		},
		{
			name: t("person2.name"),
			role: t("person2.role"),
			imageUrl: "/images/features/partnership.svg",
			bio: t("person2.bio"),
		},
	];

	return (
		<div className="bg-white py-24 md:py-32 lg:py-40">
			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:px-8 xl:grid-cols-3">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="font-display text-5xl font-extrabold text-slate-900 sm:text-5xl">
						{t("title")}
					</h2>
				</div>
				<ul
					role="list"
					className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
				>
					{people.map((person, index) => (
						<li key={index}>
							<Image
								className="aspect-[4/2] w-full object-contain object-left"
								alt=""
								src={person.imageUrl}
								height={1000}
								width={1000}
							/>
							<h3 className="mt-6 text-lg/8 font-semibold text-gray-900">
								{person.name}
							</h3>
							<p className="text-base/7 text-gray-600">{person.role}</p>
							<p className="mt-4 text-base/7 text-gray-600">
								{person.bio}
							</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Overcoming;
