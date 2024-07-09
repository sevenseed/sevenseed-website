import { useContext, useState } from "react";
import clsx from "clsx";
import { Button } from "@/components/Button";
import { NewCompanyContext } from "@/contexts/NewCompanyContext";
import { OwnersSimpleFormInput, RadioFormInput, OwnersRadioOption } from "./Inputs";
import type { CompanyOwner } from "@/api/interfaces/owners";

const UserIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 21 21"
		width="21"
		height="21"
		className="w-full h-full fill-current"
	>
		<path
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.33}
			d="M10.5 2.5a3 3 0 0 1 3 3v2a3 3 0 1 1-6 0v-2a3 3 0 0 1 3-3zm7 14v-.73c0-3.18-3.69-5.27-7-5.27s-7 2.09-7 5.27v.73a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"
		/>
	</svg>
);

export default function OwnerForm({ owner }: { owner: CompanyOwner }) {
	const { owners, dispatch } = useContext(NewCompanyContext);
	const [collapsed, setCollapsed] = useState(false);

	return (
		<div
			className={clsx([
				"flex flex-col gap-y-4 bg-slate-50 border rounded p-4",
				collapsed && "cursor-pointer hover:bg-slate-100",
			])}
			onClick={() => collapsed && setCollapsed(false)}
		>
			{collapsed ? (
				<div className="flex justify-between items-center">
					<span className="h-10">
						<UserIcon />
					</span>
					<div className="w-full text-center">
						<span className="text-xl font-semibold">
							{owner.name || "Unnamed owner"}
						</span>
					</div>
					{owners.length > 1 && (
						<Button
							variant="outline"
							color="red"
							className="text-red-900 hover:text-red-800"
							onClick={() => dispatch({ type: "REMOVE", id: owner.id })}
						>
							Remove
						</Button>
					)}
				</div>
			) : (
				<>
					<div className="flex flex-col gap-y-2">
						<div className="flex justify-between">
							<span className="text-xl font-semibold">
								Personal details
							</span>
							{owners.length > 1 && (
								<Button
									variant="outline"
									color="red"
									className="text-red-900 hover:text-red-800"
									onClick={() =>
										dispatch({ type: "REMOVE", id: owner.id })
									}
								>
									Remove
								</Button>
							)}
						</div>
						<OwnersSimpleFormInput
							owner={owner}
							id="name"
							label="Name"
							placeholder="John Doe"
							required
						/>
						<OwnersSimpleFormInput
							owner={owner}
							id="email"
							label="Email"
							type="email"
							placeholder="hello@world.com"
							required
						/>
						<RadioFormInput id="civilStatus" label="Civil Status">
							<OwnersRadioOption
								owner={owner}
								id="civilStatus"
								label="Single"
								value="Single"
								required
							/>
							<OwnersRadioOption
								owner={owner}
								id="civilStatus"
								label="Married"
								value="Married"
								required
							/>
							<OwnersRadioOption
								owner={owner}
								id="civilStatus"
								label="Legal Cohabitation"
								value="LegalCohabitation"
								required
							/>
						</RadioFormInput>
					</div>

					<div className="flex flex-col gap-y-2">
						<span className="text-xl font-semibold">Personal address</span>
						<OwnersSimpleFormInput
							owner={owner}
							id="addressLine1"
							label="Address line 1"
							placeholder="Rue de la Loi, 123"
							required
						/>
						<OwnersSimpleFormInput
							owner={owner}
							id="addressLine2"
							label="Address line 2"
							placeholder="Apt 123"
						/>
						<div className="grid sm:grid-cols-[1fr_3fr] gap-x-2 gap-y-1 flex-wrap sm:flex-nowrap">
							<OwnersSimpleFormInput
								owner={owner}
								id="postalCode"
								label="Postal code"
								placeholder="1040"
								className="sm:max-w-[10ch]"
							/>
							<OwnersSimpleFormInput
								owner={owner}
								id="city"
								label="City"
								placeholder="Brussels"
								required
							/>
						</div>
						<OwnersSimpleFormInput
							owner={owner}
							id="region"
							label="State / Province / Region"
							placeholder="Brussels-Capital Region"
						/>
						<OwnersSimpleFormInput
							owner={owner}
							id="country"
							label="Country"
							placeholder="Belgium"
							required
						/>
					</div>

					<div className="flex justify-end">
						<Button
							type="button"
							color="blue"
							onClick={() => setCollapsed(true)}
						>
							Save
						</Button>
					</div>
				</>
			)}
		</div>
	);
}
