import { CompanyDataFormProps } from "../CustomerJourney";
import styles from "../CustomerJourney.module.css";

const SignupForm = ({ companyData, setCompanyData }: CompanyDataFormProps) => {
	return (
		<>
			<h1 className={styles.header}>Account Details</h1>
			<h2 className={styles.header2}>Login Email</h2>
			<p className={styles.description}>Must be a valid email</p>
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
						required
					/>
				</label>
			</fieldset>

			<h2 className={styles.header2}>Password</h2>
			<fieldset className={styles.fields}>
				<label htmlFor="password">
					<input
						id="password"
						type="password"
						name="password"
						placeholder="••••••••"
						onChange={(e) =>
							setCompanyData({
								...companyData,
								password: e.target.value,
							})
						}
						value={companyData.password}
						required
					/>
				</label>
			</fieldset>
		</>
	);
};
export default SignupForm;
