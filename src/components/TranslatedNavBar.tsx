import { NextIntlClientProvider, useMessages } from "next-intl";
import { useMemo } from "react";
import { NavBar } from "./NavBar";

/**
 * This is a wrapper because NavBar is a "use client" component.
 * `next-intl` translations are not passed to client components by default.
 **/
const TranslatedNavBar = () => {
	const messages = useMessages();
	const childMessages = useMemo(
		() => ({
			NavBar: messages.NavBar,
		}),
		[messages.NavBar],
	);

	return (
		<NextIntlClientProvider messages={childMessages}>
			<NavBar />
		</NextIntlClientProvider>
	);
};

export default TranslatedNavBar;
