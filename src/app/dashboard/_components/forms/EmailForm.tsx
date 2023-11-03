import { useContext } from "react";
import { CompanyDataContext } from "../CustomerJourney";
import styles from "../CustomerJourney.module.css";

const CompanyEmailForm = () => {
	const { companyData, setCompanyData } = useContext(CompanyDataContext);
	return (
		<>
			<h1 className={styles.header}>Email</h1>
			<p className={styles.description}>How would you like to be reached?</p>
			<fieldset className={styles.fields}>
				<label htmlFor="email">
					<input
						type="text"
						id="email"
						name="email"
						placeholder="email"
						onChange={(e) =>
							setCompanyData({ ...companyData, email: e.target.value })
						}
						value={companyData.email}
					/>
				</label>
			</fieldset>
		</>
	);
};
export default CompanyEmailForm;
