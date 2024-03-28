"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getSessionObject } from "@/api/actions";

import styles from "./success.module.css";

export default function Success() {
	const [status, setStatus] = useState<string | null>(null);
	const [customerEmail, setCustomerEmail] = useState<string | null>(null);
	const urlParams = useSearchParams();

	useEffect(() => {
		let fetching = false;

		const sessionId = urlParams.get("session_id");

		async function getSession() {
			if (fetching) return;
			fetching = true;

			const { status, customer_email } = await getSessionObject(sessionId!);

			setStatus(status);
			setCustomerEmail(customer_email);

			fetching = false;
		}

		getSession();
	}, []);

	if (status === "open") {
		return "Waiting for the payment session to close...";
	}

	if (status === "complete") {
		return (
			<div className="mx-4 relative flex flex-auto justify-center">
				<div className={styles.container}>
					<h1 className={styles.heading}>
						Thank you for submitting your information!
					</h1>
					<p>
						We appreciate your business! A confirmation email will be sent
						to <span className={styles.email}>{customerEmail}</span>. If you
						have any questions, please send us a message at{" "}
						<a className={styles.link} href="mailto:orders@example.com">
							orders@example.com
						</a>
						.
					</p>
				</div>
			</div>
		);
	}

	return null;
}
