import type React from "react";
import Image from "next/image";
import CheckItem from "./CheckItem";

interface BenefitBlockProps {
	title: string;
	label: string;
	description: string;
	imageSrc?: string;
	imageAlt?: string;
	icon?: React.ReactNode;
	features: string[];
	imageRight: boolean;
	customContent?: boolean;
}

export default function BenefitBlock({
	title,
	label,
	description,
	imageSrc,
	imageAlt,
	icon,
	features,
	imageRight,
	customContent = false,
}: BenefitBlockProps) {
	const contentSection = (
		<div className={imageRight ? "order-1 md:order-1" : "order-1 md:order-2"}>
			<div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
				{label}
			</div>
			<h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
			<p className="text-gray-600 mb-8">{description}</p>
			<div className="space-y-4">
				{features.map((feature, index) => (
					<CheckItem key={index}>{feature}</CheckItem>
				))}
			</div>
		</div>
	);

	const imageSection = customContent ? (
		<div
			className={`${imageRight ? "order-2 md:order-2" : "order-2 md:order-1"} relative h-72 md:h-80`}
		>
			<div className="absolute inset-0  rounded-3xl -z-10"></div>
			<div className="absolute inset-0 flex items-center justify-center p-6">
				{icon}
			</div>
		</div>
	) : (
		<div
			className={`${imageRight ? "order-2 md:order-2" : "order-2 md:order-1"} relative h-72 md:h-80`}
		>
			<div className="absolute inset-0 rounded-3xl -z-10"></div>
			<Image
				src={imageSrc || "/placeholder.svg"}
				alt={imageAlt || "Placeholder image"}
				fill
				className="object-contain p-6"
			/>
		</div>
	);

	return (
		<div className="grid md:grid-cols-2 gap-16 items-center mb-20">
			{imageRight ? (
				<>
					{contentSection}
					{imageSection}
				</>
			) : (
				<>
					{imageSection}
					{contentSection}
				</>
			)}
		</div>
	);
}
