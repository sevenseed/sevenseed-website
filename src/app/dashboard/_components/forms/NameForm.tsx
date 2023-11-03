import { useContext } from "react";
import { CompanyDataContext } from "../CustomerJourney";
import styles from "../CustomerJourney.module.css";

const CompanyNameForm = () => {
	const { companyData, setCompanyData } = useContext(CompanyDataContext);
	return (
		<>
			<h1 className={styles.header}>Company Name</h1>
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
						placeholder="Company Name"
						onChange={(e) =>
							setCompanyData({ ...companyData, name: e.target.value })
						}
						value={companyData.name}
					/>
				</label>
			</fieldset>
		</>
	);
};
export default CompanyNameForm;
