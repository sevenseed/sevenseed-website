import type { Dispatch, SetStateAction, FormEventHandler } from "react";

export type KeyArray<T> = Array<keyof T>;

export interface GenericObject extends Object {
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

// * snake_case version of the `CompanyData` type
// * for use when submitting to Supabase
export interface DatabaseReadyCompanyData extends GenericObject {
	contact_name: string;
	date_of_birth: string;
	civil_status: "Single" | "Married" | "Legal Cohabitation" | string;
	contact_email: string;
	contact_phone_number: string;

	contact_address_country: string;
	contact_address_region?: string;
	contact_address_city: string;
	contact_address_postal_code: string;
	contact_address_address_line1: string;
	contact_address_address_line2?: string;

	company_name: string;
	company_description: string;
	company_phone_number: string;
	legal_entity: string;

	company_address_type: "HomeAddress" | "CreateNewAddress" | "ExistingAddress";
	company_address_country: string;
	company_address_region?: string;
	company_address_city: string;
	company_address_postal_code: string;
	company_address_address_line1: string;
	company_address_address_line2?: string;

	initial_funding: string;
	special_requests: string;
}

export interface Form {
	order: number;
	id: string;
	label: string;
}

export interface NewCompanyContext {
	forms: Form[];
	step: Form["id"];
	setStep: Function;

	companyData: CompanyData;
	setCompanyData: Dispatch<SetStateAction<CompanyData>>;

	formState: { [key: string]: any };
	handleSubmit: FormEventHandler<HTMLFormElement>;

	nextStep: Form | null;
	previousStep: Form | null;
	moveToNextStep: Function;
	moveToPreviousStep: Function;
}

export interface FormPage {
	step: Form["id"];
	label: string;
}
