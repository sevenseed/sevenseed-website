import Link from "next/link";

import { CheckIcon } from "@/components/CheckIcon";
import { Container } from "@/components/Container";

export function Introduction() {
	return (
		<section
			id="introduction"
			aria-label="Introduction"
			className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
		>
			<Container className="text-lg tracking-tight text-slate-700">
				<p className="font-display text-4xl font-bold tracking-tight text-slate-900">
					A simplified, paperless, entrepreneur-friendly company creation
					process.
				</p>
				<p className="mt-4">
					Creating a company is a complex and time-consuming process. We help
					entrepreneurs with the paperwork, to free up time for what matters:
					Building the business. Seven Seed is your single-point of contact
					for a simplified legal entity creation process.
				</p>
				<ul role="list" className="mt-8 space-y-3">
					{[
						"Creation of the financial plan",
						"Articles of incorporation and bylaws",
						"Online meeting with the notary",
						"Company and VAT registration fees",
						"We find a perfect accountant for your business",
					].map((feature) => (
						<li key={feature} className="flex">
							<CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
							<span className="ml-4">{feature}</span>
						</li>
					))}
				</ul>
				<p className="mt-8">
					We minimize the costs and time spent at the beginning of the
					entrepreneurial journey, and set up the company for success
					afterwards by providing introductions to the best possible partners
					for the created company.
				</p>
				<p className="mt-10">
					<Link
						href="#whitepaper"
						className="text-base font-medium text-blue-600 hover:text-blue-800"
					>
						Learn why you should create your company in Belgium{" "}
						<span aria-hidden="true">&rarr;</span>
					</Link>
				</p>
			</Container>
		</section>
	);
}
