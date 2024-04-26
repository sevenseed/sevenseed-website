import FormPage from "../_components/FormPage";
import { SimpleFormInput } from "../_components/Inputs";

export default function BillingAddressPage() {
	return (
		<FormPage step="address" label="Billing Address">
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
	);
}
