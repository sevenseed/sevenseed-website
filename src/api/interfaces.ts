export interface CompanyData {
	civilStatus: "Single" | "Married" | "Legal cohabitation" | string;
	contactAddress: string;
	contactEmail: string;
	contactPhoneNumber: string;
	contactName: string;
	companyAddress:
		| {
				type: "HomeAddress";
		  }
		| {
				type: "CreateNewAddress";
		  }
		| {
				type: "ExistingAddress";
				location: string;
		  };
	companyDescription: string;
	companyName: string;
	companyPhoneNumber: string;
	initialFunding: string;
	legalEntity: string;
	password: string;
	specialRequests: string;
}
