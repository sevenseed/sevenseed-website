"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { expireCheckoutSession } from "@/api/actions";

export default function Cancel() {
	const [status, setStatus] = useState<string>("open");
	const urlParams = useSearchParams();

	useEffect(() => {
		let sending = false;

		const sessionId = urlParams.get("session_id");

		async function closeSession() {
			if (sending) return;
			sending = true;

			await expireCheckoutSession(sessionId!);

			setStatus("complete");

			sending = false;
		}

		closeSession();
	}, []);

	if (status === "open") {
		return "Getting response from Stripe...";
	}

	if (status === "complete") {
		return (
			<section>
				<div className="mx-4 relative flex flex-auto justify-center">
					<p>You have cancelled the payment.</p>
				</div>
			</section>
		);
	}

	return null;
}
