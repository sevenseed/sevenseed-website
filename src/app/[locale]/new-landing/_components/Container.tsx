import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

const styles = {
	xs: "px-4 sm:px-6 md:max-w-2xl",
	sm: "px-4 sm:px-6 md:max-w-2xl lg:px-8 lg:max-w-3xl",
	md: "px-4 sm:px-6 md:max-w-2xl lg:px-8 lg:max-w-4xl",
	lg: "px-4 sm:px-6 md:max-w-2xl lg:px-8 lg:max-w-5xl",
};

export function Container({
	size = "sm",
	className,
	...props
}: ComponentPropsWithoutRef<"div"> & { size?: keyof typeof styles }) {
	return <div className={clsx(styles[size], className)} {...props} />;
}
