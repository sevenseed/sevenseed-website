import FormPage from "../_components/FormPage";
import {
	MultilineFormInput,
	RadioFormInput,
	RadioOption,
	SimpleFormInput,
} from "../_components/Inputs";

import styles from "./pages.module.css";

export default function CompanyInfoPage() {
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
		</div>
	);
}
