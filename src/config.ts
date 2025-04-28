/**
 * https://github.com/vercel/next.js/issues/5354#issuecomment-520305040
 */
export const IS_SERVER = typeof window === "undefined";

export const SUPABASE_URL = (() => {
	const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
	if (!supabaseUrl || !supabaseUrl.includes("supabase.co")) {
		if (process.env.NODE_ENV === "development") {
			console.warn("⚠️ Supabase URL is missing or invalid in development");
			return "https://dummy.supabase.co";
		}
		throw new Error("NEXT_PUBLIC_SUPABASE_URL is missing or invalid");
	}
	return supabaseUrl;
})();


export const SUPABASE_ANON_KEY = (() => {
	const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
	if (!supabaseKey) throw new Error("NEXT_PUBLIC_SUPABASE_ANON_KEY is missing");
	return supabaseKey;
})();

export const STRIPE_SK = (() => {
	const stripeSecretKey = process.env.STRIPE_SK;
	if (!stripeSecretKey && IS_SERVER) {
		if (process.env.NODE_ENV === "development") {
			console.warn("⚠️ STRIPE_SK is missing in development — using dummy key");
			return "sk_test_dummy";
		}
		throw new Error("STRIPE_SK is missing");
	}
	return stripeSecretKey;
})();


export const LOOPS_KYC_EMAIL_KEY = (() => {
	const loopsKey = process.env.LOOPS_KYC_EMAIL_KEY;
	if (!loopsKey && IS_SERVER) {
		if (process.env.NODE_ENV === "development") {
			console.warn("⚠️ LOOPS_KYC_EMAIL_KEY is missing in development — using dummy key");
			return "dummy_key";
		}
		throw new Error("LOOPS_KYC_EMAIL_KEY is missing");
	}
	return loopsKey;
})();
