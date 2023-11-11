import { CompanyDataFormProps } from "../CustomerJourney";
import styles from "../CustomerJourney.module.css";

const ContactInfoForm = ({ companyData, setCompanyData }: CompanyDataFormProps) => {
	return (
		<>
			<h1 className={styles.header}>Contact Info</h1>
			<h2 className={styles.header2}>Contact Email</h2>
			<p className={styles.description}>Your email address</p>
			<fieldset className={styles.fields}>
				<label htmlFor="email">
					<input
						type="text"
						id="email"
						name="email"
						placeholder="you@example.com"
						onChange={(e) =>
							setCompanyData({
								...companyData,
								contactEmail: e.target.value,
							})
						}
						value={companyData.contactEmail}
					/>
				</label>
			</fieldset>

			<h2 className={styles.header2}>Contact Name</h2>
			<p className={styles.description}>Your name</p>
			<fieldset className={styles.fields}>
				<label htmlFor="contactName">
					<input
						type="text"
						id="contactName"
						name="contactName"
						placeholder="name"
						onChange={(e) =>
							setCompanyData({
								...companyData,
								contactName: e.target.value,
							})
						}
						value={companyData.contactName}
					/>
				</label>
			</fieldset>

			<h2 className={styles.header2}>Home Address</h2>
			<p className={styles.description}>What is your home address?</p>
			<fieldset className={styles.fields}>
				<label htmlFor="contactAddress">
					<input
						type="text"
						id="contactAddress"
						name="contactAddress"
						placeholder="home address"
						onChange={(e) =>
							setCompanyData({
								...companyData,
								contactAddress: e.target.value,
							})
						}
						value={companyData.contactAddress}
					/>
				</label>
			</fieldset>

			<h2 className={styles.header2}>Civil Status</h2>
			<p className={styles.description}>What is your civil status?</p>
			<fieldset className={styles.fields}>
				<label htmlFor="single">
					<input
						type="radio"
						id="single"
						name="civilStatus"
						value="single"
						onChange={(e) =>
							setCompanyData({
								...companyData,
								civilStatus: e.target.value,
							})
						}
						checked={companyData.civilStatus === "single"}
					/>
					<span className="text-base font-medium text-gray-700 ml-2">
						Single
					</span>
				</label>
				<label htmlFor="married">
					<input
						type="radio"
						id="married"
						name="civilStatus"
						value="married"
						onChange={(e) =>
							setCompanyData({
								...companyData,
								civilStatus: e.target.value,
							})
						}
						checked={companyData.civilStatus === "married"}
					/>
					<span className="text-base font-medium text-gray-700 ml-2">
						Married
					</span>
				</label>

				<label htmlFor="legalCohabitation">
					<input
						type="radio"
						id="legalCohabitation"
						name="civilStatus"
						value="legalCohabitation"
						onChange={(e) =>
							setCompanyData({
								...companyData,
								civilStatus: e.target.value,
							})
						}
						checked={companyData.civilStatus === "legalCohabitation"}
					/>
					<span className="text-base font-medium text-gray-700 ml-2">
						Legal Cohabitation
					</span>
				</label>
			</fieldset>
		</>
	);
};
export default ContactInfoForm;
