import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

const styles = {
	xs: "md:max-w-2xl",
	sm: "md:max-w-2xl lg:max-w-3xl",
	md: "md:max-w-2xl lg:max-w-4xl",
	lg: "md:max-w-2xl lg:max-w-5xl",
};

export default function Container({
	size = "sm",
	className,
	...props
}: ComponentPropsWithoutRef<"div"> & { size?: keyof typeof styles }) {
	return <div className={clsx(styles[size], className)} {...props} />;
}
