"use client";

import { submitCompanyDataToHubspot } from "@/api/hubspot";
import { CompanyData } from "@/api/interfaces";
import { Dispatch, SetStateAction, useState } from "react";
import AddressForm from "./forms/AddressForm";
import DescriptionForm from "./forms/DescriptionForm";
import FoundersForm from "./forms/FoundersForm";
import NameForm from "./forms/NameForm";
import PayForm from "./forms/PayForm";
import StructureForm from "./forms/StructureForm";

const CompanyForms = [
	{
		label: "Structure",
		component: <StructureForm />,
	},
	{
		label: "Name",
		component: <NameForm />,
	},
	{
		label: "Description",
		component: <DescriptionForm />,
	},
	{
		label: "Address",
		component: <AddressForm />,
	},
	{
		label: "Founders",
		component: <FoundersForm />,
	},
	{
		label: "TODO",
		component: <PayForm />,
	},
	{
		label: "Pay",
		component: <PayForm />,
	},
];

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

const CustomerJourney = () => {
	const [formIndex, setFormIndex] = useState(0);
	// TODO: Keep track of company form data from child components in state for submission to hubspot
	const [companyData, setCompanyData] = useState({} as CompanyData);
	const lastPage = formIndex === CompanyForms.length - 1;
	return (
		<div className="flex flex-col py-16 sm:py-20 lg:py-32 w-full md:w-3/4 lg:w-1/2">
			<h1 className="font-display text-4xl font-extrabold text-slate-900">
				Seven Seed Entity Questionnaire
			</h1>
			<div className="relative flex">
				<div className="mr-10 py-10 flex flex-col">
					<SidebarLinks formIndex={formIndex} setFormIndex={setFormIndex} />
				</div>
				<form noValidate>
					{CompanyForms[formIndex].component}
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
