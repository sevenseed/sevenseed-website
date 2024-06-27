import type { UUID } from "crypto";
import type { CompanyOwner } from "@/api/interfaces";

export type OwnersAction =
	| {
			type: "ADD";
	  }
	| { type: "REMOVE"; id: UUID }
	| { type: "UPDATE"; obj: CompanyOwner };

function newOwnerObject() {
	return {
		id: crypto.randomUUID() as UUID,
		name: "",
		email: "",
		civilStatus: "Single",
		phoneNumber: "",
	} as CompanyOwner;
}

export const defaultOwners: CompanyOwner[] = [newOwnerObject()];

export function ownersReducer(state: CompanyOwner[], action: OwnersAction) {
	switch (action.type) {
		case "ADD":
			return [...state, newOwnerObject()];
		case "REMOVE":
			return state.filter((owner) => owner.id !== action.id);
		case "UPDATE":
			const index = state.findIndex((owner) => owner.id === action.obj.id);
			const originalObject = state[index];
			return state.toSpliced(index, 1, Object.assign(action.obj, originalObject));

		default:
			return state;
	}
}
