"use client";
import {
	Dispatch,
	HTMLInputTypeAttribute,
	PropsWithChildren,
	SetStateAction,
	useCallback,
	useState,
} from "react";
import { useForm, ValidationError } from "@formspree/react";
import { CompanyData, type Form } from "@/api/interfaces";
import clsx from "clsx";
import { useRouter } from "next/navigation";

type InputProps = {
	id: string;
	label: string;
	required?: boolean;
	description?: string;
	data: CompanyData;
	setData: Dispatch<SetStateAction<CompanyData>>;
};

type FormInputProps = InputProps & {
	placeholder?: string;
	type?: HTMLInputTypeAttribute;
};

type MultilineInputProps = InputProps & {
	placeholder?: string;
	rows?: number;
	cols?: number;
};

type RadioInputProps = InputProps & {
	options: string[];
};

const forms: Form[] = [
	{ id: "you", label: "You" },
	{ id: "address", label: "Address" },
	{ id: "company", label: "Company" },
];

const lastStepID = forms[forms.length - 1].id;

const RequiredMark = () => (
	<span className="font-normal text-gray-400 ml-3" title="This field must be filled">
		required
	</span>
);

export default function Create() {
	const [state, handleSubmit] = useForm("myyrnrqj");
	const [step, setStep] = useState("you");
	const router = useRouter();

	// TODO: on submit, set the correct business address
	const [companyData, setCompanyData] = useState<CompanyData>({
		contactName: "",
		contactEmail: "",
		contactPhoneNumber: "",
		civilStatus: "",

		contactAddressCountry: "",
		contactAddressRegion: "",
		contactAddressCity: "",
		contactAddressPostalCode: "",
		contactAddressAddressLine1: "",
		contactAddressAddressLine2: "",

		legalEntity: "",
		companyName: "",
		companyDescription: "",
		companyPhoneNumber: "",

		companyAddressCountry: "",
		companyAddressRegion: "",
		companyAddressCity: "",
		companyAddressPostalCode: "",
		companyAddressAddressLine1: "",
		companyAddressAddressLine2: "",
		companyAddressType: "HomeAddress",

		initialFunding: "",
		specialRequests: "",
	});

	const NavigationSidebar = useCallback(
		() => (
			<div className="flex flex-col items-start">
				{forms.map((form) => {
					const className = clsx(
						"border-l-2 border-current font-medium pl-2",
						form.id === step ? "text-green-600" : "text-gray-300",
					);

					return (
						<button
							key={form.id}
							className={className}
							onClick={() => setStep(form.id)}
						>
							{form.label}
						</button>
					);
				})}
			</div>
		),
		[step],
	);

	const SimpleFormInput = useCallback(
		({
			id,
			label,
			description = "",
			placeholder = "",
			type = "text",
			data,
			setData,
			required = false,
			className = "",
		}: FormInputProps & { className?: string }) => (
			<fieldset className="flex flex-col w-full space-y-1">
				<label htmlFor={id} className="flex flex-col">
					<span className="font-semibold">
						{label}
						{required && <RequiredMark />}
					</span>
					{description ? <span className="text-sm">{description}</span> : ""}
				</label>
				<input
					id={id}
					name={id}
					type={type}
					required={required}
					placeholder={placeholder}
					value={data[id]}
					onChange={(event) => {
						setData({ ...data, [id]: event.currentTarget.value });
					}}
					className={clsx(
						"rounded-md border p-1 px-2 focus-visible:outline-2 focus-visible:outline-primary-300",
						className,
					)}
				/>
				<ValidationError prefix={id} field={id} errors={state.errors} />
			</fieldset>
		),
		[],
	);

	const MultilineFormInput = useCallback(
		({
			id,
			label,
			description = "",
			placeholder = "",
			rows = 2,
			cols = 1,
			data,
			setData,
			required = false,
		}: MultilineInputProps) => (
			<fieldset className="flex flex-col w-full space-y-1">
				<label htmlFor={id} className="flex flex-col">
					<span className="font-semibold">
						{label}
						{required && <RequiredMark />}
					</span>
					{description ? <span className="text-sm">{description}</span> : ""}
				</label>
				<textarea
					id={id}
					name={id}
					required={required}
					placeholder={placeholder}
					className="rounded-md border p-1 px-2 focus-visible:outline-2 focus-visible:outline-primary-300"
					value={data[id]}
					onChange={(event) => {
						setData({ ...data, [id]: event.currentTarget.value });
					}}
					rows={rows}
					cols={cols}
				/>
				<ValidationError prefix={id} field={id} errors={state.errors} />
			</fieldset>
		),
		[],
	);

	const RadioFormInput = useCallback(
		({ id, label, options, data, setData, required = false }: RadioInputProps) => (
			<fieldset className="flex flex-col w-full space-y-1">
				<span className="font-semibold pl-1">
					{label}
					{required && <RequiredMark />}
				</span>
				<div className="pl-1 space-y-1">
					{options.map((option) => (
						<div key={option}>
							<input
								id={`${id}--${option.replaceAll(" ", "")}`}
								type="radio"
								name={id}
								value={option}
								checked={data[id] === option}
								onChange={(event) =>
									setData({
										...data,
										[id]: event.currentTarget.value,
									})
								}
								required={required}
							/>
							<label
								htmlFor={`${id}--${option.replaceAll(" ", "")}`}
								className="pl-1"
							>
								{option}
							</label>
						</div>
					))}
				</div>
				<ValidationError
					prefix="Civil Status"
					field="civilStatus"
					errors={state.errors}
				/>
			</fieldset>
		),
		[],
	);

	const FormPage = useCallback(
		({
			step: formStep,
			label,
			children,
		}: PropsWithChildren<{ step: Form["id"]; label: string }>) => {
			const isHidden = formStep !== step;

			return (
				<div
					className="w-96 lg:min-w-96 flex flex-col gap-y-2"
					hidden={isHidden}
				>
					<h2 className="font-display text-3xl font-semibold mb-2">
						{label}
					</h2>
					{children}
				</div>
			);
		},
		[step],
	);

	if (state.succeeded) {
		return router.push(
			`/dashboard/payment/deposit?email=${companyData.contactEmail}`,
		);
	}

	return (
		<div className="flex flex-col py-16 sm:py-20 lg:py-32 w-full md:w-3/4 lg:w-1/2 gap-y-4 mx-auto">
			<h1 className="font-display text-4xl font-extrabold text-slate-900">
				Seven Seed Entity Questionnaire
			</h1>
			<div className="flex gap-x-12 mt-6">
				<NavigationSidebar />
				<form onSubmit={handleSubmit}>
					<input
						name="subject"
						type="hidden"
						value={
							(process.env.NODE_ENV === "development" || "test"
								? "[TEST] "
								: "") + "Application for Seven Seed"
						}
					/>
					<FormPage step="you" label="Client Information">
						<SimpleFormInput
							id="contactName"
							label="Name"
							placeholder="John Doe"
							data={companyData}
							setData={setCompanyData}
							required
						/>
						<SimpleFormInput
							id="contactEmail"
							label="Email"
							type="email"
							placeholder="hello@world.com"
							data={companyData}
							setData={setCompanyData}
							required
						/>
						<SimpleFormInput
							id="contactPhoneNumber"
							label="Contact Phone"
							description="Your personal phone number, for reaching out to you directly"
							type="tel"
							placeholder="+32123123123"
							data={companyData}
							setData={setCompanyData}
							required
						/>
						<RadioFormInput
							id="civilStatus"
							label="Civil Status"
							options={["Single", "Married", "Legal Cohabitation"]}
							data={companyData}
							setData={setCompanyData}
							required
						/>
					</FormPage>
					<FormPage step="address" label="Billing Address">
						<SimpleFormInput
							id="addressLine1"
							label="Address line 1"
							placeholder="Rue de la Loi, 123"
							data={companyData}
							setData={setCompanyData}
							required
						/>
						<SimpleFormInput
							id="addressLine2"
							label="Address line 2"
							placeholder="Apt 123"
							data={companyData}
							setData={setCompanyData}
						/>
						<fieldset className="flex flex-col gap-y-1">
							<div className="flex gap-x-2 gap-y-1 flex-wrap sm:flex-nowrap">
								<SimpleFormInput
									id="postalCode"
									label="Postal code"
									placeholder="1040"
									data={companyData}
									setData={setCompanyData}
									className="sm:w-[14ch]"
								/>
								<SimpleFormInput
									id="city"
									label="City"
									placeholder="Brussels"
									data={companyData}
									setData={setCompanyData}
									required
								/>
							</div>
						</fieldset>
						<SimpleFormInput
							id="region"
							label="State / Province / Region"
							placeholder="Brussels-Capital Region"
							data={companyData}
							setData={setCompanyData}
						/>
						<SimpleFormInput
							id="country"
							label="Country"
							placeholder="Belgium"
							data={companyData}
							setData={setCompanyData}
							required
						/>
					</FormPage>
					<FormPage step="company" label="Company Information">
						<SimpleFormInput
							id="companyName"
							label="Company Name"
							placeholder="Google, Inc."
							data={companyData}
							setData={setCompanyData}
							required
						/>
						<MultilineFormInput
							id="companyDescription"
							label="Company Description"
							placeholder="Acme Inc. is a globally diversified corporation setting new standards of excellence in various sectors."
							rows={4}
							data={companyData}
							setData={setCompanyData}
						/>
						<RadioFormInput
							id="legalEntity"
							label="Legal Entity"
							options={["SRL", "Independent Entrepreneur", "Other"]}
							data={companyData}
							setData={setCompanyData}
							required
						/>
						<SimpleFormInput
							id="companyPhoneNumber"
							label="Company Phone"
							description="If you don't have one yet, enter your personal phone number"
							type="tel"
							placeholder="+32123123123"
							data={companyData}
							setData={setCompanyData}
							required
						/>
					</FormPage>

					<button
						className="border px-3 py-2 w-full bg-[#305cb7] hover:bg-[#577bc5] active:bg-[#274b94] text-white mt-4 rounded"
						onClick={(event) => {
							if (step !== lastStepID) {
								event.preventDefault();
								const currentStepIndex = forms.findIndex(
									(form) => form.id === step,
								);
								const nextStepID = forms[currentStepIndex + 1].id;
								setStep(nextStepID);
							}
						}}
					>
						{step === lastStepID
							? state.succeeded
								? "Submitted!"
								: state.submitting
								? "Submitting..."
								: "Submit"
							: "Next"}
					</button>
				</form>
			</div>
		</div>
	);
}
