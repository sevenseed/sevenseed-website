import { CompanyDataFormProps } from "../CustomerJourney";
import styles from "../CustomerJourney.module.css";

const CompanyInfoForm = ({ companyData, setCompanyData }: CompanyDataFormProps) => {
	return (
		<>
			<h1 className={styles.header}>Company Info</h1>

			<h2 className={styles.header2}>Legal Entity</h2>
			<p className={styles.description}>
				What type of legal corporate entity do you want to create?
			</p>
			<fieldset className={styles.fields}>
				<label htmlFor="srl">
					<input
						type="radio"
						id="srl"
						name="legalEntity"
						value="srl"
						onChange={(e) =>
							setCompanyData({
								...companyData,
								legalEntity: e.target.value,
							})
						}
						checked={companyData.legalEntity === "srl"}
					/>
					<span className="text-base font-medium text-gray-700 ml-2">
						SRL
					</span>
				</label>
				<label htmlFor="other">
					<input
						type="radio"
						id="other"
						name="legalEntity"
						value="other"
						onChange={(e) =>
							setCompanyData({
								...companyData,
								legalEntity: e.target.value,
							})
						}
						checked={companyData.legalEntity === "other"}
					/>
					<span className="text-base font-medium text-gray-700 ml-2">
						Other
					</span>
				</label>
			</fieldset>

			<h2 className={styles.header2}>Company Name</h2>
			<p className={styles.description}>
				What will your business be called? (You can give multiple options /
				suggestions)
			</p>
			<fieldset className={styles.fields}>
				<label htmlFor="companyName">
					<input
						type="text"
						id="companyName"
						name="companyName"
						placeholder="name"
						onChange={(e) =>
							setCompanyData({
								...companyData,
								companyName: e.target.value,
							})
						}
						value={companyData.companyName}
					/>
				</label>
			</fieldset>

			<h2 className={styles.header2}>Company Description</h2>
			<p className={styles.description}>
				Tell us about your business (what it will do, how it will make money,
				who will your customers be)
			</p>
			<fieldset className={styles.fields}>
				<label htmlFor="companyDescription">
					<textarea
						id="companyDescription"
						name="companyDescription"
						placeholder="about the company"
						onChange={(e) =>
							setCompanyData({
								...companyData,
								companyDescription: e.target.value,
							})
						}
						value={companyData.companyDescription}
					/>
				</label>
			</fieldset>

			<h2 className={styles.header2}>Business Address</h2>
			<p className={styles.description}>
				What will the address of the business be? (Leave blank if same as home
				address)
			</p>
			<fieldset className={styles.fields}>
				<label htmlFor="companyAddress">
					<input
						type="text"
						id="companyAddress"
						name="companyAddress"
						placeholder="business address"
						onChange={(e) =>
							setCompanyData({
								...companyData,
								companyAddress: e.target.value,
							})
						}
						value={companyData.companyAddress}
					/>
				</label>
			</fieldset>

			<h2 className={styles.header2}>Business Phone Number</h2>
			<p className={styles.description}>
				What is your business phone number? (If you don&apos;t have one yet,
				enter your personal phone number)
			</p>
			<fieldset className={styles.fields}>
				<label htmlFor="companyPhoneNumber">
					<input
						type="text"
						id="companyPhoneNumber"
						name="companyPhoneNumber"
						placeholder="business phone"
						onChange={(e) =>
							setCompanyData({
								...companyData,
								companyPhoneNumber: e.target.value,
							})
						}
						value={companyData.companyPhoneNumber}
					/>
				</label>
			</fieldset>
		</>
	);
};
export default CompanyInfoForm;
