import { type Metadata } from "next";
import CompanySegment from "./_components/DashboardCompanySegment";

export const metadata: Metadata = {
	title: "Dashboard — Seven Seed",
	description: "Seven Seed Dashboard",
};

const DashboardPage = () => {
	return (
		<div className="grid md:grid-cols-[repeat(auto-fit,minmax(24rem,1fr))] gap-4 px-4 mt-16">
			<CompanySegment />
		</div>
	);
};

export default DashboardPage;
