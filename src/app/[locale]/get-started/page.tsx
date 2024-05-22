"use client";
import { useCallback, useContext, useState } from "react";
import { signUp } from "@/api/actions/auth";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import ButtonWithLoader from "@/components/ButtonWithLoader";
import { NewCompanyContext } from "@/contexts/NewCompanyContext";

export default function Signup() {
	const { companyData, setCompanyData } = useContext(NewCompanyContext);

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [message, setMessage] = useState("");

	const handleSignUp = useCallback(
		async (formData: FormData) => {
			setIsSubmitting(true);
			setMessage("");

			// * we know we will have these two properties because they come from
			// * required form fields
			const contactName = formData.get("fullName") as string;
			const contactEmail = formData.get("email") as string;

			setCompanyData({ ...companyData, contactEmail, contactName });

			const { message, error } = await signUp(formData);

			if (error) console.error(error);

			if (message) {
				setMessage(`${message}: ${error}`);
				setIsSubmitting(false);
			}
		},
		[companyData, setCompanyData],
	);

	return (
		<div className="w-full flex flex-col justify-center items-center flex-1 px-4">
			<div className="w-full max-w-md flex flex-col justify-center gap-y-4">
				<h1 className="font-display text-5xl font-extrabold">Get started</h1>
				<form
					className="self-center flex-1 flex flex-col w-full justify-center gap-8"
					action={handleSignUp}
				>
					<div className="flex flex-col gap-4">
						<label className="flex flex-col gap-y-0.5 text-md">
							Name
							<input
								className="rounded-md px-4 py-2 mt-1 bg-inherit border"
								name="fullName"
								placeholder="John Doe"
								required
							/>
						</label>
						<label className="flex flex-col gap-y-0.5 text-md">
							Email
							<input
								className="rounded-md px-4 py-2 mt-1 bg-inherit border"
								name="email"
								placeholder="you@example.com"
								required
							/>
						</label>
						<label className="flex flex-col gap-y-0.5 text-md">
							Password
							<div className="relative flex items-center bg-inherit">
								<input
									className="flex-1 px-4 py-2 rounded-md border"
									type={showPassword ? "text" : "password"}
									name="password"
									placeholder="••••••••"
									required
								/>
								{showPassword ? (
									<EyeIcon
										onClick={() => setShowPassword(false)}
										strokeWidth={2}
										className="absolute right-0 h-8 px-4 py-2 cursor-pointer"
									/>
								) : (
									<EyeSlashIcon
										onClick={() => setShowPassword(true)}
										strokeWidth={2}
										className="absolute right-0 h-8 px-4 py-2 cursor-pointer"
									/>
								)}
							</div>
						</label>
					</div>
					<ButtonWithLoader theme="signUp" isLoaderVisible={isSubmitting}>
						Get started
					</ButtonWithLoader>
				</form>
				<p className="px-4 py-4 md:py-2 bg-red-50 border border-red-300 rounded text-red-500 text-center empty:opacity-0 empty:py-6">
					{message}
				</p>
			</div>
		</div>
	);
}
