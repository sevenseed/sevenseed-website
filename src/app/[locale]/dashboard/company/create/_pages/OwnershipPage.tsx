import { ChangeEvent, useCallback, useContext, useMemo } from "react";
import clsx from "clsx";
import { getRandomColor } from "@/utilities";
import { NewCompanyContext } from "@/contexts/NewCompanyContext";
import FormPage from "../_components/FormPage";
import type { CompanyOwner } from "@/api/interfaces";

import styles from "./pages.module.css";

const overallShares = 1_000_000;

export default function OwnershipPage() {
	const { owners, dispatch } = useContext(NewCompanyContext);

	const currentShares = owners.map((owner) => owner.shares);
	const currentSharesTotal = currentShares.reduce((accumulator, shares) => {
		accumulator += shares;
		return accumulator;
	}, 0);

	const sharesDecimal = (currentSharesTotal / overallShares) * 100;
	const isExactlyOneHundredPercent = sharesDecimal === 100;
	const isOverOneHundredPercent = sharesDecimal > 100;

	const displayReadyOwners = useMemo(
		() =>
			owners.map((owner) => {
				return {
					name: owner.name,
					shares: owner.shares,
					color: owner.color,
				};
			}),
		[owners],
	);

	const onChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>, owner: CompanyOwner) => {
			dispatch({
				type: "UPDATE",
				obj: { ...owner, shares: Number.parseInt(event.currentTarget.value) },
			});
		},
		[dispatch],
	);

	return (
		<div className={styles.pageWrapper}>
			<FormPage step="shares" label="Ownership">
				<div className="flex h-10 bg-slate-50 border rounded overflow-hidden">
					{displayReadyOwners.map(({ name, shares, color }) => (
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
								className="min-w-[8ch] max-w-[14ch] pl-1 border rounded overflow-hidden"
								onChange={(event) => onChange(event, owner)}
							/>
						</label>
					))}
				</div>
				<div className="flex flex-col items-end mt-2">
					<span>Shares division:</span>
					<span
						className={clsx(
							isOverOneHundredPercent && "text-red-300",
							isExactlyOneHundredPercent && "text-green-500",
						)}
					>
						{sharesDecimal < 0.01
							? "<0.01"
							: Number.parseFloat(
									(
										(currentSharesTotal / overallShares) *
										100
									).toFixed(2),
								)}
						%
					</span>
					{isOverOneHundredPercent && (
						<span>
							Collective shares of owners exceed company shares, please
							adjust individual owner shares
						</span>
					)}
				</div>
			</FormPage>
		</div>
	);
}
