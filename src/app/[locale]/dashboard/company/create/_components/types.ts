import { type HTMLProps } from "react";

type HTMLInputProps = HTMLProps<HTMLInputElement>;
type HTMLTextareaProps = HTMLProps<HTMLTextAreaElement>;
type CompanyFormInputProps = {
	id: string;
	description?: string;
};

type InputProps = HTMLInputProps & CompanyFormInputProps;
type MultilineProps = HTMLTextareaProps & CompanyFormInputProps;

export type FormInputProps = InputProps;

export type MultilineInputProps = MultilineProps;

export type RadioInputProps = InputProps & {
	options: string[];
};
