"use client";
import {
	type PropsWithChildren,
	createContext,
	useState,
	useMemo,
	useCallback,
} from "react";
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
	{ order: 0, id: "client", label: "Information" },
	{ order: 1, id: "clientAddress", label: "Address" },

	{ order: 2, id: "company", label: "Information" },
	{ order: 3, id: "companyAddress", label: "Address" },
].sort((a, b) => a.order - b.order);

export const NewCompanyContext = createContext<NewCompanyContextInterface>({
	step: "client",
	setStep: () => {},
	companyData: defaultCompanyData,
	setCompanyData: () => {},
	formState: {},
	handleSubmit: () => {},
	forms,
	nextStep: null,
	previousStep: null,
	moveToNextStep: () => {},
	moveToPreviousStep: () => {},
});

const formID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
if (!formID) throw new Error("Formspree form ID not found in environment file");

export function NewCompanyContextProvider({ children }: PropsWithChildren) {
	const [step, setStep] = useState(forms[0].id);
	const [companyData, setCompanyData] = useState<CompanyData>(defaultCompanyData);
	const [formState, handleSubmit] = useForm(formID!);

	const currentStep = useMemo(() => {
		return forms.find((form) => form.id === step);
	}, [step]);

	const previousStep = useMemo(() => {
		if (!currentStep)
			throw "Current step not found while calculating previous step in company form navigation";

		const precedingStep =
			currentStep === forms[0] ? null : forms[currentStep.order - 1];

		if (precedingStep !== null && precedingStep === undefined)
			throw "Previous step not found while calculating next step in company form navigation";

		return precedingStep;
	}, [currentStep]);

	const moveToPreviousStep = useCallback(
		() => (previousStep ? setStep(previousStep.id) : setStep(forms[0].id)),
		[previousStep],
	);

	const nextStep = useMemo(() => {
		if (!currentStep)
			throw "Current step not found while calculating next step in company form navigation";

		// * if current step is the last one, return `null`
		const followingStep =
			currentStep === forms[forms.length - 1]
				? null
				: forms[currentStep.order + 1];

		if (followingStep !== null && followingStep === undefined)
			throw "Next step not found while calculating next step in company form navigation";

		return followingStep;
	}, [currentStep]);

	const moveToNextStep = useCallback(
		() => (nextStep ? setStep(nextStep.id) : setStep(forms[forms.length - 1].id)),
		[nextStep],
	);

	return (
		<NewCompanyContext.Provider
			value={{
				step,
				setStep,
				companyData,
				setCompanyData,
				formState,
				handleSubmit,
				forms,
				nextStep,
				previousStep,
				moveToNextStep,
				moveToPreviousStep,
			}}
		>
			{children}
		</NewCompanyContext.Provider>
	);
}
