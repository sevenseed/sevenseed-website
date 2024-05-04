import { Button } from "@/components/Button";
import { type Metadata } from "next";

export const metadata: Metadata = {
	title: "Dashboard — Seven Seed",
	description: "Seven Seed Dashboard",
};

const DashboardPage = () => (
	<div className="grid md:grid-cols-2 px-4 mt-16">
		<div className="flex flex-col gap-y-4 p-4 bg-gray-50 border rounded">
			<h1 className="text-2xl font-bold">Your company</h1>
			<Button href="/dashboard/company/create" variant="solid" color="blue">
				Click here to start your application
			</Button>
		</div>
	</div>
);

export default DashboardPage;
