"use server";
import { createClient } from "@/supabase/server";
import type { UUID } from "crypto";
import type { DatabaseReadyCompanyData } from "@/api/interfaces/company";
import type { CompanyOwner, DatabaseReadyCompanyOwner } from "@/api/interfaces/owners";

const supabase = createClient();

export const getApplication = async (id: UUID) => {
	const { data: applicationData, error: applicationError } = await supabase
		.from("companies")
		.select()
		.eq("id", id)
		.single();
	if (applicationError) throw new Error(applicationError.message);
	if (!applicationData)
		throw new Error("Application not supplied when fetched by URL-supplied ID");

	const { data: ownersData, error: ownersError } = await supabase
		.from("owners")
		.select()
		.in("id", applicationData.owners);
	if (ownersError) throw new Error(ownersError.message);
	if (!ownersData)
		throw new Error("Owners list not supplied when application was fetched");

	return [applicationData, ownersData] as [
		DatabaseReadyCompanyData,
		DatabaseReadyCompanyOwner[],
	];
};

export const getOwnerById = async (id: CompanyOwner["id"]) => {
	const { data, error } = await supabase
		.from("owners")
		.select()
		.eq("id", id)
		.single();
	if (error) throw new Error(error.message);

	if (data) {
		return data as DatabaseReadyCompanyOwner;
	} else {
		throw new Error("Owner not found when searching by ID");
	}
};

export async function createKYCSessionForOwner(
	ownerId: CompanyOwner["id"],
	sessionId: string,
) {
	await supabase
		.from("owners")
		.update({ kyc_session_id: sessionId })
		.eq("id", ownerId)
		.select()
		.single();
}

export async function markOwnerDocumentAsSubmitted(id: CompanyOwner["id"]) {
	await supabase
		.from("owners")
		.update({ document_submitted: true })
		.eq("id", id)
		.select()
		.single();
}
