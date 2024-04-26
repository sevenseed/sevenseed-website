"use client";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { NewCompanyContext, requiredCompanyData } from "@/contexts/NewCompanyContext";

import NavigationSidebar from "./_components/NavigationSidebar";
import ClientInfoPage from "./_pages/ClientInfoPage";
import BillingAddressPage from "./_pages/BillingAddressPage";
import CompanyInfoPage from "./_pages/CompanyInfoPage";
import clsx from "clsx";

const baseButtonClass =
	"border px-3 py-2 w-full bg-[#305cb7] hover:bg-[#577bc5] active:bg-[#274b94] text-white mt-4 rounded";

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

	if (state.succeeded) {
		return router.push(
			`/dashboard/payment/deposit?email=${companyData.contactEmail}`,
		);
	}

	useEffect(() => {
		const allRequiredFieldsFilled = Object.entries(companyData)
			.filter(([key, _]) => requiredCompanyData.includes(key))
			.every(([_, value]) => {
				return value !== "";
			});
		return setFormHasEnoughInfo(allRequiredFieldsFilled);
	}, [companyData]);

	return (
		<div className="flex flex-col py-16 sm:py-20 lg:py-32 px-8 w-full md:w-3/4 lg:w-1/2 gap-y-8 mx-auto">
			<h1 className="font-display text-4xl font-extrabold text-slate-900 text-balance">
				Seven Seed Entity Questionnaire
			</h1>
			<div className="flex sm:gap-x-8">
				<NavigationSidebar />
				<form onSubmit={handleSubmit}>
					<input
						name="subject"
						type="hidden"
						value={
							(process.env.NODE_ENV === "development" || "test"
								? "[TEST] "
								: "") + "Application for Seven Seed"
						}
					/>

					<ClientInfoPage />
					<BillingAddressPage />
					<CompanyInfoPage />

					{step === lastStepID ? (
						<button
							type="submit"
							disabled={state.submitting || !formHasEnoughInfo}
							className={clsx(
								baseButtonClass,
								"disabled:bg-gray-600 disabled:cursor-not-allowed",
							)}
						>
							{state.submitting ? "Submitting..." : "Submit"}
						</button>
					) : (
						<button
							type="button"
							className={baseButtonClass}
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
