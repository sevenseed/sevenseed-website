"use server";
import Stripe from "stripe";

const STRIPE_SK = process.env.STRIPE_SK;
if (!STRIPE_SK) throw "Stripe secret key not found";

const PRODUCT_KEY = process.env.PRODUCT_KEY_INCORPORATION_REGULAR;
if (!PRODUCT_KEY) throw "Product key not found";

const BACKEND_HOST =
	`https://${process.env.VERCEL_URL}` ||
	`https://${process.env.BACKEND_HOST}` ||
	"http://127.0.0.1:3000";

const stripe = new Stripe(STRIPE_SK);

export async function createCheckoutSession(customer_email: string) {
	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				price: PRODUCT_KEY,
				quantity: 1,
			},
		],
		customer_email,
		customer_creation: "always",
		mode: "payment",
		success_url: `${BACKEND_HOST}/dashboard/identity/verify?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `${BACKEND_HOST}/dashboard/payment/cancel?session_id={CHECKOUT_SESSION_ID}`,
		automatic_tax: { enabled: true },
	});

	return session.url;
}

export async function getCheckoutSessionObject(sessionId: string) {
	const session = await stripe.checkout.sessions.retrieve(sessionId);

	return {
		status: session.status,
		customer_email: session.customer_email,
	};
}

export async function expireCheckoutSession(sessionId: string) {
	const session = await getCheckoutSessionObject(sessionId);
	if (session.status === "expired") return { email: session.customer_email };

	await stripe.checkout.sessions.expire(sessionId);
	return { email: session.customer_email };
}

export async function createVerificationSession(sessionId: string) {
	const verificationSession = await stripe.identity.verificationSessions.create({
		type: "document",
		return_url: `${BACKEND_HOST}/dashboard/identity/submitted`,
		client_reference_id: sessionId,
	});

	return verificationSession.url;
}

export async function getVerificationSessionObject(sessionId: string) {
	const session = await stripe.identity.verificationSessions.retrieve(sessionId);

	return session.status === "requires_input"
		? {
				status: session.status,
				url: session.url,
		  }
		: {
				status: session.status,
		  };
}
