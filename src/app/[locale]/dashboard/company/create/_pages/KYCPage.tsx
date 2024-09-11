import { useCallback, useContext } from "react";
import { NewCompanyContext } from "@/contexts/NewCompanyContext";
import FormPage from "../_components/FormPage";
import OwnerForm from "../_components/OwnerForm";

import styles from "./pages.module.css";

const AddUserIcon = () => (
	<svg
		height="21"
		viewBox="0 0 21 21"
		width="21"
		xmlns="http://www.w3.org/2000/svg"
		className="w-full h-full fill-current"
	>
		<g
			fill="none"
			fillRule="evenodd"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			transform="translate(3 2)"
		>
			<path d="m7.5.5c1.65685425 0 3 1.34314575 3 3v2c0 1.65685425-1.34314575 3-3 3s-3-1.34314575-3-3v-2c0-1.65685425 1.34314575-3 3-3z" />
			<path d="m14.5 2.5v4" />
			<path d="m16.5 4.5h-4" />
			<path d="m14.5 14.5v-.7281753c0-3.1864098-3.6862915-5.2718247-7-5.2718247s-7 2.0854149-7 5.2718247v.7281753c0 .5522847.44771525 1 1 1h12c.5522847 0 1-.4477153 1-1z" />
		</g>
	</svg>
);

export default function KYCPage() {
	const { owners, dispatch } = useContext(NewCompanyContext);

	const addNewOwner = useCallback(() => dispatch({ type: "ADD" }), [dispatch]);

	return (
		<div className={styles.pageWrapper}>
			<FormPage step="kyc" label="Founders">
				{owners.map((owner) => (
					<OwnerForm key={owner.id} owner={owner} />
				))}
				<div
					className="flex items-center gap-x-4 p-4 border rounded bg-slate-50 hover:bg-blue-50 cursor-pointer select-none"
					onClick={addNewOwner}
				>
					<span className="h-10 text-blue-600">
						<AddUserIcon />
					</span>
					<div className="w-full">
						<span className="font-semibold text-blue-600 text-lg">
							Add a new company owner
						</span>
					</div>
				</div>
			</FormPage>
		</div>
	);
}
