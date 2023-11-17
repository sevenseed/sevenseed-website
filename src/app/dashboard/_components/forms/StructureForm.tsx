const CompanyStructureForm = () => (
	<>
		<h1 className="mt-6 font-display text-5xl font-extrabold text-slate-900">
			Company Structure
		</h1>
		<p className="mt-4 text-lg tracking-tight text-slate-700">
			What type of entity do you want to create?
		</p>
		<fieldset className="mt-6">
			<label htmlFor="independent" className="flex items-center">
				<input
					type="radio"
					id="independent"
					name="structure"
					value="independent"
				/>
				<span className="block text-base font-medium text-gray-700 ml-2">
					Independent Entity
				</span>
			</label>
			<label htmlFor="srl" className="flex items-center mt-4">
				<input type="radio" id="srl" name="structure" value="srl" />
				<span className="block text-base font-medium text-gray-700 ml-2">
					SRL
				</span>
			</label>

			<label htmlFor="other" className="flex items-center mt-4">
				<input type="radio" id="other" name="structure" value="other" />
				<span className="block text-base font-medium text-gray-700 ml-2">
					Other
				</span>
				<input type="text" className="ml-4" placeholder="Please specify" />
			</label>
		</fieldset>
	</>
);

export default CompanyStructureForm;
