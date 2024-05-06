"use client";
import { Button } from "@/components/Button";
import { useEffect, useState } from "react";

export default function CompanySegment() {
	const [isApplicationSubmitted, setIsApplicationSubmitted] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const dataField = localStorage.getItem("applicationSubmitted");
		const isSubmitted = dataField && dataField === "true";
		if (isSubmitted) setIsApplicationSubmitted(true);
		setIsLoading(false);
	}, []);

	return (
		<div className="max-w-lg flex flex-col gap-y-4 p-4 bg-gray-50 border rounded">
			<h1 className="text-2xl font-bold">Your company</h1>
			{isLoading ? (
				"Checking your application status..."
			) : isApplicationSubmitted ? (
				<p>
					Application status: <b className="text-blue-500">submitted</b>
				</p>
			) : (
				<Button href="/dashboard/company/create" variant="solid" color="blue">
					Click here to start your application
				</Button>
			)}
		</div>
	);
}
