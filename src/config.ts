/**
 * https://github.com/vercel/next.js/issues/5354#issuecomment-520305040
 */
export const IS_SERVER = typeof window === "undefined";

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
	// * a non-public key will always be missing from the client
	// * so we only check for it on the server side
	if (!stripeSecretKey && IS_SERVER) throw new Error("STRIPE_SK is missing");
	return stripeSecretKey;
})();

export const LOOPS_KYC_EMAIL_KEY = (() => {
	const loopsKey = process.env.LOOPS_KYC_EMAIL_KEY;
	// * a non-public key will always be missing from the client
	// * so we only check for it on the server side
	if (!loopsKey && IS_SERVER) throw new Error("LOOPS_KYC_EMAIL_KEY is missing");
	return loopsKey;
})();