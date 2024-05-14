import Image from "next/image";
import Container from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import duotoneImage from "@/images/how-it-works/duotone.svg";
import gridsImage from "@/images/how-it-works/grids.svg";
import setupImage from "@/images/how-it-works/setup.svg";
import strokesImage from "@/images/how-it-works/strokes.svg";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

export function HowItWorks() {
	const t = useTranslations("HowItWorks");

	const videos = useMemo(
		() => [
			{
				title: t("questionnaireTitle"),
				description: t("questionnaireDescription"),
				image: setupImage,
			},
			{
				title: t("financialPlanTitle"),
				description: t("financialPlanDescription"),
				image: gridsImage,
			},
			{
				title: t("meetingNotaryTitle"),
				description: t("meetingNotaryDescription"),
				image: strokesImage,
			},
			{
				title: t("companyPackageTitle"),
				description: t("companyPackageDescription"),
				image: duotoneImage,
			},
		],
		[t],
	);
	return (
		<section
			id="how-it-works"
			aria-labelledby="how-it-works-title"
			className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
		>
			<Container>
				<SectionHeading number="1" id="how-it-works-title">
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
					className="grid grid-cols-1 gap-x-8 gap-y-10 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-4"
				>
					{videos.map((video) => (
						<li key={video.title} className="[counter-increment:video]">
							<div
								className="relative flex h-44 items-center justify-center rounded-2xl px-6 shadow-lg"
								style={{
									backgroundImage:
										"conic-gradient(from -49.8deg at 50% 50%, #7331FF 0deg, #00A3FF 59.07deg, #4E51FF 185.61deg, #39DBFF 284.23deg, #B84FF1 329.41deg, #7331FF 360deg)",
								}}
							>
								<div className="flex overflow-hidden rounded shadow-sm">
									<Image src={video.image} alt="" unoptimized />
								</div>
							</div>
							<h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
								{video.title}
							</h3>
							<p className="mt-2 text-sm text-slate-600">
								{video.description}
							</p>
						</li>
					))}
				</ol>
			</Container>
		</section>
	);
}
