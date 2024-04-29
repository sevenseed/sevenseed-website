import { type ReactNode, type ElementType, Children, isValidElement } from "react";

export const validateChildrenAsComponent = (
	children: ReactNode | ReactNode[],
	type: ElementType,
) => {
	return Children.toArray(children).every((child) => {
		return isValidElement(child) && child.type === type;
	});
};
