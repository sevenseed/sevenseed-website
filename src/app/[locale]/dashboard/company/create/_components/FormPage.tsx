import { useContext, useMemo, type PropsWithChildren } from "react";
import { type FormPage as FormPageInterface } from "@/api/interfaces/form";
import { NewCompanyContext } from "@/contexts/NewCompanyContext";

import styles from "../../company.module.css";

export default function FormPage({
	step: formStep,
	label,
	children,
}: PropsWithChildren<FormPageInterface>) {
	const { step } = useContext(NewCompanyContext);
	const hidden = useMemo(() => {
		return formStep !== step;
	}, [formStep, step]);

	return (
		<div className={styles.formPage} hidden={hidden}>
			<h2 className={styles.formPageHeader}>{label}</h2>
			{children}
		</div>
	);
}
