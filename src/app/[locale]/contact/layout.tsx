import Footer from "@/components/layout/Footer";
import { PropsWithChildren } from "react";

export default function ContactLayout({ children }: PropsWithChildren) {
	return (
		<>
			{children}
			<Footer />
		</>
	);
}
