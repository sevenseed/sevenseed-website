"use client";
import { useEffect } from "react";
import styles from "../../dashboard.module.css";

export default function Submitted() {
	useEffect(() => {
		window.localStorage.setItem("applicationSubmitted", "true");
	}, []);

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
