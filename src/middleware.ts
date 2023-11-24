import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest, type NextFetchEvent } from "next/server";
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "./config";
import createIntlMiddleware from 'next-intl/middleware';
import { locales } from "./navigation";


export const intlResponse = (request: NextRequest) => {
	const url = new URL(request.url);
	console.log(url.pathname)
	if (url.pathname.startsWith("/images") || url.pathname.startsWith("/_next")) {
		return null;
	}
	const handleI18nRouting = createIntlMiddleware({
		locales: locales,
		defaultLocale: 'en',
	});
	return handleI18nRouting(request);

};



const middleware = async (request: NextRequest) => {

	let response = intlResponse(request) ?? NextResponse.next()
	request.headers.set("x-url", request.url);

	const supabase = createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
		cookies: {
			get(name: string) {
				return request.cookies.get(name)?.value;
			},
			set(name: string, value: string, options: CookieOptions) {
				request.cookies.set({
					name,
					value,
					...options,
				});
				response.cookies.set({
					name,
					value,
					...options,
				});
			},
			remove(name: string, options: CookieOptions) {
				request.cookies.set({
					name,
					value: "",
					...options,
				});
				response.cookies.set({
					name,
					value: "",
					...options,
				});
			},
		},
	});

	await supabase.auth.getSession();

	response.headers.set("x-url", request.url);

	return response;
}

export default middleware
