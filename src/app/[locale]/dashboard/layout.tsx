import { NewCompanyContextProvider } from "@/contexts/NewCompanyContext";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
	return <NewCompanyContextProvider>{children}</NewCompanyContextProvider>;
}
