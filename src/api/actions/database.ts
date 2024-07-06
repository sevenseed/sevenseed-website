"use server";
import { createClient } from "@/supabase/server";
import type { UUID } from "crypto";
import type {
	DatabaseReadyCompanyData,
	DatabaseReadyCompanyOwner,
} from "../interfaces";

export const getApplication = async (id: UUID) => {
	const supabase = createClient();

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
