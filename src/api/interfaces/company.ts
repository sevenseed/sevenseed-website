import type { Dispatch, SetStateAction, FormEventHandler } from "react";
import type { UUID } from "crypto";
import type { AddressType, GenericObject } from "@/api/types";
import type { Form } from "@/api/interfaces/form";
import type { CompanyOwner } from "@/api/interfaces/owners";
import type { OwnersAction } from "@/contexts/partials/CompanyOwners";

export const DBOmitKeys = [
	"user_id",
	"owners",
	"created_at",
	"updated_at",
	"application_submitted",
	"schema_version",
] as const;

export interface CompanyData {
	id: UUID;

	name: string;
	description: string;
	phoneNumber: string;
	email: string;
	legalEntityType: string;

	addressType: AddressType;
	addressSource?: CompanyOwner["id"];
	country: string;
	region?: string;
	city: string;
	postalCode: string;
	addressLine1: string;
	addressLine2?: string;
}

// * snake_case version of the `CompanyData` type
// * for use when submitting to Supabase
export interface DatabaseReadyCompanyData {
	id: UUID;
	application_submitted: boolean;

	name: string;
	description: string;
	phone_number: string;
	email: string;
	legal_entity_type: string;

	address_type: AddressType;
	address_source: CompanyOwner["id"] | null;
	country: string;
	region?: string;
	city: string;
	postal_code: string;
	address_line1: string;
	address_line2?: string;
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
