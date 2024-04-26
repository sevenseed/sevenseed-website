"use client";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { NewCompanyContext } from "@/contexts/NewCompanyContext";
import NavigationSidebar from "./_components/NavigationSidebar";
import FormPage from "./_components/FormPage";
import {
	MultilineFormInput,
	RadioFormInput,
	SimpleFormInput,
} from "./_components/Inputs";

export default function Create() {
	const router = useRouter();
	const { step, setStep, companyData, state, handleSubmit, forms, lastStepID } =
		useContext(NewCompanyContext);

	if (state.succeeded) {
		return router.push(
			`/dashboard/payment/deposit?email=${companyData.contactEmail}`,
		);
	}

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
					<FormPage step="you" label="Client Information">
						<SimpleFormInput
							id="contactName"
							label="Name"
							placeholder="John Doe"
							required
						/>
						<SimpleFormInput
							id="contactEmail"
							label="Email"
							type="email"
							placeholder="hello@world.com"
							required
						/>
						<SimpleFormInput
							id="contactPhoneNumber"
							label="Contact Phone"
							description="Your personal phone number, for reaching out to you directly"
							type="tel"
							placeholder="+32123456789"
							required
						/>
						<RadioFormInput
							id="civilStatus"
							label="Civil Status"
							options={["Single", "Married", "Legal Cohabitation"]}
							required
						/>
					</FormPage>
					<FormPage step="address" label="Billing Address">
						<SimpleFormInput
							id="addressLine1"
							label="Address line 1"
							placeholder="Rue de la Loi, 123"
							required
						/>
						<SimpleFormInput
							id="addressLine2"
							label="Address line 2"
							placeholder="Apt 123"
						/>
						<fieldset className="flex flex-col gap-y-1">
							<div className="flex gap-x-2 gap-y-1 flex-wrap sm:flex-nowrap">
								<SimpleFormInput
									id="postalCode"
									label="Postal code"
									placeholder="1040"
									className="sm:w-[14ch]"
								/>
								<SimpleFormInput
									id="city"
									label="City"
									placeholder="Brussels"
									required
								/>
							</div>
						</fieldset>
						<SimpleFormInput
							id="region"
							label="State / Province / Region"
							placeholder="Brussels-Capital Region"
						/>
						<SimpleFormInput
							id="country"
							label="Country"
							placeholder="Belgium"
							required
						/>
					</FormPage>
					<FormPage step="company" label="Company Information">
						<SimpleFormInput
							id="companyName"
							label="Company Name"
							placeholder="Google, Inc."
							required
						/>
						<MultilineFormInput
							id="companyDescription"
							label="Company Description"
							placeholder="Acme Inc. is a globally diversified corporation setting new standards of excellence in various sectors."
							rows={4}
						/>
						<RadioFormInput
							id="legalEntity"
							label="Legal Entity"
							options={["SRL", "Independent Entrepreneur", "Other"]}
							required
						/>
						<SimpleFormInput
							id="companyPhoneNumber"
							label="Company Phone"
							description="If you don't have one yet, enter your personal phone number"
							type="tel"
							placeholder="+32123456789"
							required
						/>
					</FormPage>

					<button
						disabled={state.submitting}
						className="border px-3 py-2 w-full bg-[#305cb7] hover:bg-[#577bc5] active:bg-[#274b94] text-white mt-4 rounded"
						onClick={(event) => {
							if (step !== lastStepID) {
								event.preventDefault();
								const currentStepIndex = forms.findIndex(
									(form) => form.id === step,
								);
								const nextStepID = forms[currentStepIndex + 1].id;
								setStep(nextStepID);
							}
						}}
					>
						{step === lastStepID
							? state.succeeded
								? "Submitted!"
								: state.submitting
								? "Submitting..."
								: "Submit"
							: "Next"}
					</button>
					{state.errors
						? "Please review the form and fill in all required fields"
						: ""}
				</form>
			</div>
		</div>
	);
}
