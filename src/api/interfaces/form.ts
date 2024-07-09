export interface Form {
	order: number;
	id: string;
	label: string;
}

export interface FormPage {
	step: Form["id"];
	label: string;
}
