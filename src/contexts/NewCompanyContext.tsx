"use client";
import {
	type PropsWithChildren,
	type Dispatch,
	type SetStateAction,
	type FormEventHandler,
	createContext,
	useState,
	useMemo,
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
	currentStepIndex: number;
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

export const requiredCompanyData: Array<keyof CompanyData> = [
	"contactName",
	"contactEmail",
	"contactPhoneNumber",
	"civilStatus",

	"contactAddressCountry",
	"contactAddressCity",
	"contactAddressAddressLine1",

	"companyName",
	"legalEntity",
	"companyPhoneNumber",
];

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
	currentStepIndex: 0,
	lastStepID,
});

const formID = process.env.NEXT_PUBLIC_FORM_ID;

export function NewCompanyContextProvider({ children }: PropsWithChildren) {
	if (!formID)
		return (
			<div>
				<p>Something went wrong!</p>
				<p>
					Please report the following error to{" "}
					<a href="mailto:support@sevenseed.eu">support@sevenseed.eu</a>
				</p>
				<pre>Formspree form ID not found in environment file</pre>
			</div>
		);

	const [step, setStep] = useState("you");
	const [companyData, setCompanyData] = useState<CompanyData>(defaultCompanyData);
	const [state, handleSubmit] = useForm(formID);

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
