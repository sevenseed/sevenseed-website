"use client";
import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";
import ButtonWithLoader from "@/components/ButtonWithLoader";
import { sendPasswordRecoveryEmail } from "@/api/actions/auth";

const ForgotPasswordPage = () => {
	const t = useTranslations("Password");
	const [email, setEmail] = useState("");
	const [isSending, setIsSending] = useState(false);
	const [hasSubmittedSuccessfully, setHasSubmittedSuccessfully] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const handlePasswordRecovery = useCallback(async () => {
		setIsSending(true);

		const { data, error } = await sendPasswordRecoveryEmail(email);

		if (error) setErrorMessage(error.message);
		if (data) setHasSubmittedSuccessfully(true);

		setIsSending(false);
	}, [email]);

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
					value={email}
					onChange={(event) => setEmail(event.currentTarget.value)}
				/>
				<ButtonWithLoader
					theme="signIn"
					isLoaderVisible={isSending}
					disabled={!email.length || isSending}
					onClick={handlePasswordRecovery}
				>
					Recover password
				</ButtonWithLoader>
				{errorMessage && (
					<div className="px-4 py-4 md:py-2 bg-red-50 border border-red-300 rounded-lg text-red-500 text-center">
						{errorMessage}
					</div>
				)}
				{hasSubmittedSuccessfully && (
					<div className="px-4 py-4 md:py-2 bg-green-50 border border-green-300 rounded-lg text-green-500 text-center">
						Sent! Check your inbox.
					</div>
				)}
			</div>
		</div>
	);
};

export default ForgotPasswordPage;
