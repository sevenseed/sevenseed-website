import FormPage from "../_components/FormPage";
import {
	MultilineFormInput,
	RadioFormInput,
	SimpleFormInput,
} from "../_components/Inputs";

export default function CompanyInfoPage() {
	return (
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
			/>
			<RadioFormInput
				id="legalEntity"
				label="Legal Entity"
				options={["SRL", "Independent Entrepreneur", "Other"]}
				required
			/>
			<SimpleFormInput
				id="companyPhoneNumber"
				label="Company Phone"
				description="If you don't have one yet, enter your personal phone number"
				type="tel"
				placeholder="+32123456789"
				required
			/>
		</FormPage>
	);
}
