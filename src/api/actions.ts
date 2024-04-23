"use server";
import Stripe from "stripe";

const STRIPE_SK = process.env.STRIPE_SECRET_KEY;
if (!STRIPE_SK) throw "Stripe secret key not found";

const stripe = new Stripe(STRIPE_SK);

export async function createCheckoutSession(customer_email: string) {
	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				price: "price_1OwZb6Ij6g3bgR0qEBU3S2uk",
				quantity: 1,
			},
		],
		customer_email,
		customer_creation: "always",
		mode: "payment",
		success_url: `http://localhost:3000/dashboard/identity/verify?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `http://localhost:3000/dashboard/payment/cancel?session_id={CHECKOUT_SESSION_ID}`,
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
	if (session.status === "expired") return;

	await stripe.checkout.sessions.expire(sessionId);
	return;
}

export async function createVerificationSession(sessionId: string) {
	const verificationSession = await stripe.identity.verificationSessions.create({
		type: "document",
		return_url: "http://localhost:3000/dashboard/identity/submitted",
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
