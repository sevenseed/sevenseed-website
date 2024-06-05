import { NextIntlClientProvider, useMessages } from "next-intl";
import { PropsWithChildren } from "react";
import pick from "just-pick";

export default function Layout({ children }: PropsWithChildren) {
	const messages = useMessages();

	return (
		<NextIntlClientProvider messages={pick(messages, "Password")}>
			{children}
		</NextIntlClientProvider>
	);
}
