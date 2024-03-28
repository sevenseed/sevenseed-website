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
		success_url: `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `http://localhost:3000/cancel?session_id={CHECKOUT_SESSION_ID}`,
		automatic_tax: { enabled: true },
	});

	return session.url;
}

export async function getSessionObject(sessionId: string) {
	const session = await stripe.checkout.sessions.retrieve(sessionId);

	return {
		status: session.status,
		customer_email: session.customer_email,
	};
}

export async function expireSession(sessionId: string) {
	return await stripe.checkout.sessions.expire(sessionId);
}
