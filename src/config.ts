export const HUBSPOT_PORTAL_ID = "143267582"; // seven seed portal
export const HUBSPOT_FORM_GUID = "9ef70045-f624-41d0-a978-35d4ad96e52a"; // test form: 6f535cd0-daaf-4501-9777-47ee0e7daf51
export const SUPABASE_URL = (() => {
	const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
	if (!supabaseUrl || !supabaseUrl.includes("supabase.co"))
		throw new Error("NEXT_PUBLIC_SUPABASE_URL is missing or invalid");
	return supabaseUrl;
})();

export const SUPABASE_ANON_KEY = (() => {
	const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
	if (!supabaseKey) throw new Error("NEXT_PUBLIC_SUPABASE_ANON_KEY is missing");
	return supabaseKey;
})();

/**
 * https://github.com/vercel/next.js/issues/5354#issuecomment-520305040
 */
export const IS_SERVER = typeof window === "undefined";
