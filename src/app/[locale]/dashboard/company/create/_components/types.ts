import { type HTMLProps } from "react";

type HTMLInputProps = HTMLProps<HTMLInputElement>;
type HTMLTextareaProps = HTMLProps<HTMLTextAreaElement>;
type CompanyFormInputProps = {
	// makes `id` a mandatory member
	id: string;
	description?: string;
};

type InputProps = HTMLInputProps & CompanyFormInputProps;
type MultilineProps = HTMLTextareaProps & CompanyFormInputProps;

export type FormInputProps = InputProps;

export type MultilineInputProps = MultilineProps;

export type RadioInputProps = InputProps;
