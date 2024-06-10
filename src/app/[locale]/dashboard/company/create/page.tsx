"use client";
import { useContext, useRef } from "react";
import { useRouter } from "next/navigation";
import { NewCompanyContext } from "@/contexts/NewCompanyContext";

import StickyLowbar from "./_components/StickyLowbar";

import NavigationSidebar from "./_components/NavigationSidebar";
import ClientInfoPage from "./_pages/ClientInfoPage";
import ClientAddressPage from "./_pages/ClientAddressPage";
import CompanyInfoPage from "./_pages/CompanyInfoPage";
import CompanyAddressPage from "./_pages/CompanyAddressPage";

export default function Create() {
	const router = useRouter();
	const { formState, handleSubmit } = useContext(NewCompanyContext);
	const formElement = useRef<HTMLFormElement>(null);

	const goToDepositPage = () => {
		return router.push(`/dashboard/payment/deposit`);
	};

	if (formState.succeeded) {
		return goToDepositPage();
	}

	const env = process.env.VERCEL_ENV;
	const isTesting = env === undefined || env === "development" || env === "preview";

	return (
		<div className="relative flex flex-col py-4 sm:py-8 lg:py-16 px-8 w-full md:w-3/4 lg:w-1/2 gap-y-8 mx-auto">
			<h1 className="font-display text-4xl font-extrabold text-slate-900 text-balance">
				Seven Seed Entity Questionnaire
			</h1>
			<div className="w-full flex flex-1 sm:gap-x-8">
				<NavigationSidebar />
				<form
					ref={formElement}
					className="w-full"
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
				</form>
			</div>

			<StickyLowbar formRef={formElement} />
		</div>
	);
}
