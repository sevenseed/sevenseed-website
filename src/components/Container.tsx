import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

const styles = {
	xs: "px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-2",
	sm: "px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12",
	md: "px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-5xl lg:px-8",
	lg: "px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8",
};

export function Container({
	size = "sm",
	className,
	...props
}: ComponentPropsWithoutRef<"div"> & { size?: keyof typeof styles }) {
	return <div className={clsx(styles[size], className)} {...props} />;
}
