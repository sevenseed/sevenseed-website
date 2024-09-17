"use client";
import {
	type PropsWithChildren,
	createContext,
	useState,
	useMemo,
	useCallback,
	useReducer,
} from "react";
import { useForm } from "@formspree/react";
import { defaultOwners, ownersReducer } from "./partials/CompanyOwners";
import type {
	CompanyData,
	NewCompanyContext as NewCompanyContextInterface,
} from "@/api/interfaces/company";
import type { UUID } from "crypto";
import type { KeyArray } from "@/api/types";
import type { Form } from "@/api/interfaces/form";

const defaultCompanyData: CompanyData = {
	id: crypto.randomUUID() as UUID,

	name: "",
	description: "",
	phoneNumber: "",
	email: "",
	legalEntityType: "SRL",

	addressType: "HomeAddress",
	addressSource: defaultOwners[0].id,
	country: "",
	region: "",
	city: "",
	postalCode: "",
	addressLine1: "",
	addressLine2: "",
};

export const defaultRequiredCompanyData: KeyArray<CompanyData> = [
	"name",
	"description",
	"legalEntityType",
	"phoneNumber",

	"addressType",
];

export const existingAddressRequiredCompanyData: KeyArray<CompanyData> = [
	"addressLine1",
	"city",
	"country",
];

const forms: Form[] = [
	{ order: 0, id: "company", label: "Information" },
	{ order: 1, id: "companyAddress", label: "Address" },

	{ order: 2, id: "kyc", label: "Founders" },
	{ order: 3, id: "shares", label: "Ownership" },
].sort((a, b) => a.order - b.order);

export const NewCompanyContext = createContext<NewCompanyContextInterface>({
	step: "",
	setStep: () => {},
	companyData: defaultCompanyData,
	setCompanyData: () => {},
	owners: defaultOwners,
	dispatch: () => {},
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
	const [owners, dispatch] = useReducer(ownersReducer, defaultOwners);
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
				owners,
				dispatch,
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
