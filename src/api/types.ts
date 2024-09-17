export type Nullable<T> = T | null;
export type NullableString = Nullable<string>;

export type KeyArray<T> = Array<keyof T>;

export interface GenericObject extends Object {
	[key: string | number]: any;
}

export type Email = `${string}@${string}.${string}` | "";
export type CivilStatus = "Single" | "Married" | "Legal Cohabitation";
export type AddressType = "HomeAddress" | "CreateNewAddress" | "ExistingAddress";
