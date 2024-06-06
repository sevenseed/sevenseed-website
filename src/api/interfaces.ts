import { type Dispatch, type SetStateAction, type FormEventHandler } from "react";

export type KeyArray<T> = Array<keyof T>;

export interface GenericObject {
	[key: string | number]: any;
}

export interface CompanyData extends GenericObject {
	contactName: string;
	dateOfBirth: string;
	civilStatus: "Single" | "Married" | "Legal Cohabitation" | string;
	contactEmail: string;
	contactPhoneNumber: string;

	contactAddressCountry: string;
	contactAddressRegion?: string;
	contactAddressCity: string;
	contactAddressPostalCode: string;
	contactAddressAddressLine1: string;
	contactAddressAddressLine2?: string;

	companyName: string;
	companyDescription: string;
	companyPhoneNumber: string;
	legalEntity: string;

	companyAddressType: "HomeAddress" | "CreateNewAddress" | "ExistingAddress";
	companyAddressCountry: string;
	companyAddressRegion?: string;
	companyAddressCity: string;
	companyAddressPostalCode: string;
	companyAddressAddressLine1: string;
	companyAddressAddressLine2?: string;

	initialFunding: string;
	specialRequests: string;
}

export interface NewCompanyContext {
	step: Form["id"];
	setStep: Function;
	companyData: CompanyData;
	setCompanyData: Dispatch<SetStateAction<CompanyData>>;
	formState: { [key: string]: any };
	handleSubmit: FormEventHandler<HTMLFormElement>;
	forms: Form[];
	nextStep: Form | null;
	moveToNextStep: Function;
}

export interface Form {
	order: number;
	id: string;
	label: string;
}

export interface FormPage {
	step: Form["id"];
	label: string;
}
