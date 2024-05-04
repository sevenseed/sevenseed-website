"use server";
import supabase from "@/supabase";
import { headers } from "next/headers";
import { RedirectType, redirect } from "next/navigation";

export const signIn = async (formData: FormData, returnTo = "") => {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	const { error } = await supabase().auth.signInWithPassword({
		email,
		password,
	});

	if (error) {
		return { message: "Could not authenticate user", error };
	}

	if (returnTo) {
		return redirect(returnTo, RedirectType.replace);
	}

	return redirect("/dashboard");
};

export const signUp = async (formData: FormData) => {
	const origin = headers().get("origin");
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	const { error } = await supabase().auth.signUp({
		email,
		password,
		options: {
			emailRedirectTo: `${origin}/dashboard`,
		},
	});

	if (error) {
		return { message: "Could not sign up user", error };
	}

	return redirect("/dashboard");
};
