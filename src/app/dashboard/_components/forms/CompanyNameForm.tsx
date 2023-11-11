import { CompanyDataFormProps } from "../CustomerJourney";
import styles from "../CustomerJourney.module.css";

const CompanyEmailForm = ({ companyData, setCompanyData }: CompanyDataFormProps) => {
	return (
		<>
			<h1 className={styles.header}>Company name</h1>
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
						placeholder="company name"
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
		</>
	);
};
export default CompanyEmailForm;
