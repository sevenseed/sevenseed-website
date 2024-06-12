"use client";
import {
	type FormEvent,
	useCallback,
	useContext,
	useRef,
	useState,
	useMemo,
} from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { NewCompanyContext } from "@/contexts/NewCompanyContext";
import * as changeKeys from "change-case/keys";
import { DatabaseReadyCompanyData, type CompanyData } from "@/api/interfaces";
import pick from "just-pick";
import { UUID } from "crypto";

import StickyLowbar from "./_components/StickyLowbar";

import NavigationSidebar from "./_components/NavigationSidebar";
import ClientInfoPage from "./_pages/ClientInfoPage";
import ClientAddressPage from "./_pages/ClientAddressPage";
import CompanyInfoPage from "./_pages/CompanyInfoPage";
import CompanyAddressPage from "./_pages/CompanyAddressPage";

export default function Create() {
	const { companyData, formState, handleSubmit } = useContext(NewCompanyContext);
	const [snapshot, setSnapshot] = useState<Partial<CompanyData>>(companyData);
	const formElement = useRef<HTMLFormElement>(null);
	const router = useRouter();
	const [id, setId] = useState<UUID>();

	const env = process.env.VERCEL_ENV;
	const isTesting = env === undefined || env === "development" || env === "preview";

	const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
	if (!supabaseUrl) throw "Supabase project URL not found in environment";
	const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
	if (!supabaseKey) throw "Supabase secret key not found in environment";

	const supabase = useMemo(
		() => createClient(supabaseUrl, supabaseKey),
		[supabaseUrl, supabaseKey],
	);

	const goToDepositPage = useCallback(() => {
		return router.push(`/dashboard/payment/deposit`);
	}, [router]);

	const saveSnapshot = useCallback(() => {
		setSnapshot({ ...companyData });
	}, [companyData]);

	const saveDataToSupabase = useCallback(async () => {
		saveSnapshot();

		// * keys that currently store non-null properties in the database
		const DBKeys = ["companyName", "companyDescription", "companyPhoneNumber"];

		// * adjust `companyData` key case to fit with the SQL DB's preferred snake_case
		// * only send the keys the values of which the DB can ingest
		const databaseReadySnapshot = changeKeys.snakeCase(
			pick(companyData, DBKeys),
		) as Partial<DatabaseReadyCompanyData>;

		const response = await supabase
			.from("companies")
			// * if `id` is received from the DB, use it to supply data further
			// * when `id` already exists in the DB, row data would be overridden
			// * `.select()` the data so we can extract `id`
			.upsert(id ? [{ id, ...databaseReadySnapshot }] : [databaseReadySnapshot], {
				onConflict: "id",
			})
			.select();

		if (!id) setId(response?.data?.[0].id!);

		return response;
	}, [companyData, id, saveSnapshot, supabase]);

	const handleCompanyFormSubmit = useCallback(
		async (event: FormEvent<HTMLFormElement>) => {
			event.preventDefault();

			const { data, error } = await saveDataToSupabase();
			if (error) throw new Error(error.message);

			console.log(data);

			if (isTesting) {
				goToDepositPage();
			} else {
				handleSubmit(event);
			}
		},
		[goToDepositPage, handleSubmit, isTesting, saveDataToSupabase],
	);

	if (formState.succeeded) {
		return goToDepositPage();
	}

	return (
		<div className="relative flex flex-col py-4 sm:py-8 lg:py-16 px-8 w-full md:w-3/4 lg:w-1/2 gap-y-8 mx-auto">
			<h1 className="font-display text-4xl font-extrabold text-slate-900 text-balance">
				Seven Seed Entity Questionnaire
			</h1>
			<div className="w-full flex flex-1 sm:gap-x-8">
				<NavigationSidebar />
				<form
					ref={formElement}
					className="w-full"
					onSubmit={handleCompanyFormSubmit}
				>
					<input
						name="subject"
						type="hidden"
						value="Application for Seven Seed"
					/>

					<ClientInfoPage />
					<ClientAddressPage />
					<CompanyInfoPage />
					<CompanyAddressPage />
				</form>
			</div>

			<StickyLowbar
				formRef={formElement}
				snapshot={snapshot}
				saveFn={saveDataToSupabase}
			/>
		</div>
	);
}
