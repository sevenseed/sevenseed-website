"use client";
import { useCallback, useEffect, useState } from "react";
import { getOwnerById, markOwnerDocumentAsSubmitted } from "@/api/actions/database";
import { normalizeObjectForApp } from "@/api/utility/normalize";
import styles from "../../../../dashboard.module.css";
import type { CompanyOwner } from "@/api/interfaces/owners";

function OwnerSubmittedIdentity({ params }: { params: { id: CompanyOwner["id"] } }) {
	const [isLoading, setIsLoading] = useState(true);
	const [owner, setOwner] = useState<CompanyOwner | null>(null);

	const fetchOwner = useCallback(async () => {
		const receivedOwner = await getOwnerById(params.id);
		if (receivedOwner) {
			const normalizedOwner = normalizeObjectForApp(
				receivedOwner,
			) as CompanyOwner;
			setOwner(normalizedOwner);
		}
	}, [params.id]);

	useEffect(() => {
		fetchOwner();
	}, [fetchOwner]);

	useEffect(() => {
		if (owner) {
			markOwnerDocumentAsSubmitted(owner.id);
			setIsLoading(false);
		}
	}, [owner]);

	if (isLoading)
		return (
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<p className={styles.paragraph}>Just one second...</p>
				</div>
			</div>
		);

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h1 className={styles.heading}>Thank you!</h1>
				<p className={styles.paragraph}>
					Your ID has been successfully submitted. Now, we&apos;re going to
					wait to hear from Stripe on the status of your verification. If we
					require for you to resubmit your document, we will let you know.
					Otherwise, it&apos;s all done!
				</p>
			</div>
		</div>
	);
}

export default OwnerSubmittedIdentity;
