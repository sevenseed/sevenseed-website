"use server";
import { LOOPS_KYC_EMAIL_KEY } from "@/config";
import type { CompanyOwner } from "../interfaces/owners";

export async function sendKYCEmailToOwner(email: string, ownerID: CompanyOwner["id"]) {
	const body = {
		email,
		transactionalId: "clygfd1go00kkqt3v4rw1bcba",
		addToAudience: false,
		dataVariables: {
			ownerID,
		},
	};

	const options = {
		method: "POST",
		headers: {
			Authorization: `Bearer ${LOOPS_KYC_EMAIL_KEY}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	};

	const response = await fetch("https://app.loops.so/api/v1/transactional", options)
		.then((response) => response.json())
		.catch((err) => {
			throw new Error(err);
		});

	return response;
}
