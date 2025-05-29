import { PropsWithChildren } from "react";
import { type Metadata } from "next";
import { headers } from "next/headers";
import { Inter } from "next/font/google";
import locales from "@/locales";
import clsx from "clsx";

import "@/styles/tailwind.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Seven Seed - Your company in Seven Days",
	description: "Incorporate in Belgium in just seven days. Entirely online.",
};

export default function RootLayout({ children }: PropsWithChildren) {
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
				{/* Stripe recommends preloading its JS toolkit because it enables them to track potential fraud better */}
				<script src="https://js.stripe.com/v3" async />

				{/* --- Open Graph Meta Tags --- */}
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="Seven Seed - Launch Your Startup in Europe"
				/>
				<meta
					property="og:description"
					content="Join a six month tech startup incubation program. Apply before July 1st for the next cohort."
				/>
				<meta property="og:url" content="https://sevenseed.eu/" />
				<meta
					property="og:image"
					content="https://sevenseed.eu/images/sevenseed-og.png"
				/>
				<meta property="og:site_name" content="Seven Seed" />
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
				<Footer />
			</body>
		</html>
	);
}
