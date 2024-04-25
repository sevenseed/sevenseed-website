import { useContext } from "react";
import { NewCompanyContext } from "@/contexts/NewCompanyContext";
import clsx from "clsx";

export default function NavigationSidebar() {
	const { forms, step, setStep } = useContext(NewCompanyContext);

	return (
		<div className="flex flex-col items-start">
			{forms.map((form) => {
				const className = clsx(
					"border-l-2 border-current font-medium pl-2",
					form.id === step ? "text-green-600" : "text-gray-300",
				);

				return (
					<button
						key={form.id}
						className={className}
						onClick={() => setStep(form.id)}
					>
						{form.label}
					</button>
				);
			})}
		</div>
	);
}
