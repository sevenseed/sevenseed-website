import CompanySegment from "./_components/DashboardCompanySegment";
import styles from "./dashboard.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dashboard — Seven Seed",
	description: "Seven Seed Dashboard",
};

const DashboardPage = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className="grid md:grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-4 px-4 mt-16">
					<CompanySegment />
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;
