import { GridPattern } from "@/components/GridPattern";
import { type Metadata } from "next";
import CustomerJourney from "./_components/CustomerJourney";

export const metadata: Metadata = {
	title: "Seven Seed - Dashboard",
	description: "Seven Seed Dashboard",
};

const DashboardPage = () => (
	<div className="mx-4 relative flex flex-auto justify-center">
		<div className="absolute inset-0 -z-10 text-slate-900/10 [mask-image:linear-gradient(transparent,white,transparent)]">
			<GridPattern x="50%" y="50%" patternTransform="translate(0 60)" />
		</div>
		<CustomerJourney />
	</div>
);

export default DashboardPage;
