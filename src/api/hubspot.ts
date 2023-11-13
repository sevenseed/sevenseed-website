import { CompanyData } from "./interfaces";

// test form: https://share-eu1.hsforms.com/1b1Nc0NqvRQGXd0fuDn2vUQ2dapz2
export const submitCompanyDataToHubspot = async (data: CompanyData) => {
	// Submit company data to hubspot form api to track leads

	// TODO: Use authenticated endpoint?
	// https://legacydocs.hubspot.com/docs/methods/forms/submit_form
	// https://legacydocs.hubspot.com/docs/methods/forms/submit_form_v3_authentication

	// TODO: Determine if hubspot library is worth adding 12mb of dependencies
	// https://www.npmjs.com/package/@hubspot/api-client

	const portalId = process.env.HUBSPOT_PORTAL_ID || "143267582"; // seven seed portal
	const formGuid =
		process.env.HUBSPOT_FORM_GUID || "9ef70045-f624-41d0-a978-35d4ad96e52a"; // test form: 6f535cd0-daaf-4501-9777-47ee0e7daf51

	const hubspotFormData = {
		fields: [
			{ objectTypeId: "0-1", name: "email", value: data.contactEmail },
			{ objectTypeId: "0-1", name: "address", value: data.contactAddress },
			{ objectTypeId: "0-2", name: "entity_type", value: data.legalEntity },
			{ objectTypeId: "0-2", name: "name", value: data.companyName },
			{
				objectTypeId: "0-2",
				name: "description",
				value: data.companyDescription,
			},
			{ objectTypeId: "0-2", name: "address", value: data.companyAddress },
			{ objectTypeId: "0-2", name: "phone", value: data.companyPhoneNumber },
			{
				objectTypeId: "0-2",
				name: "initial_funding",
				value: data.initialFunding || "other",
			},
			{ objectTypeId: "0-1", name: "civil_status", value: data.civilStatus },
			{
				objectTypeId: "0-2",
				name: "special_requests",
				value: data.specialRequests || "",
			},
		],
	};

	const response = await fetch(
		`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(hubspotFormData),
		},
	);

	if (!response.ok) {
		console.error(response);
		throw new Error("There was an error submitting the form, please try again.");
	}

	return response;
};
