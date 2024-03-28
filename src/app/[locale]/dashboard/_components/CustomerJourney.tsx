"use client";
import { submitCompanyDataToHubspot } from "@/api/hubspot";
import { CompanyData } from "@/api/interfaces";
import {
	ComponentType,
	Dispatch,
	ElementType,
	SetStateAction,
	createContext,
	useCallback,
	useState,
} from "react";

import styles from "./CustomerJourney.module.css";
import CompanyInfoForm from "./forms/CompanyInfoForm";
import ContactInfoForm from "./forms/ContactInfoForm";
import { createCheckoutSession } from "@/api/actions";
import { useRouter } from "next/navigation";

const CompanyForms = [
	{
		label: "Contact Info",
		component: ContactInfoForm,
		required: ["contactEmail", "contactName", "contactAddress", "civilStatus"],
	},
	{
		label: "Company Details",
		component: CompanyInfoForm,
		required: [
			"legalEntity",
			"companyName",
			"companyDescription",
			"companyAddress",
			"companyPhoneNumber",
		],
	},
	// {
	// 	label: "Sign Up",
	// 	component: SignupForm,
	// 	required: ["contactEmail", "password"],
	// },
] as {
	label: string;
	component: ComponentType<CompanyDataFormProps>;
	required: (keyof CompanyData)[];
}[];

export type CompanyDataFormProps = {
	companyData: CompanyData;
	setCompanyData: Dispatch<SetStateAction<CompanyData>>;
};

type FormStepComponentProps = CompanyDataFormProps & {
	formIndex: number;
};

const FormStepComponent = ({
	formIndex,
	companyData,
	setCompanyData,
}: FormStepComponentProps) => {
	const Component = CompanyForms[formIndex].component as ElementType;
	return <Component companyData={companyData} setCompanyData={setCompanyData} />;
};

const SidebarLinks = ({
	formIndex,
	setFormIndex,
}: {
	formIndex: number;
	setFormIndex: Dispatch<SetStateAction<number>>;
}) =>
	CompanyForms.map((form, index) => (
		<button
			key={form.label}
			onClick={() => (formIndex > index ? setFormIndex(index) : null)}
			className={`px-2 text-base text-left font-medium border-l-2 ${
				formIndex === index
					? "border-green-600 text-green-600"
					: formIndex > index
					? "border-green-900 text-green-900"
					: "border-gray-300 text-gray-500"
			}`}
		>
			{form.label}
		</button>
	));

export const CompanyDataContext = createContext<{
	companyData: CompanyData;
	setCompanyData: Dispatch<SetStateAction<CompanyData>>;
}>({ companyData: {} as CompanyData, setCompanyData: () => {} });

const CustomerJourney = () => {
	const [formIndex, setFormIndex] = useState(0);
	const [companyData, setCompanyData] = useState<CompanyData>({
		contactEmail: "",
		contactName: "",
		contactAddress: "",
		civilStatus: "",
		legalEntity: "",
		companyName: "",
		companyDescription: "",
		companyAddress: { type: "HomeAddress" },
		companyPhoneNumber: "",
		contactPhoneNumber: "",
		initialFunding: "",
		specialRequests: "",
	});

	const [completed, setCompleted] = useState(false);
	const [submitting, setSubmitting] = useState(false);
	const [submissionError, setSubmissionError] = useState("");

	const router = useRouter();

	const testData: CompanyData = {
		contactEmail: "test@example.com",
		contactName: "Hello World",
		contactAddress: "1 Main Ave, Notown, Nowhere",
		civilStatus: "Single",
		legalEntity: "SRL",
		companyName: "ACME Inc.",
		companyDescription:
			"If you've ever blown off a finger, that was probably us. Sorry!",
		companyAddress: { type: "HomeAddress" },
		companyPhoneNumber: "+1555555555",
		contactPhoneNumber: "+1555555555",
		initialFunding: "",
		specialRequests: "",
	};

	// Submit form to hubspot, then show a Thank You page
	const submitForm = useCallback(async () => {
		setSubmitting(true);
		try {
			await submitCompanyDataToHubspot(companyData);
			// todo: replace with toast or notification
			setCompleted(true);
		} catch (error: any) {
			console.error(error);
			setSubmissionError(error.message);
		}
		setSubmitting(false);
	}, []);

	const lastPage = formIndex === CompanyForms.length - 1;

	const requiredFields = CompanyForms[formIndex].required;
	const allRequiredFieldsFilled = requiredFields.every((field) => companyData[field]);

	const redirectToCheckout = async (companyData: CompanyData) => {
		const url = await createCheckoutSession(companyData.contactEmail);
		if (!url) throw "Checkout session did not supply URL";

		router.replace(url);
	};

	return completed ? (
		<div className={styles.container}>
			<h1 className={styles.heading}>
				Thank you for submitting your information!
			</h1>
			<p className={styles.paragraph}>
				We now ask you to submit a deposit. Click on the button below, it will
				take you to the checkout page. All payments are handled securely by
				Stripe.
			</p>
			<p className={styles.paragraph}>
				Once the deposit has been submitted, we will also ask you to provide a
				photo or scan of a document confirming your identity, as we are required
				to do by law. Please have your ID close at hand.
			</p>
			<form className={styles.checkout}>
				<section>
					<button
						role="link"
						onClick={(event) => {
							event.preventDefault();
							return redirectToCheckout(testData);
						}}
					>
						Checkout via{" "}
						<img
							className="logo"
							src="/images/logo/stripe.white.svg"
							alt="Stripe"
						/>
					</button>
				</section>
			</form>
		</div>
	) : (
		<div className={styles.container}>
			<h1 className="font-display text-4xl font-extrabold text-slate-900">
				Seven Seed Entity Questionnaire
			</h1>
			<div className="relative flex">
				<div className="mr-10 py-10 flex flex-col">
					<SidebarLinks formIndex={formIndex} setFormIndex={setFormIndex} />
				</div>
				<form noValidate>
					<CompanyDataContext.Provider
						value={{ companyData, setCompanyData }}
					>
						<FormStepComponent
							formIndex={formIndex}
							companyData={companyData}
							setCompanyData={setCompanyData}
						/>
					</CompanyDataContext.Provider>
					{/* {formIndex > 0 && (
						<button
							onClick={() => setFormIndex(formIndex - 1)}
							className="mt-8 px-4 py-2 text-base font-medium text-white bg-slate-900 rounded-md shadow-sm hover:bg-slate-800"
						>
							&lt;- Back
						</button>
					)}{" "} */}
					{submissionError && (
						<p className="text-red-500 text-sm">{submissionError}</p>
					)}
					<button
						onClick={(e) => {
							lastPage ? submitForm() : setFormIndex(formIndex + 1);
							e.preventDefault();
						}}
						className={styles.button}
						disabled={!allRequiredFieldsFilled || submitting}
					>
						{submitting ? "Submitting.." : lastPage ? "Submit" : "Continue"}{" "}
						&rarr;
					</button>
				</form>
			</div>
		</div>
	);
};

export default CustomerJourney;
