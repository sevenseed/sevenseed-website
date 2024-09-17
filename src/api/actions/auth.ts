"use server";
import { createClient } from "@/supabase/server";
import { RedirectType, redirect } from "next/navigation";
import { headers } from "next/headers";

const supabase = createClient();

export const getUser = async () => {
	const { data, error } = await supabase.auth.getUser();

	if (error) {
		if (error.status === 401) {
			return null;
		} else {
			throw new Error(error.message);
		}
	}

	const { id, email } = data.user;

	if (!email) {
		throw new Error("User email is missing");
	}

	return {
		id,
		email,
	};
};

export const signIn = async (formData: FormData, returnTo = "/dashboard") => {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	const { error } = await supabase.auth.signInWithPassword({
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

export const signUp = async (formData: FormData, redirectTo = "/dashboard") => {
	const origin = headers().get("origin");
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	const { error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			emailRedirectTo: `${origin}${redirectTo}`,
		},
	});

	if (error) {
		return { message: "Could not sign up user", error };
	}

	return redirect(redirectTo, RedirectType.replace);
};

export const sendPasswordRecoveryEmail = async (email: string) => {
	const origin = headers().get("origin");

	const response = await supabase.auth.resetPasswordForEmail(email, {
		redirectTo: `${origin}/reset-password`,
	});

	return response;
};

export const setPassword = async (password: string) => {
	const response = await supabase.auth.updateUser({ password });

	return response;
};
