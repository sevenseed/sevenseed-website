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

export const STRIPE_SK = (() => {
	const stripeSecretKey = process.env.STRIPE_SK;
	if (!stripeSecretKey) throw new Error("STRIPE_SK is missing");
	return stripeSecretKey;
})();

/**
 * https://github.com/vercel/next.js/issues/5354#issuecomment-520305040
 */
export const IS_SERVER = typeof window === "undefined";
