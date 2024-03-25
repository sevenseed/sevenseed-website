import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export const dynamic = "force-dynamic";

const STRIPE_SK = process.env.STRIPE_SECRET_KEY;
if (!STRIPE_SK) throw "Stripe secret key not found";

const stripe = new Stripe(STRIPE_SK);

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const session_id = searchParams.get("session_id");
	if (!session_id) throw "Session ID not found in request URL";

	try {
		const session = await stripe.checkout.sessions.retrieve(session_id);

		if (!session.customer_details) throw "Customer details not provided by session";

		return NextResponse.json({
			status: session.status,
			customer_email: session.customer_details.email,
		});
	} catch (err) {
		return Response.error();
	}
}

// ! in order to reliably process payments, Stripe recommends setting up
// ! a webhook on the backend, to wait until the payments has succeeded
// ! before fulfilling the order (in our case, registering a company)
// * https://docs.stripe.com/payments/checkout/fulfill-orders

export async function POST() {
	let url;

	try {
		const session = await stripe.checkout.sessions.create({
			line_items: [
				{
					price: "price_1OwZb6Ij6g3bgR0qEBU3S2uk",
					quantity: 1,
				},
			],
			mode: "payment",
			success_url: `http://localhost:3000/return?success=true`,
			cancel_url: `http://localhost:3000/return?cancel=true`,
			automatic_tax: { enabled: true },
		});
		if (!session.url) throw "Session did not provide URL";

		url = session.url;
	} catch (err: any) {
		console.log(err.message);
		return Response.error();
	}

	return redirect(url);
}
