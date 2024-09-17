"use client";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getOwnerById } from "@/api/actions/database";
import { createOrReturnVerificationSession } from "@/api/actions/stripe";
import { normalizeObjectForApp } from "@/api/utility/normalize";
import ButtonWithLoader from "@/components/ButtonWithLoader";
import StripeInlineLogo from "@/components/StripeInlineLogo";
import styles from "../../../../dashboard.module.css";
import type { CompanyOwner } from "@/api/interfaces/owners";

function VerifyOwnerIdentity({ params }: { params: { id: CompanyOwner["id"] } }) {
	const [isLoading, setIsLoading] = useState(true);
	const [isRedirecting, setIsRedirecting] = useState(false);
	const [owner, setOwner] = useState<CompanyOwner | null>(null);
	const router = useRouter();

	const fetchOwner = useCallback(async () => {
		const receivedOwner = await getOwnerById(params.id);
		if (receivedOwner) {
			const normalizedOwner = normalizeObjectForApp(
				receivedOwner,
			) as CompanyOwner;
			setOwner(normalizedOwner);
		}
	}, [params.id]);

	const redirectToVerification = useCallback(async () => {
		const url = await createOrReturnVerificationSession(params.id);
		if (!url) throw new Error("Verification session did not return a URL");

		router.replace(url);
	}, [params.id, router]);

	useEffect(() => {
		fetchOwner();
	}, [fetchOwner]);

	useEffect(() => {
		if (owner) setIsLoading(false);
	}, [owner]);

	if (isLoading)
		return (
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<p className={styles.paragraph}>Fetching your information...</p>
				</div>
			</div>
		);

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h1 className={styles.heading}>Hi there!</h1>
				<p className={styles.paragraph}>
					As you are one of the owners of a company that&apos;s being
					registered by Seven Seed, we require you to submit your ID for
					verification. The verification process is handled securely by
					Stripe, we don&apos;t receive or handle your documents in any way.
				</p>
				<p className={styles.paragraph}>
					When you&apos;re ready, click the button below. You will be
					redirected to a page where you will be asked to upload an image of
					your ID. The process should only take a couple of minutes.
				</p>
				<ButtonWithLoader
					theme="verification"
					isLoaderVisible={isRedirecting}
					onClick={() => {
						setIsRedirecting(true);
						return redirectToVerification();
					}}
				>
					Verify with <StripeInlineLogo />
				</ButtonWithLoader>
			</div>
		</div>
	);
}

export default VerifyOwnerIdentity;
