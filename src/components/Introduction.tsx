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
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
					nisi ut aliquip ex ea commodo consequat.
				</p>
				<p className="mt-4">
					Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
					cupidatat non proident, sunt in culpa qui officia deserunt mollit
					anim id est laborum.
				</p>
				<ul role="list" className="mt-8 space-y-3">
					{[
						"Ut enim ad minima veniam",
						"Ut enim ad minima veniam",
						"Ut enim ad minima veniam",
						"Ut enim ad minima veniam",
					].map((feature) => (
						<li key={feature} className="flex">
							<CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
							<span className="ml-4">{feature}</span>
						</li>
					))}
				</ul>
				<p className="mt-8">
					Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
					cupidatat non proident, sunt in culpa qui officia deserunt mollit
					anim id est laborum.
				</p>
				<p className="mt-10">
					<Link
						href="#whitepaper"
						className="text-base font-medium text-blue-600 hover:text-blue-800"
					>
						Get the whitepaper on company creation{" "}
						<span aria-hidden="true">&rarr;</span>
					</Link>
				</p>
			</Container>
		</section>
	);
}
