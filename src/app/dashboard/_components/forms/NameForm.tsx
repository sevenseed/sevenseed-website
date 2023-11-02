const CompanyNameForm = () => (
	<>
		<h1 className="mt-6 font-display text-5xl font-extrabold text-slate-900">
			Company Name
		</h1>
		<p className="mt-4 text-lg tracking-tight text-slate-700">Name of company</p>
		<fieldset className="mt-6">
			<label htmlFor="companyName" className="flex items-center">
				<input
					type="text"
					id="companyName"
					name="companyName"
					placeholder="Company Name"
				/>
			</label>
		</fieldset>
	</>
);

export default CompanyNameForm;
