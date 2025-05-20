"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useTranslations } from "next-intl";
import { CheckIcon } from "@heroicons/react/24/solid";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const RequiredMark = () => <span className="text-red-500 ml-1">*</span>;

function GetStartedForm() {
	const t = useTranslations("GetStarted.form");
	const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
	const [showSeparateAddress, setShowSeparateAddress] = useState(false);

	if (!FORM_ID) {
		throw new Error("Contact form ID not found in environment");
	}

	const [state, handleSubmit] = useForm(FORM_ID);

	if (state.succeeded) {
		return (
			<div className="flex flex-col rounded-lg p-5 bg-white shadow-lg border border-gray-100 gap-y-3 text-center w-full max-w-3xl mx-auto">
				<div className="mx-auto bg-green-100 p-3 rounded-full">
					<CheckIcon className="h-8 w-8 text-green-600" />
				</div>
				<h3 className="text-xl font-semibold text-gray-900">{t("success")}</h3>
				<p className="text-gray-600">
					Our customer support team will get back to you within 1 business
					day.
				</p>
			</div>
		);
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col rounded-lg p-4 bg-white shadow-lg border border-gray-100 gap-y-4 w-full max-w-3xl mx-auto"
		>
			<input
				name="subject"
				type="hidden"
				value="Get Started form from Seven Seed"
			/>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div className="flex flex-col space-y-1">
					<label htmlFor="name" className="font-medium text-gray-700 text-sm">
						{t("name")}
						<RequiredMark />
					</label>
					<input
						id="name"
						name="name"
						required
						className="rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
						placeholder="John Doe"
					/>
					<ValidationError
						prefix="Name"
						field="name"
						errors={state.errors}
						className="text-red-500 text-xs mt-1"
					/>
				</div>

				<div className="flex flex-col space-y-1">
					<label
						htmlFor="email"
						className="font-medium text-gray-700 text-sm"
					>
						{t("email")}
						<RequiredMark />
					</label>
					<input
						id="email"
						name="email"
						type="email"
						required
						className="rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
						placeholder="john@example.com"
					/>
					<ValidationError
						prefix="Email"
						field="email"
						errors={state.errors}
						className="text-red-500 text-xs mt-1"
					/>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div className="flex flex-col space-y-1">
					<label
						htmlFor="phone"
						className="font-medium text-gray-700 text-sm"
					>
						{t("phone")}
					</label>
					<input
						id="phone"
						name="phone"
						type="tel"
						className="rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
						placeholder="+1 (555) 123-4567"
					/>
					<ValidationError
						prefix="Phone"
						field="phone"
						errors={state.errors}
						className="text-red-500 text-xs mt-1"
					/>
				</div>

				<div className="flex flex-col space-y-1">
					<label
						htmlFor="companyName"
						className="font-medium text-gray-700 text-sm"
					>
						{t("companyName")}
						<RequiredMark />
					</label>
					<input
						id="companyName"
						name="companyName"
						required
						className="rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
						placeholder="Acme Inc."
					/>
					<ValidationError
						prefix="CompanyName"
						field="companyName"
						errors={state.errors}
						className="text-red-500 text-xs mt-1"
					/>
				</div>
			</div>

			<div className="flex flex-col space-y-1">
				<label
					htmlFor="activities"
					className="font-medium text-gray-700 text-sm"
				>
					{t("activities")}
					<RequiredMark />
				</label>
				<textarea
					id="activities"
					name="activities"
					rows={2}
					required
					className="rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
					placeholder="Please describe your business activities..."
				/>
				<ValidationError
					prefix="Activities"
					field="activities"
					errors={state.errors}
					className="text-red-500 text-xs mt-1"
				/>
			</div>

			<div className="flex flex-col space-y-2">
				<span className="font-medium text-gray-700 text-sm">{t("region")}</span>
				<div className="grid grid-cols-2 gap-x-2 gap-y-2">
					<label className="flex items-center space-x-1.5 cursor-pointer">
						<input
							type="radio"
							name="region"
							value="Brussels"
							className="h-4 w-4 text-blue-600 focus:ring-blue-500"
						/>
						<span className="text-gray-700 text-sm">
							{t("regions.brussels")}
						</span>
					</label>
					<label className="flex items-center space-x-1.5 cursor-pointer">
						<input
							type="radio"
							name="region"
							value="Flanders"
							className="h-4 w-4 text-blue-600 focus:ring-blue-500"
						/>
						<span className="text-gray-700 text-sm">
							{t("regions.flanders")}
						</span>
					</label>
					<label className="flex items-center space-x-1.5 cursor-pointer">
						<input
							type="radio"
							name="region"
							value="Wallonia"
							className="h-4 w-4 text-blue-600 focus:ring-blue-500"
						/>
						<span className="text-gray-700 text-sm">
							{t("regions.wallonia")}
						</span>
					</label>
					<label className="flex items-center space-x-1.5 cursor-pointer">
						<input
							type="radio"
							name="region"
							value="No preference"
							defaultChecked
							className="h-4 w-4 text-blue-600 focus:ring-blue-500"
						/>
						<span className="text-gray-700 text-sm whitespace-normal">
							{t("regions.noPreference")}
						</span>
					</label>
				</div>
				<ValidationError
					prefix="Region"
					field="region"
					errors={state.errors}
					className="text-red-500 text-xs mt-1"
				/>
			</div>

			<div className="flex items-start space-x-1.5">
				<input
					type="checkbox"
					id="separateAddress"
					name="separateAddress"
					className="h-4 w-4 mt-0.5 text-blue-600 focus:ring-blue-500 rounded"
					onChange={(e) => setShowSeparateAddress(e.target.checked)}
				/>
				<label htmlFor="separateAddress" className="text-gray-700 text-sm">
					{t("separateAddress")}
				</label>
			</div>

			{showSeparateAddress && (
				<div className="flex flex-col space-y-1 bg-gray-50 p-2 rounded-md border border-gray-200">
					<label
						htmlFor="address"
						className="font-medium text-gray-700 text-sm"
					>
						Address
					</label>
					<textarea
						id="address"
						name="address"
						rows={2}
						className="rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
						placeholder="Enter your address..."
					/>
				</div>
			)}

			<button
				type="submit"
				disabled={state.submitting}
				className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center space-x-2 mt-1"
			>
				{state.submitting ? (
					<>
						<ArrowPathIcon className="h-4 w-4 animate-spin" />
						<span>{t("submitting")}</span>
					</>
				) : (
					<span>{t("submit")}</span>
				)}
			</button>
		</form>
	);
}

export default function GetStarted() {
	const t = useTranslations("GetStarted");
	return (
		<div className="w-full max-w-5xl mx-auto px-2 sm:px-4 py-6 sm:py-12">
			<div className="flex flex-col gap-y-4 sm:gap-y-6 text-balance w-full">
				<div className="text-center mb-0 sm:mb-2">
					<h1 className="font-display font-extrabold text-slate-900 text-3xl sm:text-5xl mb-2 sm:mb-3">
						{t("title")}
					</h1>
					<p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-600">
						{t("content")}
					</p>
				</div>
				<GetStartedForm />
			</div>
		</div>
	);
}
