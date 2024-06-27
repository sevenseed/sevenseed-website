"use client";
import { useContext } from "react";
import FormPage from "../_components/FormPage";
import {
	OwnersRadioOption,
	OwnersSimpleFormInput,
	RadioFormInput,
} from "../_components/Inputs";
import { NewCompanyContext } from "@/contexts/NewCompanyContext";

import styles from "./pages.module.css";
import { Button } from "@/components/Button";

const AddUserIcon = () => (
	<svg
		height="21"
		viewBox="0 0 21 21"
		width="21"
		xmlns="http://www.w3.org/2000/svg"
		className="w-full h-full fill-current"
	>
		<g
			fill="none"
			fillRule="evenodd"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			transform="translate(3 2)"
		>
			<path d="m7.5.5c1.65685425 0 3 1.34314575 3 3v2c0 1.65685425-1.34314575 3-3 3s-3-1.34314575-3-3v-2c0-1.65685425 1.34314575-3 3-3z" />
			<path d="m14.5 2.5v4" />
			<path d="m16.5 4.5h-4" />
			<path d="m14.5 14.5v-.7281753c0-3.1864098-3.6862915-5.2718247-7-5.2718247s-7 2.0854149-7 5.2718247v.7281753c0 .5522847.44771525 1 1 1h12c.5522847 0 1-.4477153 1-1z" />
		</g>
	</svg>
);

export default function KYCPage() {
	const { owners, dispatch } = useContext(NewCompanyContext);

	return (
		<div className={styles.pageWrapper}>
			<FormPage step="kyc" label="Founders">
				{owners.map((owner) => (
					<div
						key={owner.id}
						className="flex flex-col gap-y-4 bg-slate-50 border rounded p-4"
					>
						<div className="flex flex-col gap-y-2">
							<div className="flex justify-between">
								<span className="text-xl font-semibold">
									Personal details
								</span>
								{owners.length > 1 && (
									<Button
										variant="outline"
										color="red"
										className="text-red-900 hover:text-red-800"
										onClick={() =>
											dispatch({ type: "REMOVE", id: owner.id })
										}
									>
										Remove
									</Button>
								)}
							</div>
							<OwnersSimpleFormInput
								owner={owner}
								id="name"
								label="Name"
								placeholder="John Doe"
								required
							/>
							<OwnersSimpleFormInput
								owner={owner}
								id="email"
								label="Email"
								type="email"
								placeholder="hello@world.com"
								required
							/>
							<RadioFormInput id="civilStatus" label="Civil Status">
								<OwnersRadioOption
									owner={owner}
									id="civilStatus"
									label="Single"
									value="Single"
									required
								/>
								<OwnersRadioOption
									owner={owner}
									id="civilStatus"
									label="Married"
									value="Married"
									required
								/>
								<OwnersRadioOption
									owner={owner}
									id="civilStatus"
									label="Legal Cohabitation"
									value="LegalCohabitation"
									required
								/>
							</RadioFormInput>
						</div>

						<div className="flex flex-col gap-y-2">
							<span className="text-xl font-semibold">
								Personal address
							</span>
							<OwnersSimpleFormInput
								owner={owner}
								id="addressLine1"
								label="Address line 1"
								placeholder="Rue de la Loi, 123"
								required
							/>
							<OwnersSimpleFormInput
								owner={owner}
								id="addressLine2"
								label="Address line 2"
								placeholder="Apt 123"
							/>
							<div className="grid sm:grid-cols-[1fr_3fr] gap-x-2 gap-y-1 flex-wrap sm:flex-nowrap">
								<OwnersSimpleFormInput
									owner={owner}
									id="postalCode"
									label="Postal code"
									placeholder="1040"
									className="sm:max-w-[10ch]"
								/>
								<OwnersSimpleFormInput
									owner={owner}
									id="city"
									label="City"
									placeholder="Brussels"
									required
								/>
							</div>
							<OwnersSimpleFormInput
								owner={owner}
								id="region"
								label="State / Province / Region"
								placeholder="Brussels-Capital Region"
							/>
							<OwnersSimpleFormInput
								owner={owner}
								id="country"
								label="Country"
								placeholder="Belgium"
								required
							/>
						</div>
						<div className="flex justify-end">
							<Button color="blue">Save</Button>
						</div>
					</div>
				))}
				<div
					className="flex items-center gap-x-4 bg-slate-50 hover:bg-blue-50 border rounded p-4 cursor-pointer select-none"
					onClick={() => dispatch({ type: "ADD" })}
				>
					<span className="h-10 text-blue-600">
						<AddUserIcon />
					</span>
					<div className="w-full text-center">
						<span className="text-lg font-semibold text-blue-600">
							Add a new company founder
						</span>
					</div>
				</div>
			</FormPage>
		</div>
	);
}
