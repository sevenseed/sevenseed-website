"use client";

import { submitCompanyDataToHubspot } from "@/api/hubspot";
import { CompanyData } from "@/api/interfaces";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import PayForm from "./forms/PayForm";

import styles from "./CustomerJourney.module.css";
import CompanyInfoForm from "./forms/CompanyInfoForm";
import ContactInfoForm from "./forms/ContactInfoForm";

const CompanyForms = [
	{
		label: "Company Details",
		component: CompanyInfoForm,
	},
	{
		label: "Contact Info",
		component: ContactInfoForm,
	},
	{
		label: "Pay",
		component: PayForm,
	},
];

export type CompanyDataFormProps = {
	companyData: CompanyData;
	setCompanyData: Dispatch<SetStateAction<CompanyData>>;
};

type FormStepComponentProps = CompanyDataFormProps & {
	formIndex: number;
};

const FormStepComponent = ({
	formIndex,
	companyData,
	setCompanyData,
}: FormStepComponentProps) => {
	const Component = CompanyForms[formIndex].component as JSX.ElementType;
	return <Component companyData={companyData} setCompanyData={setCompanyData} />;
};

const SidebarLinks = ({
	formIndex,
	setFormIndex,
}: {
	formIndex: number;
	setFormIndex: Dispatch<SetStateAction<number>>;
}) =>
	CompanyForms.map((form, index) => (
		<button
			key={form.label}
			onClick={() => setFormIndex(index)}
			className={`px-2 text-base text-left font-medium border-l-2 ${
				formIndex === index
					? "border-green-600 text-green-600"
					: formIndex > index
					? "border-green-900 text-green-900"
					: "border-gray-300 text-gray-500"
			}`}
		>
			{form.label}
		</button>
	));

export const CompanyDataContext = createContext<{
	companyData: CompanyData;
	setCompanyData: Dispatch<SetStateAction<CompanyData>>;
}>({ companyData: {} as CompanyData, setCompanyData: () => {} });

const CustomerJourney = () => {
	const [formIndex, setFormIndex] = useState(0);
	// TODO: Keep track of company form data from child components in state for submission to hubspot
	const [companyData, setCompanyData] = useState({} as CompanyData);

	const lastPage = formIndex === CompanyForms.length - 1;
	return (
		<div className={styles.container}>
			<h1 className="font-display text-4xl font-extrabold text-slate-900">
				Seven Seed Entity Questionnaire
			</h1>
			<div className="relative flex">
				<div className="mr-10 py-10 flex flex-col">
					<SidebarLinks formIndex={formIndex} setFormIndex={setFormIndex} />
				</div>
				<form noValidate>
					<CompanyDataContext.Provider
						value={{ companyData, setCompanyData }}
					>
						<FormStepComponent
							formIndex={formIndex}
							companyData={companyData}
							setCompanyData={setCompanyData}
						/>
					</CompanyDataContext.Provider>
					<button
						onClick={(e) => {
							lastPage
								? // TODO: Finish api endpoint for submitting company data to hubspot
								  submitCompanyDataToHubspot(companyData)
								: setFormIndex(formIndex + 1);
							e.preventDefault();
						}}
						className="mt-8 px-4 py-2 text-base font-medium text-white bg-slate-900 rounded-md shadow-sm hover:bg-slate-800"
					>
						{lastPage ? "Submit" : "Continue"} -&gt;
					</button>
				</form>
			</div>
		</div>
	);
};

export default CustomerJourney;
