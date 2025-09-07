import clsx from "clsx";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "@/styles/tailwind.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const DESCRIPTION =
	"Brussels-based accelerator for dual-use and defence startups. 6-month program with procurement pathways, EU funding access, and €12,500 cash contribution. Apply for Fall 2025!";

export const metadata: Metadata = {
	title: "Seven Seed - Defence & Dual-Use Accelerator in Brussels",
	description: DESCRIPTION,
};

const RootLayout = ({ children }: PropsWithChildren) => {
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

				{/* --- Open Graph Meta Tags --- */}
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="Seven Seed - Defence & Dual-Use Accelerator in Brussels"
				/>
				<meta property="og:description" content={DESCRIPTION} />
				<meta property="og:url" content="https://sevenseed.eu/" />
				<meta
					property="og:image"
					content="https://sevenseed.eu/images/sevenseed-og.png"
				/>
				<meta property="og:site_name" content="Seven Seed" />
			</head>
			<body className="flex min-h-full flex-col">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
