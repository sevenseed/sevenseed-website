import {
	type MouseEventHandler,
	type RefObject,
	useCallback,
	useContext,
	useMemo,
} from "react";
import {
	NewCompanyContext,
	defaultRequiredCompanyData,
	existingAddressRequiredCompanyData,
} from "@/contexts/NewCompanyContext";
import clsx from "clsx";
import compare from "just-compare";
import type { CompanyData } from "@/api/interfaces/company";
import type { CompanyOwner } from "@/api/interfaces/owners";

import styles from "../../company.module.css";

// * we use `formRef` to reference the form in order to be able
// * to put this navbar anywhere on the page
// * this allows us to control the layout of the navbar easily
// * while retaining its `.submit()` capabilities
export default function StickyLowbar({
	formRef,
	companyDataSnapshot,
	ownersSnapshot,
	saveFn,
}: {
	formRef: RefObject<HTMLFormElement>;
	companyDataSnapshot: CompanyData;
	ownersSnapshot: CompanyOwner[];
	saveFn: MouseEventHandler<HTMLButtonElement>;
}) {
	const {
		companyData,
		owners,
		formState,
		nextStep,
		moveToNextStep,
		previousStep,
		moveToPreviousStep,
	} = useContext(NewCompanyContext);

	const formHasEnoughInfo = useMemo(() => {
		const requiredKeysArray =
			companyData.addressType === "ExistingAddress"
				? [...defaultRequiredCompanyData, ...existingAddressRequiredCompanyData]
				: defaultRequiredCompanyData;

		const allRequiredFieldsFilled = Object.entries(companyData)
			.filter(([key, value]) => requiredKeysArray.includes(key))
			.every(([key, value]) => {
				return value !== "";
			});

		return allRequiredFieldsFilled;
	}, [companyData]);

	const hasDataChanged = useMemo(
		() =>
			!compare(companyDataSnapshot, companyData) &&
			!compare(ownersSnapshot, owners),
		[companyDataSnapshot, companyData, ownersSnapshot, owners],
	);

	// * `.requestSubmit()` triggers the `submit` event in browser
	// * `.submit()` doesn't trigger it
	const submitForm = useCallback(() => {
		if (formRef.current) formRef.current.requestSubmit();
	}, [formRef]);

	// TODO: use `HTMLFormElement.checkValidity()`?
	// * this methods fires an `invalid` element at invalid inputs inside the form
	// * which has caused issued during initial testing
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
					className={clsx(
						"w-full sm:w-max duration-200",
						hasDataChanged ? styles.button : styles.buttonOutline,
						hasDataChanged || "bg-white",
					)}
					onClick={saveFn}
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
