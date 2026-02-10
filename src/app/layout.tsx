import clsx from "clsx";
import { type Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { PropsWithChildren } from "react";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "@/styles/tailwind.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const roboto = Roboto({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-roboto",
	weight: ["400", "500", "700", "900"],
});

const DESCRIPTION =
	"Seven Seed is a Brussels-based think tank for European startups, focused on Artificial Intelligence and Defence.";

export const metadata: Metadata = {
	title: "Seven Seed - Think Tank for European Startups",
	description: DESCRIPTION,
};

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html
			lang="en"
			className={clsx(
				"h-full scroll-smooth bg-white antialiased",
				inter.variable,
				roboto.variable,
			)}
		>
			<head>
				{/* --- Open Graph Meta Tags --- */}
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="Seven Seed - Think Tank for European Startups"
				/>
				<meta property="og:description" content={DESCRIPTION} />
				<meta property="og:url" content="https://sevenseed.eu/" />
				<meta
					property="og:image"
					content="https://sevenseed.eu/images/sevenseed-og.png"
				/>
				<meta property="og:site_name" content="Seven Seed" />
			</head>
			<body className="flex min-h-full flex-col font-sans">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
