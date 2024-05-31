"use client";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { createCheckoutSession } from "@/api/actions/stripe";
import ButtonWithLoader from "@/components/ButtonWithLoader";
import StripeInlineLogo from "@/components/StripeInlineLogo";

import styles from "../../dashboard.module.css";
import { NewCompanyContext } from "@/contexts/NewCompanyContext";

export default function Deposit() {
	const { companyData } = useContext(NewCompanyContext);

	const router = useRouter();
	const [redirecting, setRedirecting] = useState(false);

	const redirectToCheckout = async () => {
		const url = await createCheckoutSession(companyData.contactEmail);
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
				<ButtonWithLoader
					theme="checkout"
					isLoaderVisible={redirecting}
					onClick={(event) => {
						event.preventDefault();
						setRedirecting(true);
						return redirectToCheckout();
					}}
				>
					Checkout with <StripeInlineLogo />
				</ButtonWithLoader>
			</div>
		</div>
	);
}
