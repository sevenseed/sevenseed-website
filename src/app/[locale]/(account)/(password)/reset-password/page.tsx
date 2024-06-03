"use client";
import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";
import ButtonWithLoader from "@/components/ButtonWithLoader";

const ResetPasswordPage = () => {
	const t = useTranslations("Password");
	const [isSending, setIsSending] = useState(false);

	const handlePasswordReset = useCallback(() => {
		setIsSending(true);
	}, []);

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
				/>
				<ButtonWithLoader
					theme="signIn"
					isLoaderVisible={isSending}
					onClick={handlePasswordReset}
				>
					Set new password
				</ButtonWithLoader>
			</div>
		</div>
	);
};

export default ResetPasswordPage;
