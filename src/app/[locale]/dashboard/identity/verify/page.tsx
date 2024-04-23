"use client";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import DecoratedButton from "@/components/DecoratedButton";
import { createVerificationSession, getCheckoutSessionObject } from "@/api/actions";

import styles from "./verify.module.css";
import StripeInlineLogo from "@/components/StripeInlineLogo";

export default function Verify() {
	const [status, setStatus] = useState<string | null>(null);
	const [customerEmail, setCustomerEmail] = useState<string | null>(null);
	const [redirecting, setRedirecting] = useState(false);
	const urlParams = useSearchParams();
	const sessionId = useMemo(() => {
		return urlParams.get("session_id");
	}, []);
	const router = useRouter();

	useEffect(() => {
		let fetching = false;

		async function getSession() {
			if (fetching) return;
			fetching = true;

			const { status, customer_email } = await getCheckoutSessionObject(
				sessionId!,
			);

			setStatus(status);
			setCustomerEmail(customer_email);

			fetching = false;
		}

		getSession();
	}, []);

	const redirectToIdentityVerification = async (sessionId: string) => {
		const url = await createVerificationSession(sessionId);
		if (!url) throw "Verification session did not provide a URL";

		router.replace(url);
	};

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
						<a className={styles.link} href="mailto:support@sevenseed.eu">
							support@sevenseed.eu
						</a>
						.
					</p>
					<p>
						Now, we ask you submit a couple of documents for verification.
						We are required to ask this by law, but it also makes us rest
						easy knowing our clients are who they say they are.
					</p>
					<p>
						Click the button below to visit a page where you will be asked
						to submit the documents for verification. Your documents are
						processed with utmost privacy by Stripe; we never receive them.
					</p>
					<DecoratedButton
						theme="verification"
						isLoaderVisible={redirecting}
						onClick={async (event) => {
							event.preventDefault();
							setRedirecting(true);

							return redirectToIdentityVerification(sessionId!);
						}}
					>
						Verify via <StripeInlineLogo />
					</DecoratedButton>
				</div>
			</div>
		);
	}

	return null;
}
