import { type BaseHTMLAttributes } from "react";

export interface GenericObject {
	[key: string | number]: any;
}

export interface CompanyData extends GenericObject {
	contactName: string;
	contactEmail: string;
	contactPhoneNumber: string;
	civilStatus: "Single" | "Married" | "Legal Cohabitation" | string;

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

	companyAddressCountry: string;
	companyAddressRegion?: string;
	companyAddressCity: string;
	companyAddressPostalCode: string;
	companyAddressAddressLine1: string;
	companyAddressAddressLine2?: string;
	companyAddressType: "HomeAddress" | "CreateNewAddress" | "ExistingAddress";

	initialFunding: string;
	specialRequests: string;
	// password: string;
}

export interface Form {
	id: string;
	label: string;
	component?: ({ ...props }: BaseHTMLAttributes<HTMLDivElement>) => JSX.Element;
}
