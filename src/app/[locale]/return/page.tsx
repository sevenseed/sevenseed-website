"use client";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

export default function Return() {
	const [status, setStatus] = useState(null);
	const [cancelled, setCancelled] = useState(false);
	const [succeeded, setSucceeded] = useState(false);
	const [customerEmail, setCustomerEmail] = useState("");

	useEffect(() => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const sessionId = urlParams.get("session_id");
		const hasSucceeded = urlParams.has("success");
		const hasCancelled = urlParams.has("cancel");

		fetch(`http://localhost:3000/api/checkout?session_id=${sessionId}`, {
			method: "GET",
		})
			.then((res) => res.json())
			.then((data) => {
				setStatus(data.status);
				setCustomerEmail(data.customer_email);
				setSucceeded(hasSucceeded);
				setCancelled(hasCancelled);
			});
	}, []);

	if (status === "open") {
		return redirect("/");
	}

	if (status === "complete") {
		return succeeded ? (
			<section>
				<p>
					We appreciate your business! A confirmation email will be sent to{" "}
					{customerEmail}. If you have any questions, please email{" "}
					<a href="mailto:orders@example.com">orders@example.com</a>.
				</p>
			</section>
		) : cancelled ? (
			<section>
				<p>You have cancelled the payment.</p>
			</section>
		) : (
			<section></section>
		);
	}

	return null;
}
