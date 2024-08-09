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

			if (response.message) setMessage(response.message);

			setIsSubmitting(false);
		},
		[returnTo],
	);

	return (
		<div className="w-full flex flex-col flex-1 justify-center items-center px-4">
			<div className="w-full max-w-md flex flex-col justify-center gap-y-4">
				<fieldset className="flex justify-between gap-x-2 p-2 border rounded-lg bg-gray-50 shadow">
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
						className="w-full flex flex-col flex-1 justify-center self-center gap-8"
						action={handleSignIn}
					>
						<div className="flex flex-col gap-4">
							<label className="flex flex-col gap-y-0.5 text-md">
								Email
								<input
									className="mt-1 px-4 py-2 border rounded-md bg-inherit"
									name="email"
									placeholder="you@example.com"
									required
								/>
							</label>
							<label className="flex flex-col gap-y-0.5 text-md">
								Password
								<div className="relative flex items-center bg-inherit">
									<input
										className="flex-1 px-4 py-2 border rounded-md"
										type={showPassword ? "text" : "password"}
										name="password"
										placeholder="••••••••"
										required
									/>
									{showPassword ? (
										<EyeIcon
											onClick={() => setShowPassword(false)}
											strokeWidth={2}
											className="h-8 absolute right-0 px-4 py-2 cursor-pointer"
										/>
									) : (
										<EyeSlashIcon
											onClick={() => setShowPassword(true)}
											strokeWidth={2}
											className="h-8 absolute right-0 px-4 py-2 cursor-pointer"
										/>
									)}
								</div>
							</label>
						</div>
						<ButtonWithLoader
							type="submit"
							theme="signIn"
							isLoaderVisible={isSubmitting}
						>
							Sign In
						</ButtonWithLoader>
					</form>
				) : (
					<form
						className="w-full flex flex-col flex-1 justify-center self-center gap-8"
						action={handleSignUp}
					>
						<div className="flex flex-col gap-4">
							<label className="flex flex-col gap-y-0.5 text-md">
								Email
								<input
									className="mt-1 px-4 py-2 border rounded-md bg-inherit"
									name="email"
									placeholder="you@example.com"
									required
								/>
							</label>
							<label className="flex flex-col gap-y-0.5 text-md">
								Password
								<div className="relative flex items-center bg-inherit">
									<input
										className="flex-1 px-4 py-2 border rounded-md"
										type={showPassword ? "text" : "password"}
										name="password"
										placeholder="••••••••"
										required
									/>
									{showPassword ? (
										<EyeIcon
											onClick={() => setShowPassword(false)}
											strokeWidth={2}
											className="h-8 absolute right-0 px-4 py-2 cursor-pointer"
										/>
									) : (
										<EyeSlashIcon
											onClick={() => setShowPassword(true)}
											strokeWidth={2}
											className="h-8 absolute right-0 px-4 py-2 cursor-pointer"
										/>
									)}
								</div>
							</label>
						</div>
						<ButtonWithLoader
							type="submit"
							theme="signUp"
							isLoaderVisible={isSubmitting}
						>
							Sign Up
						</ButtonWithLoader>
					</form>
				)}
				<Link
					className="w-full p-2 rounded-lg hover:bg-blue-100 text-center text-slate-500 hover:text-blue-400"
					href="/forgot-password"
				>
					Forgot your password?
				</Link>
				{message && (
					<p className="px-4 py-4 md:py-2 border border-red-300 rounded bg-red-50 text-center text-red-500">
						{message}
					</p>
				)}
			</div>
		</div>
	);
}
