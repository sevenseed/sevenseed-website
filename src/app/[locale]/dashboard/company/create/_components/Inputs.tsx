"use client";
import {
	type ChangeEvent,
	type PropsWithChildren,
	useCallback,
	useContext,
} from "react";
import { NewCompanyContext } from "@/contexts/NewCompanyContext";
import {
	type FormInputProps,
	type MultilineInputProps,
	type RadioInputProps,
} from "./types";
import { validateChildrenAsComponent } from "@/api/validate";
import clsx from "clsx";

import styles from "../../company.module.css";

// TODO: revamp as HOCs

const RequiredMark = () => (
	<span className={styles.required} title="Please fill out this field">
		required
	</span>
);

export function RadioOption({
	id,
	label,
	value,
	required = false,
}: {
	id: string;
	label: string;
	value: string;
	required?: boolean;
}) {
	const { companyData, setCompanyData } = useContext(NewCompanyContext);

	const onChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			setCompanyData({ ...companyData, [id]: event.currentTarget.value });
		},
		[id, companyData, setCompanyData],
	);

	return (
		<label className={styles.inputRadio}>
			<input
				type="radio"
				id={id + value.replaceAll(" ", "")}
				name={id}
				value={value}
				onChange={onChange}
				required={required}
				defaultChecked={value === companyData[id]}
			/>
			<span>{label}</span>
		</label>
	);
}

export function SimpleFormInput({
	id,
	label,
	description = "",
	placeholder = "",
	type = "text",
	required = false,
	disabled = false,
	className = "",
	value = undefined,
}: FormInputProps) {
	const { companyData, setCompanyData } = useContext(NewCompanyContext);

	// * nullish coalescence in order to force empty values to display empty
	// * instead of falling back on an available `companyData[id]` value
	const inputValue = value ?? companyData[id];

	const onChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			setCompanyData({ ...companyData, [id]: event.currentTarget.value });
		},
		[id, companyData, setCompanyData],
	);

	return (
		<fieldset className={styles.fieldset} disabled={disabled}>
			<label className={styles.label}>
				<span className={styles.labelText}>
					{label}
					{required && <RequiredMark />}
				</span>
				{description ? (
					<span className={styles.description}>{description}</span>
				) : (
					""
				)}

				<input
					id={id}
					name={id}
					type={type}
					required={required}
					placeholder={placeholder}
					value={inputValue}
					onChange={onChange}
					className={clsx(styles.inputText, className)}
				/>
			</label>
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
		[id, companyData, setCompanyData],
	);

	return (
		<fieldset className={styles.fieldset}>
			<label className={styles.label}>
				<span className={styles.labelText}>
					{label}
					{required ? <RequiredMark /> : ""}
				</span>
				{description ? (
					<span className={styles.description}>{description}</span>
				) : (
					""
				)}
				<textarea
					id={id}
					name={id}
					required={required}
					placeholder={placeholder}
					className={styles.inputText}
					value={value}
					onChange={onChange}
					rows={rows}
					cols={cols}
				/>
			</label>
		</fieldset>
	);
}

export function RadioFormInput({
	// id,
	label = "",
	required = false,
	children,
}: RadioInputProps & PropsWithChildren) {
	if (!validateChildrenAsComponent(children, RadioOption)) {
		throw new Error("Children of a <RadioFormInput /> are not all <RadioOption />");
	}

	return (
		<fieldset className={styles.fieldset}>
			{label ? (
				<span className={styles.labelText}>
					{label}
					{required ? <RequiredMark /> : ""}
				</span>
			) : (
				""
			)}
			<div className={styles.inputRadioContainer}>{children}</div>
		</fieldset>
	);
}
