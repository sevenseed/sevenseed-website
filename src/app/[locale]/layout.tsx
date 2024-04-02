import clsx from "clsx";
import { type Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header";
import locales from "@/locales";
import "@/styles/tailwind.css";
import { headers } from "next/headers";
import { ReactNode } from "react";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Seven Seed - Your company in Seven Days",
	description: "Incorporate in Belgium in just seven days. Entirely online.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	const url = headers().get("x-url");
	if (!url) {
		throw new Error("Unknown url");
	}
	return (
		<html
			lang="en"
			className={clsx(
				"h-full scroll-smooth bg-white antialiased",
				inter.variable,
			)}
		>
			<head>
				<link
					rel="preconnect"
					href="https://cdn.fontshare.com"
					crossOrigin="anonymous"
				/>
				<link
					rel="stylesheet"
					href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700&display=swap"
				/>
				{locales.map((locale) => {
					const urlObj = new URL(url);
					urlObj.searchParams.set("lang", locale);
					return (
						<link
							key={locale}
							rel="alternate"
							hrefLang={locale}
							href={urlObj.toString()}
						/>
					);
				})}
			</head>
			<body className="flex min-h-full flex-col">
				<Header />
				{children}
			</body>
		</html>
	);
}
