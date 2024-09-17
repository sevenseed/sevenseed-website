import { CompanyOwner } from "@/api/interfaces/owners";

export const getOwnerObjectById = (owners: CompanyOwner[], id: CompanyOwner["id"]) => {
	const owner = owners.find((owner) => owner.id === id);
	if (!owner) throw new Error("Owner not found when searching by ID!");
	return owner;
};
