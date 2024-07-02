"use client";
import {
	type FormEvent,
	useCallback,
	useContext,
	useRef,
	useState,
	useEffect,
	useMemo,
} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/supabase/client";
import { NewCompanyContext } from "@/contexts/NewCompanyContext";
import { getUser } from "@/api/actions/auth";
import { getApplication } from "@/api/actions/database";
import omit from "just-omit";
import * as changeKeys from "change-case/keys";
import type { DatabaseReadyCompanyData, CompanyData } from "@/api/interfaces";
import type { UUID } from "crypto";

import Loader from "@/components/Loader";
import StickyLowbar from "./_components/StickyLowbar";

import NavigationSidebar from "./_components/NavigationSidebar";
import CompanyInfoPage from "./_pages/CompanyInfoPage";
import CompanyAddressPage from "./_pages/CompanyAddressPage";
import KYCPage from "./_pages/KYCPage";
import OwnershipPage from "./_pages/OwnershipPage";

const supabase = createClient();

export default function Create() {
	const { companyData, setCompanyData, formState, handleSubmit } =
		useContext(NewCompanyContext);

	const [isLoading, setIsLoading] = useState(true);
	const searchParams = useSearchParams();
	const URLApplicationId = useMemo(
		() => (searchParams.get("applicationId") as UUID) || "",
		[searchParams],
	);

	const [snapshot, setSnapshot] = useState<Partial<CompanyData>>(companyData);
	const [applicationId, setApplicationId] = useState<UUID>();
	const [userId, setUserId] = useState<UUID>();
	const formElement = useRef<HTMLFormElement>(null);
	const router = useRouter();

	const env = process.env.VERCEL_ENV;
	const isTesting = env === undefined || env === "development" || env === "preview";

	const goToDepositPage = useCallback(() => {
		return router.push(`/dashboard/payment/deposit`);
	}, [router]);

	const saveSnapshot = useCallback(() => {
		setSnapshot({ ...companyData });
	}, [companyData]);

	const saveDataToSupabase = useCallback(
		async (submitting = false) => {
			saveSnapshot();

			// * adjust `companyData` key case to fit with the SQL DB's preferred snake_case
			// * only send the keys the values of which the DB can ingest
			const databaseReadySnapshot = changeKeys.snakeCase(
				companyData,
			) as DatabaseReadyCompanyData;

			const upsertValues = {
				schema: 0,
				id: applicationId,
				owner_id: userId,
				application_submitted: submitting,
			};

			const upsertObject = { ...upsertValues, ...databaseReadySnapshot };

			const { data, error } = await supabase
				.from("companies")
				// * if `id` is received from the DB, use it to supply data further
				// * when `id` already exists in the DB, row data would be overridden
				// * `.select()` the data so we can extract `id`
				.upsert(upsertObject, {
					onConflict: "id",
				})
				.select();

			if (error) throw new Error(error.message);
			if (!applicationId) setApplicationId(data?.[0].id!);

			return data;
		},
		[companyData, applicationId, userId, saveSnapshot],
	);

	const handleCompanyFormSubmit = useCallback(
		async (event: FormEvent<HTMLFormElement>) => {
			event.preventDefault();

			await saveDataToSupabase(/* submitting the application */ true);

			if (isTesting) {
				goToDepositPage();
			} else {
				handleSubmit(event);
			}
		},
		[goToDepositPage, handleSubmit, isTesting, saveDataToSupabase],
	);

	const getUserSession = useCallback(async () => {
		const user = await getUser();
		if (!user) router.push(`/auth?returnTo=/dashboard/company/create`);
		setUserId(user?.id as UUID);
	}, [router]);

	const getApplicationById = useCallback(
		async (id: UUID) => {
			const application: DatabaseReadyCompanyData = await getApplication(id);
			const localizedApplication = changeKeys.camelCase(
				application,
			) as Partial<CompanyData>;

			const DBOmitKeys = [
				"id",
				"owner_id",
				"created_at",
				"updated_at",
				"application_submitted",
				"schema",
			];
			const reactReadyApplication = omit(
				localizedApplication,
				DBOmitKeys,
			) as CompanyData;

			setApplicationId(id);
			setCompanyData({ ...reactReadyApplication });
			setSnapshot({ ...reactReadyApplication });
		},
		[setCompanyData],
	);

	useEffect(() => {
		getUserSession();
		if (URLApplicationId) {
			getApplicationById(URLApplicationId);
		}
		setIsLoading(false);
	}, [getUserSession, URLApplicationId, getApplicationById]);

	if (formState.succeeded) {
		return goToDepositPage();
	}

	return (
		<>
			<div
				className={
					isLoading
						? "fixed inset-0 h-full flex justify-center items-center bg-slate-100/50 z-50"
						: "hidden"
				}
			>
				{/* full-screen loading indicator */}
				<Loader size={32} themed />
			</div>
			<div className="flex flex-col py-4 sm:py-8 lg:py-16 px-8 w-full md:w-3/4 lg:w-1/2 gap-y-8 mx-auto">
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

						<CompanyInfoPage />
						<CompanyAddressPage />

						<KYCPage />
						<OwnershipPage />
					</form>
				</div>

				<StickyLowbar
					formRef={formElement}
					snapshot={snapshot}
					saveFn={() => saveDataToSupabase()}
				/>
			</div>
		</>
	);
}
