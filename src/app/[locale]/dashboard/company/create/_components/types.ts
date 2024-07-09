import type { HTMLProps } from "react";
import type { CompanyData } from "@/api/interfaces/company";
import type { CompanyOwner } from "@/api/interfaces/owners";

export type IDKey = Exclude<keyof CompanyData, "id">;
export type OwnerIDKey = Exclude<keyof CompanyOwner, "id">;

export type HTMLInputProps = HTMLProps<HTMLInputElement>;
export type HTMLTextareaProps = HTMLProps<HTMLTextAreaElement>;

type CompanyFormInputProps = {
	// * makes `id` a mandatory member
	id: IDKey;
	description?: string;
};
export type OwnersFormInputProps = {
	// * makes `id` a mandatory member
	id: OwnerIDKey;
	description?: string;
};

type InputProps = HTMLInputProps & CompanyFormInputProps;
type MultilineProps = HTMLTextareaProps & CompanyFormInputProps;

export type FormInputProps = InputProps;

export type MultilineInputProps = MultilineProps;

export type RadioInputProps = InputProps;
