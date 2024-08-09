"use client";
import { useCallback, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { signIn, signUp } from "@/api/actions/auth";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import ButtonWithLoader from "@/components/ButtonWithLoader";
import clsx from "clsx";
import Link from "next/link";

type UserFlow = "signIn" | "signUp";

export default function Signup() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [message, setMessage] = useState("");
	const [flow, setFlow] = useState<UserFlow>("signUp");
	const [showPassword, setShowPassword] = useState(false);

	const searchParams = useSearchParams();
	const returnTo = useMemo(() => {
		return searchParams.get("returnTo") || "";
	}, [searchParams]);

	const handleSignUp = useCallback(async (formData: FormData) => {
		setIsSubmitting(true);
		setMessage("");

		const { message, error } = await signUp(formData);

		if (error) console.error(error);

		if (message) setMessage(message);

		setIsSubmitting(false);
	}, []);

	const handleSignIn = useCallback(
		async (formData: FormData) => {
			setIsSubmitting(true);
			setMessage("");

			const response = await signIn(formData, returnTo);

			if (response.error) console.error(response.error);

			if (response.message) setMessage(message);

			setIsSubmitting(false);
		},
		[returnTo],
	);

	return (
		<div className="w-full flex flex-col justify-center items-center flex-1 px-4">
			<div className="w-full max-w-md flex flex-col justify-center gap-y-4">
				<fieldset className="flex justify-between p-2 gap-x-2 bg-gray-50 border rounded-lg shadow">
					<label
						className={clsx(
							"flex-1 p-2 text-center duration-200",
							"rounded select-none cursor-pointer",
							flow === "signIn"
								? "bg-blue-500 hover:bg-blue-600 text-white"
								: "hover:bg-blue-500/10",
						)}
					>
						<input
							type="radio"
							name="flow"
							id="flow--signIn"
							value="signIn"
							onChange={(event) => {
								setFlow(event.currentTarget.value as UserFlow);
								setShowPassword(false);
							}}
							hidden
						/>
						Sign In
					</label>
					<label
						className={clsx(
							"flex-1 p-2 text-center",
							"rounded select-none cursor-pointer",
							"hover:bg-blue-500/10",
							flow === "signUp"
								? "bg-blue-500 hover:bg-blue-600 text-white"
								: "hover:bg-blue-500/10",
						)}
					>
						<input
							type="radio"
							name="flow"
							id="flow--signUp"
							value="signUp"
							onChange={(event) => {
								setFlow(event.currentTarget.value as UserFlow);
								setShowPassword(false);
							}}
							hidden
						/>
						Sign Up
					</label>
				</fieldset>
				{flow === "signIn" ? (
					<form
						className="self-center flex-1 flex flex-col w-full justify-center gap-8"
						action={handleSignIn}
					>
						<div className="flex flex-col gap-4">
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
						<ButtonWithLoader theme="signIn" isLoaderVisible={isSubmitting}>
							Sign In
						</ButtonWithLoader>
					</form>
				) : (
					<form
						className="self-center flex-1 flex flex-col w-full justify-center gap-8"
						action={handleSignUp}
					>
						<div className="flex flex-col gap-4">
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
							Sign Up
						</ButtonWithLoader>
					</form>
				)}
				<Link
					className="w-full text-center p-2 rounded-lg text-slate-500 hover:bg-blue-100 hover:text-blue-400"
					href="/forgot-password"
				>
					Forgot your password?
				</Link>
				{message && (
					<p className="px-4 py-4 md:py-2 bg-red-50 border border-red-300 rounded text-red-500 text-center">
						{message}
					</p>
				)}
			</div>
		</div>
	);
}
