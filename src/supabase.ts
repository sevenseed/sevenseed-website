import {
	createServerClient,
	type CookieOptions,
	createBrowserClient,
} from "@supabase/ssr";
import { IS_SERVER, SUPABASE_ANON_KEY, SUPABASE_URL } from "./config";
import { cookies } from "next/headers";

if (!IS_SERVER) {
	throw new Error("Supabase is currently only supported on the server side.");
}

const supabase = () => {
	const cookiesStore = cookies();
	return createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
		cookies: {
			get(name: string) {
				return cookiesStore.get(name)?.value;
			},
			set(name: string, value: string, options: CookieOptions) {
				try {
					cookiesStore.set({ name, value, ...options });
				} catch (error) {
					// The `set` method was called from a Server Component.
					// This can be ignored if you have middleware refreshing
					// user sessions.
				}
			},
			remove(name: string, options: CookieOptions) {
				try {
					cookiesStore.set({ name, value: "", ...options });
				} catch (error) {
					// The `delete` method was called from a Server Component.
					// This can be ignored if you have middleware refreshing
					// user sessions.
				}
			},
		},
	});
};
export default supabase;
