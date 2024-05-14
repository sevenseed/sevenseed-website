import clsx from "clsx";
import { PropsWithChildren } from "react";

function Description({ children }: PropsWithChildren) {
	return <div className="space-y-4 sm:space-y-2">{children}</div>;
}
function Heading({ children }: PropsWithChildren) {
	return <h2 className="font-bold text-2xl leading-tight">{children}</h2>;
}

Description.Heading = Heading;

function Exhibit({ children }: PropsWithChildren) {
	// TODO: add border and shadow when actual content is there
	return <div className="flex flex-[1_0_50%] sm:max-w-md">{children}</div>;
}

export default function Feature({ children }: PropsWithChildren) {
	return (
		<div
			className={clsx(
				"flex flex-col justify-between items-center gap-8",
				"rounded-lg border shadow p-8 bg-slate-50/75",
				"md:first:flex-row md:last:even:flex-row-reverse",
				"md:first:col-span-2 md:last:even:col-span-2",
			)}
		>
			{children}
		</div>
	);
}

Feature.Description = Description;
Feature.Exhibit = Exhibit;
