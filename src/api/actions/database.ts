"use server";
import { createClient } from "@/supabase/server";
import { UUID } from "crypto";

export const getApplication = async (id: UUID) => {
	const supabase = createClient();

	const { data, error } = await supabase.from("companies").select().eq("id", id);
	if (error) throw new Error(error.message);
	if (!data)
		throw new Error("Application not supplied when fetched by URL-supplied ID");

	// * return first and only object, as we are fetching by ID
	// * and should only ever receive one object inside the `data` array
	return data[0];
};
