"use client";
import { useState } from "react";
// import { useEffect, useMemo, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import { getVerificationSessionObject } from "@/api/actions";
// import { useRouter } from "next/navigation";

import { type NullableString } from "@/api/types";

import styles from "./submitted.module.css";

export default function Submitted() {
	/* const router = useRouter();
	const urlParams = useSearchParams();
	const sessionId = useMemo(() => {
		return urlParams.get("session_id");
	}, []); */

	const [status, setStatus] = useState<NullableString>(null);
	// const [retryURL, setRetryURL] = useState<NullableString>(null);

	/* useEffect(() => {
		let fetching = false;

		async function getSession() {
			if (fetching) return;
			fetching = true;

			const object = await getVerificationSessionObject(sessionId!);

			setStatus(object.status);
			if (object.status === "requires_input") {
				setRetryURL(object.url);
			}

			fetching = false;
		}

		getSession();
	}, []); */

	if (status === "open") {
		return "Waiting for the verification session to close...";
	}

	if (status === "complete") {
		return (
			<div className="mx-4 relative flex flex-auto justify-center">
				<div className={styles.container}>
					<h1 className={styles.heading}>
						Thank you for verifying your identity!
					</h1>
					<p>
						The identity verification service is currently running its
						checks. We will contact you once the results are in!
					</p>
				</div>
			</div>
		);
	}

	// return null;
	return (
		<div className="mx-4 relative flex flex-auto justify-center">
			<div className={styles.container}>
				<h1 className={styles.heading}>
					Thank you for verifying your identity!
				</h1>
				<p>
					The identity verification service is currently running its checks.
					We will contact you once the results are in!
				</p>
			</div>
		</div>
	);
}
