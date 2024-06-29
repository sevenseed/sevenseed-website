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
				<RadioFormInput id="civilStatus" label="Civil Status">
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
		</div>
	);
}
