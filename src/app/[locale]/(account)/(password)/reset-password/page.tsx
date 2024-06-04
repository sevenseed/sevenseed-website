"use client";
import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";
import ButtonWithLoader from "@/components/ButtonWithLoader";
import { setPassword } from "@/api/actions/auth";
import { useRouter } from "next/navigation";

const ResetPasswordPage = () => {
	const router = useRouter();
	const t = useTranslations("Password");
	const [isSending, setIsSending] = useState(false);
	const [newPassword, setNewPassword] = useState("");
	const [hasSubmittedSuccessfully, setHasSubmittedSuccessfully] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const handlePasswordReset = useCallback(async () => {
		setIsSending(true);

		const { data, error } = await setPassword(newPassword);
		console.log("🚀 ~ handlePasswordReset ~ data:", data);

		if (error) setErrorMessage(error.message);
		if (data) setHasSubmittedSuccessfully(true);

		setIsSending(false);
	}, [newPassword]);

	if (hasSubmittedSuccessfully) {
		// TODO: after redirect, display toast: "Password changed succesfully"
		router.push("/dashboard");
	}

	return (
		<div className="flex flex-col max-w-xl mx-auto gap-y-8 px-4 mb-8">
			<div className="flex flex-col gap-y-4">
				<h2 className="font-display text-5xl font-extrabold text-gray-900 sm:text-center">
					{t("resetPassword")}
				</h2>
				<p className="leading-7 text-gray-600 text-lg text-balance sm:text-center">
					{t("resetPasswordDescription")}
				</p>
			</div>
			<div className="flex flex-col gap-y-4">
				<input
					className="border rounded-lg py-2 px-2"
					type="text"
					placeholder="••••••••"
					value={newPassword}
					onChange={(event) => setNewPassword(event.currentTarget.value)}
				/>
				<ButtonWithLoader
					theme="signIn"
					isLoaderVisible={isSending}
					disabled={!newPassword.length || isSending}
					onClick={handlePasswordReset}
				>
					Set new password
				</ButtonWithLoader>
				{errorMessage && (
					<div className="px-4 py-4 md:py-2 bg-red-50 border border-red-300 rounded text-red-500 text-center">
						{errorMessage}
					</div>
				)}
				{/* No state for successful submission due to an immediate redirect */}
			</div>
		</div>
	);
};

export default ResetPasswordPage;
