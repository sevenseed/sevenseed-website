"use client";
import { type PropsWithChildren, createContext, useState, useMemo } from "react";
import { useForm } from "@formspree/react";
import {
	type Form,
	type CompanyData,
	type KeyArray,
	type NewCompanyContext as NewCompanyContextInterface,
} from "@/api/interfaces";

const defaultCompanyData: CompanyData = {
	contactName: "",
	dateOfBirth: "",
	civilStatus: "Single",
	contactEmail: "",
	contactPhoneNumber: "",

	contactAddressAddressLine1: "",
	contactAddressAddressLine2: "",
	contactAddressPostalCode: "",
	contactAddressCity: "",
	contactAddressRegion: "",
	contactAddressCountry: "",

	legalEntity: "SRL",
	companyName: "",
	companyDescription: "",
	companyPhoneNumber: "",

	companyAddressType: "HomeAddress",
	companyAddressCountry: "",
	companyAddressRegion: "",
	companyAddressCity: "",
	companyAddressPostalCode: "",
	companyAddressAddressLine1: "",
	companyAddressAddressLine2: "",

	initialFunding: "",
	specialRequests: "",
};

export const defaultRequiredCompanyData: KeyArray<CompanyData> = [
	"contactName",
	"dateOfBirth",
	"civilStatus",
	"contactEmail",
	"contactPhoneNumber",

	"contactAddressAddressLine1",
	"contactAddressCity",
	"contactAddressCountry",

	"companyName",
	"companyDescription",
	"legalEntity",
	"companyPhoneNumber",

	"companyAddressType",
];

export const existingAddressRequiredCompanyData: KeyArray<CompanyData> = [
	"companyAddressAddressLine1",
	"companyAddressCity",
	"companyAddressCountry",
];

const forms: Form[] = [
	{ id: "client", label: "You" },
	{ id: "company", label: "Company" },
];
const lastStepID = forms[forms.length - 1].id;

export const NewCompanyContext = createContext<NewCompanyContextInterface>({
	step: "client",
	setStep: () => {},
	companyData: defaultCompanyData,
	setCompanyData: () => {},
	state: {},
	handleSubmit: () => {},
	forms,
	currentStepIndex: 0,
	lastStepID,
});

const formID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
if (!formID) throw new Error("Formspree form ID not found in environment file");

export function NewCompanyContextProvider({ children }: PropsWithChildren) {
	const [step, setStep] = useState("client");
	const [companyData, setCompanyData] = useState<CompanyData>(defaultCompanyData);
	const [state, handleSubmit] = useForm(formID!);

	const currentStepIndex = useMemo(() => {
		return forms.findIndex((form) => form.id === step);
	}, [step]);

	return (
		<NewCompanyContext.Provider
			value={{
				step,
				setStep,
				companyData,
				setCompanyData,
				state,
				handleSubmit,
				forms,
				currentStepIndex,
				lastStepID,
			}}
		>
			{children}
		</NewCompanyContext.Provider>
	);
}
