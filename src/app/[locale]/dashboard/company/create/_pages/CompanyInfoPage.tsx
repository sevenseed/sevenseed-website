import { useContext } from "react";
import FormPage from "../_components/FormPage";
import {
	MultilineFormInput,
	RadioFormInput,
	RadioOption,
	SimpleFormInput,
} from "../_components/Inputs";
import { NewCompanyContext } from "@/contexts/NewCompanyContext";

import styles from "./pages.module.css";

export default function CompanyInfoPage() {
	const { companyData } = useContext(NewCompanyContext);
	const usesExistingAddress = companyData.companyAddressType === "ExistingAddress";

	return (
		<div className={styles.pageWrapper}>
			<FormPage step="company" label="Company Information">
				<SimpleFormInput
					id="companyName"
					label="Company Name"
					placeholder="Google, Inc."
					required
				/>
				<MultilineFormInput
					id="companyDescription"
					label="Company Description"
					placeholder="Acme Inc. is a globally diversified corporation setting new standards of excellence in various sectors."
					rows={4}
					required
				/>
				<RadioFormInput id="legalEntity" label="Legal Entity" required>
					<RadioOption id="legalEntity" label="SRL" value="SRL" required />
					<RadioOption
						id="legalEntity"
						label="Independent Entrepreneur"
						value="IndependentEntrepreneur"
						required
					/>
					<RadioOption
						id="legalEntity"
						label="Other"
						value="Other"
						required
					/>
				</RadioFormInput>
				<SimpleFormInput
					id="companyPhoneNumber"
					label="Company Phone"
					description="If you don't have one yet, enter your personal phone number"
					type="tel"
					placeholder="+32123456789"
					required
				/>
			</FormPage>
			<FormPage step="company" label="Company Address">
				<RadioFormInput id="companyAddressType">
					<RadioOption
						id="companyAddressType"
						label="Use my home address"
						value="HomeAddress"
						required
					/>
					<RadioOption
						id="companyAddressType"
						label="Get me an address"
						value="CreateNewAddress"
						required
					/>
					<RadioOption
						id="companyAddressType"
						label="Use an existing address"
						value="ExistingAddress"
						required
					/>
				</RadioFormInput>
				<SimpleFormInput
					id="companyAddressAddressLine1"
					label="Address line 1"
					placeholder="Rue de la Loi, 123"
					value={
						usesExistingAddress
							? companyData.companyAddressAddressLine1
							: companyData.contactAddressAddressLine1
					}
					required={usesExistingAddress}
					disabled={!usesExistingAddress}
				/>
				<SimpleFormInput
					id="companyAddressAddressLine2"
					label="Address line 2"
					placeholder="Apt 123"
					value={
						usesExistingAddress
							? companyData.companyAddressAddressLine2
							: companyData.contactAddressAddressLine2
					}
					disabled={!usesExistingAddress}
				/>
				<div className="grid sm:grid-cols-[1fr_3fr] gap-x-2 gap-y-1 flex-wrap sm:flex-nowrap">
					<SimpleFormInput
						id="companyAddressPostalCode"
						label="Postal code"
						placeholder="1040"
						className="sm:max-w-[10ch]"
						value={
							usesExistingAddress
								? companyData.companyAddressPostalCode
								: companyData.contactAddressPostalCode
						}
						disabled={!usesExistingAddress}
					/>
					<SimpleFormInput
						id="companyAddressCity"
						label="City"
						placeholder="Brussels"
						value={
							usesExistingAddress
								? companyData.companyAddressCity
								: companyData.contactAddressCity
						}
						required={usesExistingAddress}
						disabled={!usesExistingAddress}
					/>
				</div>
				<SimpleFormInput
					id="companyAddressRegion"
					label="State / Province / Region"
					placeholder="Brussels-Capital Region"
					value={
						usesExistingAddress
							? companyData.companyAddressRegion
							: companyData.contactAddressRegion
					}
					disabled={!usesExistingAddress}
				/>
				<SimpleFormInput
					id="companyAddressCountry"
					label="Country"
					placeholder="Belgium"
					value={
						usesExistingAddress
							? companyData.companyAddressCountry
							: companyData.contactAddressCountry
					}
					required={usesExistingAddress}
					disabled={!usesExistingAddress}
				/>
			</FormPage>
		</div>
	);
}
