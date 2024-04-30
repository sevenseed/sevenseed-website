import { useContext } from "react";
import { NewCompanyContext } from "@/contexts/NewCompanyContext";
import clsx from "clsx";

import styles from "../../company.module.css";

export default function NavigationSidebar() {
	const { forms, step, setStep } = useContext(NewCompanyContext);

	return (
		<div className={styles.navigationSidebar}>
			{forms.map((form) => {
				return (
					<button
						key={form.id}
						className={clsx(
							styles.navigationSidebarStep,
							form.id === step ? "text-green-600" : "text-gray-300",
						)}
						onClick={() => setStep(form.id)}
					>
						{form.label}
					</button>
				);
			})}
		</div>
	);
}
