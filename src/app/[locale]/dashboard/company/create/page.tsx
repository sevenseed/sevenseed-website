"use client";
import {
	useCallback,
	useContext,
	useRef,
	useState,
	useEffect,
	useMemo,
	type FormEvent,
} from "react";
import omit from "just-omit";
import * as changeKeys from "change-case/keys";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/supabase/client";
import { NewCompanyContext } from "@/contexts/NewCompanyContext";
import { getUser } from "@/api/actions/auth";
import { getApplication } from "@/api/actions/database";
import {
	DATABASE_OMIT_KEYS,
	type DatabaseReadyCompanyData,
	type CompanyData,
} from "@/api/interfaces/company";
import { createOrReturnVerificationSession } from "@/api/actions/stripe";
import { sendKYCEmailToOwner } from "@/api/actions/emails";
import type { UUID } from "crypto";
import type { CompanyOwner, DatabaseReadyCompanyOwner } from "@/api/interfaces/owners";

import Loader from "@/components/Loader";
import StickyLowbar from "./_components/StickyLowbar";

import NavigationSidebar from "./_components/NavigationSidebar";
import CompanyInfoPage from "./_pages/CompanyInfoPage";
import CompanyAddressPage from "./_pages/CompanyAddressPage";
import KYCPage from "./_pages/KYCPage";
import OwnershipPage from "./_pages/OwnershipPage";

const env = process.env.VERCEL_ENV;
const isTesting = env === undefined || env === "development" || env === "preview";
isTesting && console.log("🚀 ~ isTesting:", isTesting);

const supabase = createClient();

export default function Create() {
	const { companyData, setCompanyData, owners, dispatch, formState, handleSubmit } =
		useContext(NewCompanyContext);

	const [isLoading, setIsLoading] = useState(true);
	const [isSubmitting, setIsSubmitting] = useState(false);
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
		return router.replace("/dashboard");
	}, [router]);

	const saveSnapshot = useCallback(() => {
		setCompanyDataSnapshot({ ...companyData });
		setOwnersSnapshot([...owners]);
	}, [owners, companyData]);

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
				.upsert(companyUpsertObject, {
					onConflict: "id",
				})
				.select()
				.single();

			if (companyError) throw new Error(companyError.message);
			if (!applicationId) setApplicationId(companyDataResponse?.id);

			const { error: ownersError } = await supabase
				.from("owners")
				.upsert(
					owners.map((owner) =>
						changeKeys.snakeCase(owner),
					) as DatabaseReadyCompanyOwner[],
					{
						onConflict: "id",
					},
				)
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

			setIsSubmitting(true);

			await saveDataToSupabase(/* submitting the application */ true);

			const promises = owners.map(async (owner) => {
				const [sessionUrl, emailResponse] = await Promise.all([
					createOrReturnVerificationSession(owner.id),
					sendKYCEmailToOwner(owner.email, owner.id),
				]);
				return { sessionUrl, emailResponse };
			});

			await Promise.all(promises)
				.then(() => setIsSubmitting(false))
				.catch((reason) => console.log(reason));

			if (isTesting) {
				console.log("In test mode, redirecting to dashboard...");
				goToDashboard();
			} else {
				handleSubmit(event);
			}
		},
		[owners, goToDashboard, handleSubmit, saveDataToSupabase],
	);

	const getUserSession = useCallback(async () => {
		const user = await getUser();
		if (!user) router.push(`/auth?returnTo=/dashboard/company/create`);
		setUserId(user?.id as UUID);
	}, [router]);

	const getApplicationById = useCallback(
		async (id: CompanyData["id"]) => {
			const [application, owners] = await getApplication(id);
			const reactReadyApplication = changeKeys.camelCase(
				omit(application, DATABASE_OMIT_KEYS),
			) as CompanyData;
			const reactReadyOwners = owners.map(
				(owner) => changeKeys.camelCase(owner) as CompanyOwner,
			);

			setApplicationId(id);
			setCompanyData({ ...reactReadyApplication });
			setCompanyDataSnapshot({ ...reactReadyApplication });
			dispatch({ type: "SET", owners: reactReadyOwners });
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
					isLoading || isSubmitting
						? "fixed inset-0 h-full flex justify-center items-center bg-slate-100/50 z-50"
						: "hidden"
				}
			>
				<Loader size={32} themed />
			</div>
			<div className="md:w-3/4 lg:w-1/2 w-full flex flex-col gap-y-8 mx-auto px-8 py-4 sm:py-8 lg:py-16">
				<h1 className="font-display font-extrabold text-4xl text-balance text-slate-900">
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
