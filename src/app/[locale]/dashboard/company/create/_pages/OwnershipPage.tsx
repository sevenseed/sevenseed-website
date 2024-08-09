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
					<div className="w-full flex flex-col gap-y-2 text-balance text-slate-600">
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
				<div
					className={clsx(
						"h-10 flex border rounded bg-slate-50 overflow-hidden",
						isOverOneHundredPercent && "border-4 border-red-300",
					)}
				>
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
							<span className="inline-flex items-baseline gap-x-1 font-semibold">
								<span
									className="h-3 inline-block rounded w-3"
									style={{ backgroundColor: owner.color }}
								/>{" "}
								{owner.name || "Unnamed owner"}
							</span>
							<input
								type="number"
								placeholder="10000"
								className="min-w-[8ch] max-w-[14ch] pl-1 border rounded overflow-hidden"
								value={owner.shares}
								onChange={(event) => onChange(event, owner)}
							/>
						</label>
					))}
				</div>
				<div className="flex flex-col items-end mt-2">
					<span>Shares coverage:</span>
					<span className="flex gap-x-4">
						<span>
							{currentShares} / {overallShares}
						</span>
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
