"use client";
import { useContext, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
	NewCompanyContext,
	defaultRequiredCompanyData,
	existingAddressRequiredCompanyData,
} from "@/contexts/NewCompanyContext";
import clsx from "clsx";

import NavigationSidebar from "./_components/NavigationSidebar";
import ClientInfoPage from "./_pages/ClientInfoPage";
import ClientAddressPage from "./_pages/ClientAddressPage";
import CompanyInfoPage from "./_pages/CompanyInfoPage";
import CompanyAddressPage from "./_pages/CompanyAddressPage";

import styles from "../company.module.css";

export default function Create() {
	const router = useRouter();
	const { companyData, formState, handleSubmit, nextStep, moveToNextStep } =
		useContext(NewCompanyContext);

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

	const goToDepositPage = () => {
		return router.push(`/dashboard/payment/deposit`);
	};

	if (formState.succeeded) {
		return goToDepositPage();
	}

	const env = process.env.VERCEL_ENV;
	const isTesting = env === undefined || env === "development" || env === "preview";

	const disableSubmit = formState.submitting || !formHasEnoughInfo;

	return (
		<div className="flex flex-col py-4 mb-12 sm:py-8 lg:py-16 px-8 w-full md:w-3/4 lg:w-1/2 gap-y-8 mx-auto">
			<h1 className="font-display text-4xl font-extrabold text-slate-900 text-balance">
				Seven Seed Entity Questionnaire
			</h1>
			<div className="flex sm:gap-x-8">
				<NavigationSidebar />
				<form
					onSubmit={
						isTesting
							? (event) => {
									event.preventDefault();
									goToDepositPage();
							  }
							: handleSubmit
					}
				>
					<input
						name="subject"
						type="hidden"
						value="Application for Seven Seed"
					/>

					<ClientInfoPage />
					<ClientAddressPage />
					<CompanyInfoPage />
					<CompanyAddressPage />

					{nextStep === null ? (
						<button
							type="submit"
							disabled={disableSubmit}
							className={clsx(
								styles.button,
								"disabled:bg-gray-600 disabled:cursor-not-allowed",
							)}
							title={
								disableSubmit &&
								"Please fill out all the required fields"
							}
						>
							{formState.submitting ? "Submitting..." : "Submit"}
						</button>
					) : (
						<button
							type="button"
							className={styles.button}
							onClick={() => moveToNextStep()}
						>
							Next
						</button>
					)}
				</form>
			</div>
		</div>
	);
}
