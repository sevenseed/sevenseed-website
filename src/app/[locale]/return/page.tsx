"use client";
import { useEffect, useMemo, useState } from "react";
import { redirect, useSearchParams } from "next/navigation";
import { getSessionObject } from "@/api/actions";

export default function Return() {
	const [status, setStatus] = useState<string | null>(null);
	const [customerEmail, setCustomerEmail] = useState<string | null>(null);

	const urlParams = useSearchParams();
	const cancelled = urlParams.has("cancel");
	const succeeded = urlParams.has("success");

	useEffect(() => {
		console.log("effect");
		let fetching = false;

		const sessionId = urlParams.has("session_id")
			? urlParams.get("session_id")
			: null;

		async function getSession() {
			console.log("getSession");
			if (fetching) return;
			fetching = true;

			const { status, customer_email } = await getSessionObject(sessionId!);
			console.log("🚀 ~ getSession ~ status:", status);

			setStatus(status);
			setCustomerEmail(customer_email);

			fetching = false;
		}

		if (sessionId) {
			console.log("sessionId");
			getSession();
		}
	}, [urlParams]);

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
			<section>Something went wrong.</section>
		);
	}

	return null;
}
