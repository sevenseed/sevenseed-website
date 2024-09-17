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
					id="name"
					label="Company Name"
					placeholder="Google, Inc."
					required
				/>
				<MultilineFormInput
					id="description"
					label="Company Description"
					placeholder="Acme Inc. is a globally diversified corporation setting new standards of excellence in various sectors."
					rows={4}
					required
				/>
				<RadioFormInput id="legalEntityType" label="Legal Entity" required>
					<RadioOption
						id="legalEntityType"
						label="SRL"
						value="SRL"
						required
					/>
					<RadioOption
						id="legalEntityType"
						label="Independent Entrepreneur"
						value="IndependentEntrepreneur"
						required
					/>
					<RadioOption
						id="legalEntityType"
						label="Other"
						value="Other"
						required
					/>
				</RadioFormInput>
				<SimpleFormInput
					id="phoneNumber"
					label="Company Phone"
					description="If you don't have one yet, enter your personal phone number"
					type="tel"
					placeholder="+32123456789"
					required
				/>
				<SimpleFormInput
					id="email"
					label="Company Email"
					description="If you don't have one yet, enter an address we can reach you with"
					type="email"
					placeholder="jon.d@google.com"
					required
				/>
			</FormPage>
		</div>
	);
}
