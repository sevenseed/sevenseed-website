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
import omit from "just-omit";
import * as changeKeys from "change-case/keys";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/supabase/client";
import { NewCompanyContext } from "@/contexts/NewCompanyContext";
import { getUser } from "@/api/actions/auth";
import { getApplication } from "@/api/actions/database";
import {
	type DatabaseReadyCompanyData,
	type CompanyData,
} from "@/api/interfaces/company";
import type { UUID } from "crypto";
import type { CompanyOwner } from "@/api/interfaces/owners";

import Loader from "@/components/Loader";
import StickyLowbar from "./_components/StickyLowbar";

import NavigationSidebar from "./_components/NavigationSidebar";
import CompanyInfoPage from "./_pages/CompanyInfoPage";
import CompanyAddressPage from "./_pages/CompanyAddressPage";
import KYCPage from "./_pages/KYCPage";
import OwnershipPage from "./_pages/OwnershipPage";

const env = process.env.VERCEL_ENV;
const isTesting = env === undefined || env === "development" || env === "preview";
console.log("🚀 ~ isTesting:", isTesting);

const supabase = createClient();

export default function Create() {
	const { companyData, setCompanyData, owners, dispatch, formState, handleSubmit } =
		useContext(NewCompanyContext);

	const [isLoading, setIsLoading] = useState(true);
	const searchParams = useSearchParams();
	const URLApplicationId = useMemo(
		() => (searchParams.get("applicationId") as CompanyData["id"]) || "",
		[searchParams],
	);

	const [companyDataSnapshot, setCompanyDataSnapshot] =
		useState<CompanyData>(companyData);
	const [ownersSnapshot, setOwnersSnapshot] = useState<CompanyOwner[]>(owners);
	const [applicationId, setApplicationId] = useState<CompanyData["id"]>();
	const [userId, setUserId] = useState<UUID>();
	const formElement = useRef<HTMLFormElement>(null);
	const router = useRouter();

	const goToDashboard = useCallback(() => {
		return router.push(`/dashboard/`);
	}, [router]);

	const saveSnapshot = useCallback(() => {
		setCompanyDataSnapshot({ ...companyData });
	}, [companyData]);

	const saveDataToSupabase = useCallback(
		async (submitting = false) => {
			if (!submitting) saveSnapshot();

			// * adjust `companyData` key case to fit with the SQL DB's preferred snake_case
			const databaseReadyCompanyData = changeKeys.snakeCase(
				companyData,
			) as DatabaseReadyCompanyData;

			const companyUpsertValues = {
				schema_version: 1,
				id: applicationId,
				user_id: userId,
				owners: [...owners.map((owner) => owner.id)],
				application_submitted: submitting,
			};

			const companyUpsertObject = {
				...companyUpsertValues,
				...databaseReadyCompanyData,
			};

			const { data: companyDataResponse, error: companyError } = await supabase
				.from("companies")
				// * if `id` is received from the DB, use it to supply data further
				// * when `id` already exists in the DB, row data would be overridden
				// * `.select()` the data so we can extract `id`
				.upsert(companyUpsertObject, {
					onConflict: "id",
				})
				.select()
				.single();

			if (companyError) throw new Error(companyError.message);
			if (!applicationId) setApplicationId(companyDataResponse?.id);

			const { error: ownersError } = await supabase
				.from("owners")
				// * if `id` is received from the DB, use it to supply data further
				// * when `id` already exists in the DB, row data would be overridden
				// * `.select()` the data so we can extract `id`
				.upsert(owners, {
					onConflict: "id",
				})
				.select();

			if (ownersError) throw new Error(ownersError.message);

			return companyDataResponse;
		},
		[companyData, owners, applicationId, userId, saveSnapshot],
	);

	// * disjointed form submit handling and form submit trigger (via lowbar)
	// * this enables us to have a form and a submit button in different components
	const handleCompanyFormSubmit = useCallback(
		async (event: FormEvent<HTMLFormElement>) => {
			event.preventDefault();

			await saveDataToSupabase(/* submitting the application */ true);

			if (isTesting) {
				goToDashboard();
			} else {
				handleSubmit(event);
			}
		},
		[goToDashboard, handleSubmit, saveDataToSupabase],
	);

	const getUserSession = useCallback(async () => {
		const user = await getUser();
		if (!user) router.push(`/auth?returnTo=/dashboard/company/create`);
		setUserId(user?.id as UUID);
	}, [router]);

	const getApplicationById = useCallback(
		async (id: CompanyData["id"]) => {
			const [application, owners] = await getApplication(id);
			const localizedApplication = changeKeys.camelCase(
				application,
			) as Partial<CompanyData>;
			const localizedOwners = owners.map((owner) =>
				changeKeys.camelCase(owner),
			) as CompanyOwner[];

			const DBOmitKeys = [
				"id",
				"user_id",
				"owners",
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
			setCompanyDataSnapshot({ ...reactReadyApplication });
			dispatch({ type: "SET", owners: localizedOwners });
		},
		[setCompanyData, dispatch],
	);

	useEffect(() => {
		getUserSession();
		if (URLApplicationId) {
			getApplicationById(URLApplicationId);
		}
		setIsLoading(false);
	}, [getUserSession, URLApplicationId, getApplicationById]);

	if (formState.succeeded) {
		return goToDashboard();
	}

	return (
		<>
			<div
				id="loading-indicator"
				className={
					isLoading
						? "fixed inset-0 h-full flex justify-center items-center bg-slate-100/50 z-50"
						: "hidden"
				}
			>
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
					companyDataSnapshot={companyDataSnapshot}
					ownersSnapshot={ownersSnapshot}
					saveFn={() => saveDataToSupabase()}
				/>
			</div>
		</>
	);
}
