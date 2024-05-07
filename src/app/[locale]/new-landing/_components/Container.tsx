import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

const styles = {
	xs: "mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-2",
	sm: "mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-8 lg:max-w-3xl",
	md: "mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-8 lg:max-w-4xl",
	lg: "mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-8 lg:max-w-5xl",
};

export function Container({
	size = "sm",
	className,
	...props
}: ComponentPropsWithoutRef<"div"> & { size?: keyof typeof styles }) {
	return <div className={clsx(styles[size], className)} {...props} />;
}
