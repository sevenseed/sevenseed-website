"use client";
import { type ChangeEvent, useCallback, useContext } from "react";
import { NewCompanyContext } from "@/contexts/NewCompanyContext";
import {
	type FormInputProps,
	type MultilineInputProps,
	type RadioInputProps,
} from "./types";
import clsx from "clsx";

const RequiredMark = () => (
	<span className="font-normal text-gray-400 ml-3" title="This field must be filled">
		required
	</span>
);

export function SimpleFormInput({
	id,
	label,
	description = "",
	placeholder = "",
	type = "text",
	required = false,
	className = "",
}: FormInputProps) {
	const { companyData, setCompanyData } = useContext(NewCompanyContext);

	const value = companyData[id];

	const onChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			setCompanyData({ ...companyData, [id]: event.currentTarget.value });
		},
		[companyData],
	);

	return (
		<fieldset className="flex flex-col w-full space-y-1">
			<label htmlFor={id} className="flex flex-col">
				<span className="font-semibold">
					{label}
					{required ? <RequiredMark /> : ""}
				</span>
				{description ? <span className="text-sm">{description}</span> : ""}
			</label>
			<input
				id={id}
				name={id}
				type={type}
				required={required}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className={clsx(
					"rounded-md border p-1 px-2 focus-visible:outline-2 focus-visible:outline-primary-300",
					className,
				)}
			/>
		</fieldset>
	);
}

export function MultilineFormInput({
	id,
	label,
	description = "",
	placeholder = "",
	rows = 2,
	cols = 1,
	required = false,
}: MultilineInputProps) {
	const { companyData, setCompanyData } = useContext(NewCompanyContext);

	const value = companyData[id];

	const onChange = useCallback(
		(event: ChangeEvent<HTMLTextAreaElement>) => {
			setCompanyData({ ...companyData, [id]: event.currentTarget.value });
		},
		[companyData],
	);

	return (
		<fieldset className="flex flex-col w-full space-y-1">
			<label htmlFor={id} className="flex flex-col">
				<span className="font-semibold">
					{label}
					{required ? <RequiredMark /> : ""}
				</span>
				{description ? <span className="text-sm">{description}</span> : ""}
			</label>
			<textarea
				id={id}
				name={id}
				required={required}
				placeholder={placeholder}
				className="rounded-md border p-1 px-2 focus-visible:outline-2 focus-visible:outline-primary-300"
				value={value}
				onChange={onChange}
				rows={rows}
				cols={cols}
			/>
		</fieldset>
	);
}

export function RadioFormInput({
	id,
	label,
	options,
	required = false,
}: RadioInputProps) {
	const { companyData, setCompanyData } = useContext(NewCompanyContext);

	const onChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			setCompanyData({ ...companyData, [id]: event.currentTarget.value });
		},
		[companyData],
	);

	return (
		<fieldset className="flex flex-col w-full space-y-1">
			<span className="font-semibold pl-1">
				{label}
				{required ? <RequiredMark /> : ""}
			</span>
			<div className="pl-1 space-y-1">
				{options.map((option, index) => {
					const optionBasedID = `${id}--${option.replaceAll(" ", "")}`;

					return (
						<div key={option}>
							<input
								id={optionBasedID}
								type="radio"
								name={id}
								value={option}
								defaultChecked={index === 0}
								onChange={onChange}
								required={required}
							/>
							<label htmlFor={optionBasedID} className="pl-1">
								{option}
							</label>
						</div>
					);
				})}
			</div>
		</fieldset>
	);
}
