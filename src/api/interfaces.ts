import type { Dispatch, SetStateAction, FormEventHandler } from "react";
import type { UUID } from "crypto";
import type { OwnersAction } from "@/contexts/partials/CompanyOwners";

type Email = `${string}@${string}.${string}` | "";
type CivilStatus = "Single" | "Married" | "Legal Cohabitation";
type AddressType = "HomeAddress" | "CreateNewAddress" | "ExistingAddress";

export type KeyArray<T> = Array<keyof T>;

export interface GenericObject extends Object {
	[key: string | number]: any;
}

export interface CompanyOwner extends GenericObject {
	id: UUID;
	name: string;
	email: Email;
	civilStatus: CivilStatus;
	phoneNumber: string;

	addressLine1: string;
	addressLine2?: string;
	postalCode: string;
	city: string;
	region?: string;
	country: string;

	shares: number;

	color: string;
}

export interface CompanyData extends GenericObject {
	name: string;
	description: string;
	phoneNumber: string;
	legalEntityType: string;

	addressType: AddressType;
	country: string;
	region?: string;
	city: string;
	postalCode: string;
	addressLine1: string;
	addressLine2?: string;
}

// * snake_case version of the `CompanyData` type
// * for use when submitting to Supabase
export interface DatabaseReadyCompanyData extends GenericObject {
	id?: UUID;
	application_submitted: boolean;

	name: string;
	description: string;
	phone_number: string;
	legal_entity_type: string;

	address_type: "HomeAddress" | "CreateNewAddress" | "ExistingAddress";
	country: string;
	region?: string;
	city: string;
	postal_code: string;
	address_line1: string;
	address_line2?: string;
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

	owners: CompanyOwner[];
	dispatch: Dispatch<OwnersAction>;

	formState: GenericObject;
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
