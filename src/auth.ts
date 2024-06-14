import { headers } from "next/headers";
import { RedirectType, redirect } from "next/navigation";
import { createClient } from "./supabase/server";

const getFullPath = () => {
	const urlString = headers().get("x-url");
	if (!urlString) return null;
	const url = new URL(urlString);
	return url.pathname + url.search;
};

const getUserOptional = async () => {
	const supabase = createClient();
	const { data, error } = await supabase.auth.getUser();
	if (error) {
		if (error.status === 401) {
			return null;
		} else {
			throw new Error(error.message);
		}
	}
	const user = data.user;
	if (!user.email) {
		throw new Error("User email is missing");
	}
	return {
		id: user.id,
		email: user.email,
	};
};

const getUser = async () => {
	const user = await getUserOptional();
	if (user) {
		return user;
	}
	const fullPath = getFullPath();
	if (fullPath) {
		return redirect(
			`/auth?${new URLSearchParams({ returnTo: fullPath })}`,
			RedirectType.replace,
		);
	} else {
		return redirect("/auth", RedirectType.replace);
	}
};
export default getUser;
