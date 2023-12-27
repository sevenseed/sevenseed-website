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
						placeholder="Acme Inc."
						onChange={(e) =>
							setCompanyData({
								...companyData,
								companyName: e.target.value,
							})
						}
						value={companyData.companyName}
						required
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
						placeholder="Acme Inc is a globally diversified corporation setting new standards of excellence in various sectors."
						onChange={(e) =>
							setCompanyData({
								...companyData,
								companyDescription: e.target.value,
							})
						}
						value={companyData.companyDescription}
						required
					/>
				</label>
			</fieldset>

			<h2 className={styles.header2}>Business Address</h2>
			<p className={styles.description}>
				What will the address of the business be?
			</p>
			<fieldset className={styles.fields}>
				<label htmlFor="homeAddress">
					<input
						type="radio"
						id="homeAddress"
						onChange={(e) => {
							setCompanyData({
								...companyData,
								companyAddress: {
									type: "HomeAddress",
								},
							});
						}}
						checked={companyData.companyAddress.type === "HomeAddress"}
					/>
					<span className="text-base font-medium text-gray-700 ml-2">
						Use my home address
					</span>
				</label>
				<label htmlFor="createNewAddress">
					<input
						type="radio"
						id="createNewAddress"
						onChange={(e) => {
							setCompanyData({
								...companyData,
								companyAddress: {
									type: "CreateNewAddress",
								},
							});
						}}
						checked={companyData.companyAddress.type === "CreateNewAddress"}
					/>
					<span className="text-base font-medium text-gray-700 ml-2">
						Get me an address
					</span>
				</label>

				<label htmlFor="existingAddress">
					<input
						type="radio"
						id="existingAddress"
						onChange={(e) => {
							setCompanyData({
								...companyData,
								companyAddress: {
									type: "ExistingAddress",
									location: "",
								},
							});
						}}
						checked={companyData.companyAddress.type === "ExistingAddress"}
					/>
					<span className="text-base font-medium text-gray-700 ml-2">
						Use an existing address
					</span>
				</label>
			</fieldset>
			{companyData.companyAddress.type !== "CreateNewAddress" ? (
				<fieldset className={styles.fields}>
					<label htmlFor="companyAddress">
						<input
							type="text"
							id="companyAddress"
							name="companyAddress"
							placeholder="Champ de Mars, 5 Av. Anatole France, 75007 Paris, France"
							disabled={companyData.companyAddress.type === "HomeAddress"}
							onChange={
								companyData.companyAddress.type === "ExistingAddress"
									? (e) =>
											setCompanyData({
												...companyData,
												companyAddress: {
													type: "ExistingAddress",
													location: e.target.value,
												},
											})
									: undefined
							}
							value={
								companyData.companyAddress.type === "HomeAddress"
									? companyData.contactAddress
									: companyData.companyAddress.location
							}
							required
						/>
					</label>
				</fieldset>
			) : null}

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
						placeholder="+33123123123"
						onChange={(e) =>
							setCompanyData({
								...companyData,
								companyPhoneNumber: e.target.value,
							})
						}
						value={companyData.companyPhoneNumber}
						required
					/>
				</label>
			</fieldset>
		</>
	);
};
export default CompanyInfoForm;
