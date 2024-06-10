import { RefObject, useCallback, useContext, useMemo } from "react";
import clsx from "clsx";
import {
	NewCompanyContext,
	defaultRequiredCompanyData,
	existingAddressRequiredCompanyData,
} from "@/contexts/NewCompanyContext";

import styles from "../../company.module.css";

export default function StickyLowbar({
	formRef,
}: {
	formRef: RefObject<HTMLFormElement>;
}) {
	const {
		companyData,
		formState,
		nextStep,
		moveToNextStep,
		previousStep,
		moveToPreviousStep,
	} = useContext(NewCompanyContext);

	const formHasEnoughInfo = useMemo(() => {
		const requiredKeysArray =
			companyData.companyAddressType === "ExistingAddress"
				? [...defaultRequiredCompanyData, ...existingAddressRequiredCompanyData]
				: defaultRequiredCompanyData;

		const allRequiredFieldsFilled = Object.entries(companyData)
			.filter((entry) => requiredKeysArray.includes(entry[0]))
			.every((entry) => {
				return entry[1] !== "";
			});

		return allRequiredFieldsFilled;
	}, [companyData]);

	const submitForm = useCallback(() => {
		if (formRef.current) formRef.current.requestSubmit();
	}, [formRef]);

	const disableSubmit = formState.submitting || !formHasEnoughInfo;

	return (
		<div
			className={clsx(
				"flex flex-col sm:flex-row justify-between items-stretch sm:items-none gap-y-4",
				"sticky bottom-4 p-4 -m-4",
				"backdrop-blur sm:rounded-lg sm:shadow-lg",
			)}
		>
			<div className="w-full">
				<button
					type="button"
					className={clsx(styles.buttonOutline, "w-full sm:w-max bg-white")}
				>
					Save without submitting
				</button>
			</div>
			<div className="flex gap-x-2">
				<button
					type="button"
					disabled={previousStep === null}
					className={clsx(styles.buttonOutline, "flex-1 bg-white")}
					onClick={() => moveToPreviousStep()}
				>
					Back
				</button>
				{nextStep === null ? (
					<button
						type="button"
						onClick={submitForm}
						disabled={disableSubmit}
						className={clsx(styles.button, "flex-1")}
						title={disableSubmit && "Please fill out all required fields"}
					>
						{formState.submitting ? "Submitting..." : "Submit"}
					</button>
				) : (
					<button
						type="button"
						className={clsx(styles.button, "flex-1")}
						onClick={() => moveToNextStep()}
					>
						Next
					</button>
				)}
			</div>
		</div>
	);
}
