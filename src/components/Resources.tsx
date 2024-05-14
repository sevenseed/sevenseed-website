import Image from "next/image";
import Container from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import communityImage from "@/images/resources/landing/community.png";
import partnersImage from "@/images/resources/landing/partners.png";
import perksImage from "@/images/resources/landing/perks.png";
import { useTranslations } from "next-intl";

export function Resources() {
	const t = useTranslations("Resources");

	const resources = [
		{
			title: t("exclusivePerksTitle"),
			description: t("exclusivePerksDescription"),
			image: () => (
				<div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
					<Image src={perksImage} alt="" unoptimized />
				</div>
			),
		},
		{
			title: t("partnersNetworkTitle"),
			description: t("partnersNetworkDescription"),
			image: () => (
				<div className="absolute inset-0 flex items-center justify-center">
					<Image
						className="relative"
						src={partnersImage}
						alt=""
						unoptimized
					/>
				</div>
			),
		},
		{
			title: t("communityTitle"),
			description: t("communityDescription"),
			image: () => (
				<div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
					<Image src={communityImage} alt="" unoptimized />
				</div>
			),
		},
	];

	return (
		<section
			id="resources"
			aria-labelledby="resources-title"
			className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
		>
			<Container>
				<SectionHeading number="2" id="resources-title">
					{t("sectionHeading")}
				</SectionHeading>
				<p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
					{t("introText")}
				</p>
				<p className="mt-4 text-lg tracking-tight text-slate-700">
					{t("additionalText")}
				</p>
			</Container>
			<Container size="lg" className="mt-16">
				<ol
					role="list"
					className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
				>
					{resources.map((resource) => (
						<li
							key={resource.title}
							className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
						>
							<div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
								<resource.image />
							</div>
							<div>
								<h3 className="text-base font-medium tracking-tight text-slate-900">
									{resource.title}
								</h3>
								<p className="mt-2 text-sm text-slate-600">
									{resource.description}
								</p>
							</div>
						</li>
					))}
				</ol>
			</Container>
		</section>
	);
}
