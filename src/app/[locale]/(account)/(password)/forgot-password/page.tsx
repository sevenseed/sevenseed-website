"use client";
import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";
import ButtonWithLoader from "@/components/ButtonWithLoader";
import { useRouter } from "next/navigation";

const ForgotPasswordPage = () => {
	const router = useRouter();
	const t = useTranslations("Password");
	const [isSending, setIsSending] = useState(false);

	const handlePasswordRecovery = useCallback(() => {
		setIsSending(true);
		setTimeout(() => {
			router.push("/reset-password");
		}, 3000);
	}, []);

	return (
		<div className="flex flex-col max-w-xl mx-auto gap-y-8 px-4 mb-8">
			<div className="flex flex-col gap-y-4">
				<h2 className="font-display text-5xl font-extrabold tracking-tight text-gray-900 sm:text-center">
					{t("forgotPassword")}
				</h2>
				<p className="leading-7 text-gray-600 text-lg text-balance sm:text-center">
					{t("forgotPasswordDescription")}
				</p>
			</div>
			<div className="flex flex-col gap-y-4">
				<input
					className="border rounded-lg py-2 px-2"
					type="email"
					placeholder="hello@example.com"
				/>
				<ButtonWithLoader
					theme="signIn"
					isLoaderVisible={isSending}
					onClick={handlePasswordRecovery}
				>
					Recover password
				</ButtonWithLoader>
			</div>
		</div>
	);
};

export default ForgotPasswordPage;
