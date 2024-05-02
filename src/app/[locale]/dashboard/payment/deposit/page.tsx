"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { createCheckoutSession } from "@/api/actions/stripe";
import DecoratedButton from "@/components/DecoratedButton";
import StripeInlineLogo from "@/components/StripeInlineLogo";

import styles from "../../dashboard.module.css";

export default function Deposit() {
	const urlParams = useSearchParams();
	const email = useMemo(() => {
		return urlParams.get("email");
	}, [urlParams]);
	if (!email) throw "Customer email was not supplied along with URL";

	const router = useRouter();
	const pathname = usePathname();

	// * remove query params
	// > https://github.com/vercel/next.js/discussions/48320#discussioncomment-5629141
	useEffect(() => {
		window.history.pushState({}, "", pathname);
	}, [pathname]);

	const [redirecting, setRedirecting] = useState(false);

	const redirectToCheckout = async () => {
		const url = await createCheckoutSession(email);
		if (!url) throw "Checkout session did not return a URL";

		router.replace(url);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h1 className={styles.heading}>
					Thank you for submitting your information!
				</h1>
				<p className={styles.paragraph}>
					We now ask you to submit a deposit. Click on the button below, it
					will take you to the checkout page. All payments are handled
					securely by Stripe.
				</p>
				<p className={styles.paragraph}>
					Once the deposit has been submitted, we will also ask you to provide
					a photo or scan of a document confirming your identity, as we are
					required to do by law. Please have your ID close at hand.
				</p>
				<DecoratedButton
					theme="checkout"
					isLoaderVisible={redirecting}
					onClick={(event) => {
						event.preventDefault();
						setRedirecting(true);
						return redirectToCheckout();
					}}
				>
					Checkout with <StripeInlineLogo />
				</DecoratedButton>
			</div>
		</div>
	);
}
