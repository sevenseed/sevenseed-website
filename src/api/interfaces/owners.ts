import { CompanyData } from "./company";
import type { UUID } from "crypto";
import type { Email, CivilStatus } from "@/api/types";

// * keys for extracting address-related values from relevant objects
export const ADDRESS_KEYS = [
	"country",
	"region",
	"city",
	"postalCode",
	"addressLine1",
	"addressLine2",
] as Array<keyof CompanyOwner & keyof CompanyData>;

export interface CompanyOwner {
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

export interface DatabaseReadyCompanyOwner {
	id: UUID;

	name: string;
	email: Email;
	civil_status: CivilStatus;
	phone_number: string;

	address_line1: string;
	address_line2?: string;
	postal_code: string;
	city: string;
	region?: string;
	country: string;

	color: string;
}

export interface OwnerExtraDatabaseColumns {
	document_submitted: boolean;
	kyc_session_id: string;
}
