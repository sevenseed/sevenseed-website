import FormPage from "../_components/FormPage";
import { RadioFormInput, RadioOption, SimpleFormInput } from "../_components/Inputs";

import styles from "./pages.module.css";

export default function ClientInfoPage() {
	return (
		<div className={styles.pageWrapper}>
			<FormPage step="client" label="Client Information">
				<SimpleFormInput
					id="contactName"
					label="Name"
					placeholder="John Doe"
					required
				/>
				<SimpleFormInput
					id="dateOfBirth"
					label="Date of Birth"
					type="date"
					required
				/>
				<RadioFormInput id="civilStatus" label="Company Address">
					<RadioOption
						id="civilStatus"
						label="Single"
						value="Single"
						required
					/>
					<RadioOption
						id="civilStatus"
						label="Married"
						value="Married"
						required
					/>
					<RadioOption
						id="civilStatus"
						label="Legal Cohabitation"
						value="LegalCohabitation"
						required
					/>
				</RadioFormInput>
				<SimpleFormInput
					id="contactEmail"
					label="Email"
					type="email"
					placeholder="hello@world.com"
					required
				/>
				<SimpleFormInput
					id="contactPhoneNumber"
					label="Contact Phone"
					description="Your personal phone number, for reaching out to you directly"
					type="tel"
					placeholder="+32123456789"
					required
				/>
			</FormPage>

			<FormPage step="client" label="Home Address">
				<SimpleFormInput
					id="contactAddressAddressLine1"
					label="Address line 1"
					placeholder="Rue de la Loi, 123"
					required
				/>
				<SimpleFormInput
					id="contactAddressAddressLine2"
					label="Address line 2"
					placeholder="Apt 123"
				/>
				<div className="grid sm:grid-cols-[1fr_3fr] gap-x-2 gap-y-1 flex-wrap sm:flex-nowrap">
					<SimpleFormInput
						id="contactAddressPostalCode"
						label="Postal code"
						placeholder="1040"
						className="sm:max-w-[10ch]"
					/>
					<SimpleFormInput
						id="contactAddressCity"
						label="City"
						placeholder="Brussels"
						required
					/>
				</div>
				<SimpleFormInput
					id="contactAddressRegion"
					label="State / Province / Region"
					placeholder="Brussels-Capital Region"
				/>
				<SimpleFormInput
					id="contactAddressCountry"
					label="Country"
					placeholder="Belgium"
					required
				/>
			</FormPage>
		</div>
	);
}
