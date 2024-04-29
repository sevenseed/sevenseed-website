"use client";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { expireCheckoutSession } from "@/api/actions";

import styles from "../../dashboard.module.css";

export default function Cancel() {
	const [status, setStatus] = useState("open");
	const [email, setEmail] = useState("");
	const urlParams = useSearchParams();
	const pathname = usePathname();

	// * remove query params
	// > https://github.com/vercel/next.js/discussions/48320#discussioncomment-5629141
	useEffect(() => {
		window.history.pushState({}, "", pathname);
	}, [pathname]);

	useEffect(() => {
		let sending = false;

		const sessionId = urlParams.get("session_id");

		async function closeSession() {
			if (sending) return;
			sending = true;

			const { email } = await expireCheckoutSession(sessionId!);

			setStatus("complete");
			if (email) setEmail(email);

			sending = false;
		}

		closeSession();
	}, [urlParams]);

	if (status === "open") {
		return (
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<p className={styles.paragraph}>Getting response from Stripe...</p>
				</div>
			</div>
		);
	}

	if (status === "complete") {
		return (
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<h1 className={styles.heading}>You have cancelled the payment.</h1>
					<p className={styles.paragraph}>
						Was this a mistake? You can go back to the{" "}
						<a
							className={styles.link}
							href={`/payment/deposit?email=${email}`}
						>
							deposit page
						</a>{" "}
						and try again.
					</p>
					<p className={styles.paragraph}>
						Was there an issue with the product? Please email{" "}
						<a className={styles.email} href="mailto:support@sevenseed.eu">
							support@sevenseed.eu
						</a>{" "}
						and let us know what was wrong.
					</p>
					<p className={styles.paragraph}>
						Was there an issue with Stripe? Please email{" "}
						<a className={styles.email} href="mailto:support@sevenseed.eu">
							support@sevenseed.eu
						</a>{" "}
						and let us know.
					</p>
					<p className={styles.paragraph}>
						Changed your mind? Please{" "}
						<a className={styles.email} href="mailto:support@sevenseed.eu">
							email us
						</a>{" "}
						and let us know why. We&apos;re always looking to improve our
						service.
					</p>
				</div>
			</div>
		);
	}

	return null;
}
