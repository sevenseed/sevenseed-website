import { Footer } from "@/components/Footer";
import { PropsWithChildren } from "react";

export default function PrivacyLayout({ children }: PropsWithChildren) {
	return (
		<>
			{children}
			<Footer />
		</>
	);
}
