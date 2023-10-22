import Image from "next/image";
import Link from "next/link";

import { GridPattern } from "@/components/GridPattern";
import { SectionHeading } from "@/components/SectionHeading";
import founderImage from "@/images/avatars/jerome-leclanche.jpg";

function LinkedInIcon(props: React.ComponentPropsWithoutRef<"svg">) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="26"
			height="26"
			viewBox="0 0 192 192"
		>
			{
				<path
					fill="#0a66c2"
					d="M156,0h-120c-19.875,0 -36,16.125 -36,36v120c0,19.875 16.125,36 36,36h120c19.875,0 36,-16.125 36,-36v-120c0,-19.875 -16.125,-36 -36,-36zM59.36539,162.98077h-29.82693l-0.17307,-89.30769h29.82692zM43.70192,61.99038h-0.17308c-9.75,0 -16.03846,-6.72115 -16.03846,-15.08653c0,-8.56731 6.49039,-15.0577 16.41347,-15.0577c9.92308,0 16.00961,6.49038 16.21153,15.0577c0,8.36538 -6.31731,15.08653 -16.41346,15.08653zM162.77885,162.98077h-30.08654v-48.51923c0,-11.74039 -3.11538,-19.73077 -13.61538,-19.73077c-8.01923,0 -12.34615,5.39423 -14.42308,10.61538c-0.77885,1.875 -0.98077,4.44231 -0.98077,7.06731v50.56731h-30.23077l-0.17308,-89.30769h30.23077l0.17308,12.60577c3.86538,-5.97116 10.29808,-14.42308 25.70192,-14.42308c19.09616,0 33.37501,12.46154 33.37501,39.25961v51.86539z"
				/>
			}
		</svg>
	);
}

export function AboutUs() {
	return (
		<section
			id="about-us"
			aria-labelledby="about-us-title"
			className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
		>
			<div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
				<GridPattern x="50%" y="100%" />
			</div>
			<div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
				<div className="bg-slate-50 pt-px sm:rounded-6xl">
					<div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
						<Image
							className="absolute inset-0 h-full w-full object-cover"
							src={founderImage}
							alt=""
							sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
						/>
					</div>
					<div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
						<SectionHeading number="5" id="about-us-title">
							About Us
						</SectionHeading>
						<p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
							<span className="block text-blue-600">
								Jerome Leclanche –
							</span>{" "}
							The Founder
						</p>
						<p className="mt-4 text-lg tracking-tight text-slate-700">
							Bureaucracy is the name of the game in Belgium. Navigating
							it for natives is difficult enough, but for non-natives it’s
							nearly impossible. I founded Seven Seed to help
							entrepreneurs bring their ideas to life, and not get bogged
							down in the difficulties of starting a business in Belgium.
						</p>
						<p className="mt-8">
							<Link
								href="https://linkedin.com/in/jleclanche"
								rel="noopener noreferrer"
								target="_blank"
								className="inline-flex items-center text-base font-medium tracking-tight text-blue-600"
							>
								<LinkedInIcon className="h-10 w-10 fill-current" />
								<span className="ml-4">Follow on LinkedIn</span>
							</Link>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
