import { useContext } from "react";
import FormPage from "../_components/FormPage";
import { RadioFormInput, RadioOption, SimpleFormInput } from "../_components/Inputs";
import { NewCompanyContext } from "@/contexts/NewCompanyContext";

import styles from "./pages.module.css";

export default function CompanyInfoPage() {
	const { companyData } = useContext(NewCompanyContext);
	const usesExistingAddress = companyData.companyAddressType === "ExistingAddress";

	return (
		<div className={styles.pageWrapper}>
			<FormPage step="companyAddress" label="Company Address">
				<RadioFormInput id="addressType">
					<RadioOption
						id="addressType"
						label="Use my home address"
						value="HomeAddress"
						required
					/>
					<RadioOption
						id="addressType"
						label="Get me an address"
						value="CreateNewAddress"
						required
					/>
					<RadioOption
						id="addressType"
						label="Use an existing address"
						value="ExistingAddress"
						required
					/>
				</RadioFormInput>
				<SimpleFormInput
					id="addressLine1"
					label="Address line 1"
					placeholder="Rue de la Loi, 123"
					value={usesExistingAddress ? companyData.addressLine1 : ""}
					required={usesExistingAddress}
					disabled={!usesExistingAddress}
				/>
				<SimpleFormInput
					id="addressLine2"
					label="Address line 2"
					placeholder="Apt 123"
					value={usesExistingAddress ? companyData.addressLine2 : ""}
					disabled={!usesExistingAddress}
				/>
				<div className="grid sm:grid-cols-[1fr_3fr] gap-x-2 gap-y-1 flex-wrap sm:flex-nowrap">
					<SimpleFormInput
						id="postalCode"
						label="Postal code"
						placeholder="1040"
						className="sm:max-w-[10ch]"
						value={usesExistingAddress ? companyData.postalCode : ""}
						disabled={!usesExistingAddress}
					/>
					<SimpleFormInput
						id="city"
						label="City"
						placeholder="Brussels"
						value={usesExistingAddress ? companyData.city : ""}
						required={usesExistingAddress}
						disabled={!usesExistingAddress}
					/>
				</div>
				<SimpleFormInput
					id="region"
					label="State / Province / Region"
					placeholder="Brussels-Capital Region"
					value={usesExistingAddress ? companyData.region : ""}
					disabled={!usesExistingAddress}
				/>
				<SimpleFormInput
					id="country"
					label="Country"
					placeholder="Belgium"
					value={usesExistingAddress ? companyData.country : ""}
					required={usesExistingAddress}
					disabled={!usesExistingAddress}
				/>
			</FormPage>
		</div>
	);
}
