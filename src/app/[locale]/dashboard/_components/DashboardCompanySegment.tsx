"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/supabase/client";
import { getUser } from "@/api/actions/auth";
import { Button } from "@/components/Button";
import Loader from "@/components/Loader";
import type { DatabaseReadyCompanyData } from "@/api/interfaces";

const supabase = createClient();

export default function CompanySegment() {
	const [isLoading, setIsLoading] = useState(true);
	const [applications, setApplications] = useState<DatabaseReadyCompanyData[] | null>(
		null,
	);
	const [unsubmittedApplications, setUnsubmittedApplications] = useState<
		DatabaseReadyCompanyData[] | null
	>(null);

	const fetchApplications = async () => {
		const user = await getUser();

		const { data, error } = await supabase
			.from("companies")
			.select()
			.eq("owner_id", user!.id);

		if (error) throw new Error(error.message);
		if (!data)
			throw new Error(
				"Database supplied empty result when requesting incorporation applications",
			);

		setApplications(data);
		setUnsubmittedApplications(
			data.filter((application) => !application.application_submitted),
		);
	};

	useEffect(() => {
		fetchApplications();
	}, []);

	useEffect(() => {
		if (applications) setIsLoading(false);
	}, [applications]);

	return (
		<div className="max-w-lg flex flex-col gap-y-4 p-4 bg-gray-50 border rounded">
			<h1 className="text-2xl font-bold">Your company</h1>

			{isLoading ? (
				<Button className="py-3" variant="solid" color="blue">
					<Loader size={16} />
				</Button>
			) : /* if there are relevant applications in the database */
			applications && applications.length ? (
				/* if any of the applications are unsubmitted */
				unsubmittedApplications && unsubmittedApplications.length ? (
					unsubmittedApplications.map((application) => {
						const companyName = application.name.length
							? application.name
							: "a yet-unnamed company";

						return (
							<Button
								key={application.id}
								href={`/dashboard/company/create?applicationId=${application.id}`}
								variant="solid"
								color="blue"
							>
								Continue your application for {companyName}
							</Button>
						);
					})
				) : (
					/* currently presume that we can only have one application active at a time */
					/* that's not true technically or meaningfully, but it's a port in the sea */
					<p>
						Application status: <b className="text-blue-500">submitted</b>
					</p>
				)
			) : (
				<Button href="/dashboard/company/create" variant="solid" color="blue">
					Click here to start your application
				</Button>
			)}
		</div>
	);
}
