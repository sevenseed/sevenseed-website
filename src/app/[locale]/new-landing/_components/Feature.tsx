import clsx from "clsx";
import { PropsWithChildren } from "react";

function Description({ children }: PropsWithChildren) {
	return <div className="space-y-2">{children}</div>;
}
function Heading({ children }: PropsWithChildren) {
	return <h2 className="font-bold text-2xl leading-tight">{children}</h2>;
}

Description.Heading = Heading;

function Exhibit({ children }: PropsWithChildren) {
	// TODO: add border and shadow
	return <div>{children}</div>;
}

export default function Feature({ children }: PropsWithChildren) {
	return (
		<div
			className={clsx(
				"flex flex-col justify-between items-center gap-8",
				"md:first:flex-row md:last:even:flex-row-reverse",
				"md:first:col-span-2 md:last:even:col-span-2",
				"rounded-lg border shadow p-8 bg-slate-50/75",
			)}
		>
			{children}
		</div>
	);
}

Feature.Description = Description;
Feature.Exhibit = Exhibit;
