import { CompanyData } from "./interfaces";

export const submitCompanyDataToHubspot = async (data: CompanyData) => {
	// Submit company data to hubspot form api to track leads

	// TODO: Use authenticated endpoint?
	// https://legacydocs.hubspot.com/docs/methods/forms/submit_form
	// https://legacydocs.hubspot.com/docs/methods/forms/submit_form_v3_authentication

	// TODO: Determine if hubspot library is worth adding 12mb of dependencies
	// https://www.npmjs.com/package/@hubspot/api-client

	// TODO: Remove this line to actually submit data to hubspot
	return alert(`TODO: Submit data to hubspot api:\n\n${JSON.stringify(data)}`);

	const portalId = process.env.HUBSPOT_PORTAL_ID || "";
	const formGuid = process.env.HUBSPOT_FORM_GUID || "";

	const response = await fetch(
		`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		},
	);

	if (!response.ok) {
		throw new Error("Error submitting data to hubspot");
	}

	return response;
};
