import { ChangeEvent, useCallback, useContext } from "react";
import clsx from "clsx";
import { NewCompanyContext } from "@/contexts/NewCompanyContext";
import FormPage from "../_components/FormPage";
import type { CompanyOwner } from "@/api/interfaces/owners";

import styles from "./pages.module.css";

const overallShares = 1_000_000;

export default function OwnershipPage() {
	const { owners, dispatch } = useContext(NewCompanyContext);

	const currentShareValues = owners.map((owner) => owner.shares);
	const currentShares = currentShareValues.reduce((accumulator, shares) => {
		accumulator += shares;
		return accumulator;
	}, 0);

	const sharesPercentage = (currentShares / overallShares) * 100;
	const isExactlyOneHundredPercent = sharesPercentage === 100;
	const isOverOneHundredPercent = sharesPercentage > 100;

	const onChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>, owner: CompanyOwner) => {
			dispatch({
				type: "UPDATE",
				obj: { ...owner, shares: Number.parseInt(event.currentTarget.value) },
			});
		},
		[dispatch],
	);

	if (!owners.length)
		return (
			<div className={styles.pageWrapper}>
				<FormPage step="shares" label="Ownership">
					<div className="flex flex-col gap-y-2 w-full text-balance text-slate-600">
						<span className="text-xl">
							Here you will be able to adjust the amount of shares per
							owner
						</span>
						<span>Add owner information to begin</span>
					</div>
				</FormPage>
			</div>
		);

	return (
		<div className={styles.pageWrapper}>
			<FormPage step="shares" label="Ownership">
				<div className="flex h-10 bg-slate-50 border rounded overflow-hidden">
					{owners.map(({ name, shares, color }) => (
						<div
							key={name}
							className="h-full"
							style={{
								width: (shares / overallShares) * 100 + "%",
								backgroundColor: color,
							}}
						/>
					))}
				</div>
				<div className="flex flex-col gap-y-2">
					{owners.map((owner) => (
						<label key={owner.id} className="flex justify-between">
							<span className="font-semibold">
								{owner.name || "Unnamed owner"}
							</span>
							<input
								type="number"
								placeholder="10000"
								className="min-w-[8ch] max-w-[14ch] pl-1 border rounded overflow-hidden"
								onChange={(event) => onChange(event, owner)}
							/>
						</label>
					))}
				</div>
				<div className="flex flex-col items-end mt-2">
					<span>Shares coverage:</span>
					<span
						className={clsx(
							isExactlyOneHundredPercent && "text-green-500",
							isOverOneHundredPercent && "text-red-300",
						)}
					>
						{sharesPercentage < 0.01
							? "<0.01"
							: Number.parseFloat(sharesPercentage.toFixed(2))}
						%
					</span>
					{isOverOneHundredPercent && (
						<span>
							Collective shares of owners exceed total company shares,
							please adjust individual owner shares
						</span>
					)}
				</div>
			</FormPage>
		</div>
	);
}
