import Image from "next/image";
import {
	UserIcon,
	LightBulbIcon,
	UsersIcon,
	SparklesIcon,
	ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import type { ReactNode } from "react";

export default function FoundersSection() {
	return (
		<div className="py-20 md:py-28 relative overflow-hidden w-full ">
			<div className="container mx-auto px-4 relative z-10 max-w-7xl">
				<div className="text-center mb-16">
					<div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
						Join Our Community
					</div>

					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						Are You Ready to{" "}
						<span className="text-blue-600">Build Boldly</span> in Brussels?
					</h2>

					<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
						We’re looking for visionary founders ready to make the leap to
						Europe and build something extraordinary.
					</p>
				</div>

				{/* Central image */}
				<div className="relative mx-auto mb-16 max-w-lg">
					<div className="absolute -inset-4 bg-blue-100 rounded-full opacity-50 blur-lg"></div>
					<div className="relative bg-white p-2 rounded-full shadow-xl">
						<Image
							src="/images/atomium.jpg"
							alt="Founders collaborating"
							width={500}
							height={500}
							className="rounded-full"
						/>
					</div>
				</div>

				{/* Detailed criteria */}
				<div className="grid md:grid-cols-5 gap-6 max-w-4xl mx-auto">
					<FounderCriteriaDetail
						icon={<UserIcon className="h-8 w-8" />}
						title="US-Based"
						description="Committed to relocating and establishing primary operations in Brussels"
						color="text-blue-600"
						bgColor="bg-blue-100"
					/>

					<FounderCriteriaDetail
						icon={<LightBulbIcon className="h-8 w-8" />}
						title="Early-Stage"
						description="From idea to pre-seed/seed, ready to build and scale"
						color="text-green-600"
						bgColor="bg-green-100"
					/>

					<FounderCriteriaDetail
						icon={<ShieldCheckIcon className="h-8 w-8" />}
						title="Tech Innovators"
						description="Focused on AI, Cybersecurity, or Defense/Dual-Use technologies"
						color="text-purple-600"
						bgColor="bg-purple-100"
					/>

					<FounderCriteriaDetail
						icon={<UsersIcon className="h-8 w-8" />}
						title="Collaborative"
						description="Eager to contribute to and benefit from a tight-knit cohort community"
						color="text-amber-600"
						bgColor="bg-amber-100"
					/>

					<FounderCriteriaDetail
						icon={<SparklesIcon className="h-8 w-8" />}
						title="Impact-Driven"
						description="Motivated to build significant companies that contribute to European tech resilience"
						color="text-rose-600"
						bgColor="bg-rose-100"
					/>
				</div>
			</div>
		</div>
	);
}

interface FounderCriteriaCardProps {
	icon: ReactNode;
	title: string;
	color: string;
}

function FounderCriteriaCard({ icon, title, color }: FounderCriteriaCardProps) {
	return (
		<div
			className={`${color} text-gray-800 p-3 rounded-full shadow-md flex items-center space-x-2 animate-float`}
		>
			<div className="bg-white p-1.5 rounded-full">{icon}</div>
			<span className="font-medium text-sm pr-1">{title}</span>
		</div>
	);
}

interface FounderCriteriaDetailProps {
	icon: ReactNode;
	title: string;
	description: string;
	color: string;
	bgColor: string;
}

function FounderCriteriaDetail({
	icon,
	title,
	description,
	color,
	bgColor,
}: FounderCriteriaDetailProps) {
	return (
		<div className="flex flex-col items-center text-center">
			<div className={`${bgColor} p-4 rounded-full mb-4`}>
				<div className={color}>{icon}</div>
			</div>
			<h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
			<p className="text-gray-600 text-sm">{description}</p>
		</div>
	);
}
