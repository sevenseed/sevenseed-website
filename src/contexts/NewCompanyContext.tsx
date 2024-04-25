"use client";
import {
	type PropsWithChildren,
	type Dispatch,
	type SetStateAction,
	type FormEventHandler,
	createContext,
	useState,
} from "react";
import { useForm } from "@formspree/react";
import { type Form, type CompanyData } from "@/api/interfaces";

interface NewCompanyContext {
	step: Form["id"];
	setStep: Function;
	companyData: CompanyData;
	setCompanyData: Dispatch<SetStateAction<CompanyData>>;
	state: { [k: string]: any };
	handleSubmit: FormEventHandler<HTMLFormElement>;
	forms: Form[];
	lastStepID: Form["id"];
}

const defaultCompanyData: CompanyData = {
	contactName: "",
	contactEmail: "",
	contactPhoneNumber: "",
	civilStatus: "",

	contactAddressCountry: "",
	contactAddressRegion: "",
	contactAddressCity: "",
	contactAddressPostalCode: "",
	contactAddressAddressLine1: "",
	contactAddressAddressLine2: "",

	legalEntity: "",
	companyName: "",
	companyDescription: "",
	companyPhoneNumber: "",

	companyAddressCountry: "",
	companyAddressRegion: "",
	companyAddressCity: "",
	companyAddressPostalCode: "",
	companyAddressAddressLine1: "",
	companyAddressAddressLine2: "",
	companyAddressType: "HomeAddress",

	initialFunding: "",
	specialRequests: "",
};

const forms: Form[] = [
	{ id: "you", label: "You" },
	{ id: "address", label: "Address" },
	{ id: "company", label: "Company" },
];
const lastStepID = forms[forms.length - 1].id;

export const NewCompanyContext = createContext<NewCompanyContext>({
	step: "you",
	setStep: () => {},
	companyData: defaultCompanyData,
	setCompanyData: () => {},
	state: {},
	handleSubmit: () => {},
	forms,
	lastStepID,
});

const formID = process.env.NEXT_PUBLIC_FORM_ID;
if (!formID) throw "Formspree form ID not found in environment file";

export function NewCompanyContextProvider({ children }: PropsWithChildren) {
	const [step, setStep] = useState("you");
	const [companyData, setCompanyData] = useState<CompanyData>(defaultCompanyData);
	const [state, handleSubmit] = useForm(formID!);

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
				lastStepID,
			}}
		>
			{children}
		</NewCompanyContext.Provider>
	);
}
