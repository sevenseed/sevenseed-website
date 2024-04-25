import { useContext, type PropsWithChildren } from "react";
import { type Form } from "@/api/interfaces";
import { NewCompanyContext } from "@/contexts/NewCompanyContext";

export default function FormPage({
	step: formStep,
	label,
	children,
}: PropsWithChildren<{ step: Form["id"]; label: string }>) {
	const { step } = useContext(NewCompanyContext);
	const isHidden = formStep !== step;

	return (
		<div className="w-96 lg:min-w-96 flex flex-col gap-y-2" hidden={isHidden}>
			<h2 className="font-display text-3xl font-semibold mb-2">{label}</h2>
			{children}
		</div>
	);
}
