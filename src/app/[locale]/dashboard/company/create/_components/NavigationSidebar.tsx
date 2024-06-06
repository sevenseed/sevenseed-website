import { useContext } from "react";
import { NewCompanyContext } from "@/contexts/NewCompanyContext";
import clsx from "clsx";

import styles from "../../company.module.css";
import { Form } from "@/api/interfaces";

type Category = {
	order: number;
	label: string;
	forms: Form["id"][];
};

const CATEGORIES: Category[] = [
	{ order: 0, label: "Client", forms: ["client", "clientAddress"] },
	{ order: 1, label: "Company", forms: ["company", "companyAddress"] },
];

export default function NavigationSidebar() {
	const { forms, step, setStep } = useContext(NewCompanyContext);

	return (
		<div className={styles.navigationSidebar}>
			{[...CATEGORIES]
				.sort((a, b) => a.order - b.order)
				.map(({ label, forms: formIDs }) => (
					<div className={styles.navigationSidebarCategory} key={label}>
						<span className={styles.navigationSidebarCategoryLabel}>
							{label}
						</span>
						{forms
							.filter((form) => formIDs.includes(form.id))
							.map((form) => {
								const isCurrentForm = form.id === step;
								return (
									<button
										key={form.id}
										className={clsx(
											styles.navigationSidebarStep,
											isCurrentForm &&
												styles.navigationSidebarStepActive,
										)}
										onClick={() => setStep(form.id)}
									>
										{form.label}
									</button>
								);
							})}
					</div>
				))}
		</div>
	);
}
