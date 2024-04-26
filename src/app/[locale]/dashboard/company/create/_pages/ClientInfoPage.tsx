import FormPage from "../_components/FormPage";
import { RadioFormInput, SimpleFormInput } from "../_components/Inputs";

export default function ClientInfoPage() {
	return (
		<FormPage step="you" label="Client Information">
			<SimpleFormInput
				id="contactName"
				label="Name"
				placeholder="John Doe"
				required
			/>
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
			<RadioFormInput
				id="civilStatus"
				label="Civil Status"
				options={["Single", "Married", "Legal Cohabitation"]}
				required
			/>
		</FormPage>
	);
}
