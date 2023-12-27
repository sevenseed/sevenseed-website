"use server";
import { HUBSPOT_FORM_GUID, HUBSPOT_PORTAL_ID } from "@/config";
// import supabase from "@/supabase";
// import { headers } from "next/headers";
import { CompanyData } from "./interfaces";
import assertUnreachable from "@/assertUnreachable";

// test form: https://share-eu1.hsforms.com/1b1Nc0NqvRQGXd0fuDn2vUQ2dapz2
export const submitCompanyDataToHubspot = async (data: CompanyData) => {
	// Submit company data to hubspot form api to track leads

	// TODO: Use authenticated endpoint?
	// https://legacydocs.hubspot.com/docs/methods/forms/submit_form
	// https://legacydocs.hubspot.com/docs/methods/forms/submit_form_v3_authentication

	// TODO: Determine if hubspot library is worth adding 12mb of dependencies
	// https://www.npmjs.com/package/@hubspot/api-client

	const companyAddress = (() => {
		switch (data.companyAddress.type) {
			case "HomeAddress":
				return "USE_HOME_ADDRESS";
			case "CreateNewAddress":
				return "CREATE_NEW_ADDRESS";
			case "ExistingAddress":
				return data.companyAddress.location;
			default:
				return assertUnreachable(data.companyAddress);
		}
	})();

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
			{ objectTypeId: "0-2", name: "address", value: companyAddress },
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
		`https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
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

	// Create Supabase user at same time as hubspot form submission
	// TODO: Move this to a separate function and ensure both accounts actually get created successfully

	// const origin = headers().get("origin");
	// const { error } = await supabase().auth.signUp({
	// 	email: data.contactEmail,
	// 	password: data.password,
	// 	options: {
	// 		emailRedirectTo: `${origin}/auth/callback`,
	// 	},
	// });

	// if (error) {
	// 	console.error(error);
	// 	throw new Error("There was an error creating account, please try again.");
	// }

	return response;
};
