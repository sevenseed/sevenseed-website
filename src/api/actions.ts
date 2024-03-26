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
		mode: "payment",
		success_url: `http://localhost:3000/return?success=true&session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `http://localhost:3000/return?cancel=true`,
		automatic_tax: { enabled: true },
	});

	return session.url;
}
