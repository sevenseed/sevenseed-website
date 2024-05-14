import Container from "@/components/Container";
import EmailLink from "@/components/EmailLink";
import { GridPattern } from "@/components/GridPattern";
import Link from "next/link";

const WaitlistPage = () => (
	<div className="relative flex flex-auto items-center">
		<div className="absolute inset-0 -z-10 text-slate-900/10 [mask-image:linear-gradient(transparent,white,transparent)]">
			<GridPattern x="50%" y="50%" patternTransform="translate(0 60)" />
		</div>
		<Container className="flex flex-col items-center py-16 text-center sm:py-20 lg:py-32">
			<h1 className="mt-6 font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
				Before you start...
			</h1>
			<p className="mt-4 text-lg tracking-tight text-slate-700">
				Seven Seed is currently in restricted beta. We individually vet
				companies before creating them.
			</p>
			<p className="mt-4 text-lg tracking-tight text-slate-700">
				Please complete the following form to get started.
			</p>
			<Link
				href="/signup"
				className="mt-6 inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-700 active:text-white/80"
			>
				Get started <span aria-hidden="true">&nbsp;&rarr;</span>
			</Link>
			<p className="mt-4 text-lg tracking-tight text-slate-700">
				You can also email us at{" "}
				<EmailLink email="contact@sevenseed.eu" className="underline" /> if you
				have any questions.
			</p>
		</Container>
	</div>
);

export default WaitlistPage;
