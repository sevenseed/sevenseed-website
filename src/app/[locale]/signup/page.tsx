"use client";
import { useCallback, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { signUp } from "@/api/actions/auth";
import { Button } from "@/components/Button";

export default function Signup() {
	const [message, setMessage] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const searchParams = useSearchParams();
	const success = useMemo(() => {
		return searchParams.get("success") || false;
	}, [searchParams]);

	// TODO:
	// *  1. on submit/"Sign In", run `signIn`
	// *  2. if the function doesn't redirect, capture its output (i.e., error message) and `setMessage` to it
	// *  3. clear displayed message while querying

	const handleSignUp = useCallback(
		async (formData: FormData) => {
			setIsSubmitting(true);
			setMessage("");

			const { message, error } = await signUp(formData);

			if (error) console.error(error);

			if (message) {
				setMessage(message);
				setIsSubmitting(false);
			}
		},
		[isSubmitting, message],
	);

	if (success)
		return (
			<div>
				<p>Thank you!</p>
				<p>Please check your email to continue the sign-up process.</p>
			</div>
		);

	return (
		<form
			className="self-center flex-1 flex flex-col w-full justify-center gap-2 px-8 sm:max-w-md"
			action={handleSignUp}
		>
			<label className="flex flex-col gap-y-0.5 text-md">
				Email
				<input
					className="rounded-md px-4 py-2 bg-inherit border mb-6"
					name="email"
					placeholder="you@example.com"
					required
				/>
			</label>
			<label className="flex flex-col gap-y-0.5 text-md">
				Password
				<input
					className="rounded-md px-4 py-2 bg-inherit border mb-6"
					type="password"
					name="password"
					placeholder="••••••••"
					required
				/>
			</label>
			<Button disabled={isSubmitting} variant="solid" color="blue">
				Sign Up
			</Button>
			{message && (
				<p className="mt-4 p-4 bg-foreground/10 text-center">{message}</p>
			)}
		</form>
	);
}
