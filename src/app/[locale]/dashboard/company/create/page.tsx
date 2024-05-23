"use client";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
	NewCompanyContext,
	defaultRequiredCompanyData,
	existingAddressRequiredCompanyData,
} from "@/contexts/NewCompanyContext";

import NavigationSidebar from "./_components/NavigationSidebar";
import ClientInfoPage from "./_pages/ClientInfoPage";
import CompanyInfoPage from "./_pages/CompanyInfoPage";
import clsx from "clsx";

import styles from "../company.module.css";

export default function Create() {
	const router = useRouter();
	const {
		step,
		setStep,
		companyData,
		state,
		handleSubmit,
		forms,
		currentStepIndex,
		lastStepID,
	} = useContext(NewCompanyContext);

	const [formHasEnoughInfo, setFormHasEnoughInfo] = useState(false);

	useEffect(() => {
		const requiredKeysArray =
			companyData.companyAddressType === "ExistingAddress"
				? [...defaultRequiredCompanyData, ...existingAddressRequiredCompanyData]
				: defaultRequiredCompanyData;

		const allRequiredFieldsFilled = Object.entries(companyData)
			.filter((entry) => requiredKeysArray.includes(entry[0]))
			.every((entry) => {
				return entry[1] !== "";
			});

		return setFormHasEnoughInfo(allRequiredFieldsFilled);
	}, [companyData]);

	if (state.succeeded) {
		return router.push(
			`/dashboard/payment/deposit?email=${companyData.contactEmail}`,
		);
	}

	const env = process.env.VERCEL_ENV;
	const subjectLine =
		(env === "development" || env === "preview" ? "[TEST] " : "") +
		"Application for Seven Seed";

	return (
		<div className="flex flex-col py-4 mb-12 sm:py-8 lg:py-16 px-8 w-full md:w-3/4 lg:w-1/2 gap-y-8 mx-auto">
			<h1 className="font-display text-4xl font-extrabold text-slate-900 text-balance">
				Seven Seed Entity Questionnaire
			</h1>
			<div className="flex sm:gap-x-8">
				<NavigationSidebar />
				<form onSubmit={handleSubmit}>
					<input name="subject" type="hidden" value={subjectLine} />

					<ClientInfoPage />
					<CompanyInfoPage />

					{step === lastStepID ? (
						<button
							type="submit"
							disabled={state.submitting || !formHasEnoughInfo}
							className={clsx(
								styles.button,
								"disabled:bg-gray-600 disabled:cursor-not-allowed",
							)}
						>
							{state.submitting ? "Submitting..." : "Submit"}
						</button>
					) : (
						<button
							type="button"
							className={styles.button}
							onClick={() => setStep(forms[currentStepIndex + 1].id)}
						>
							Next
						</button>
					)}
				</form>
			</div>
		</div>
	);
}
