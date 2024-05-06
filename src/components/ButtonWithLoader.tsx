import clsx from "clsx";
import { type ButtonHTMLAttributes, type PropsWithChildren } from "react";
import { type GenericObject } from "@/api/interfaces";
import Image from "next/image";

type StripeButtonProps = {
	theme: string;
	isLoaderVisible: boolean;
} & PropsWithChildren &
	ButtonHTMLAttributes<HTMLButtonElement>;

const themes: GenericObject = {
	checkout: "bg-[#556cd6] hover:bg-[#788adf] text-white",
	verification: "bg-[#9155d6] hover:bg-[#9978df] text-white",
	signIn: "bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-blue-600",
	signUp: "bg-green-600 text-white hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 active:bg-green-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-green-600",
};

// TODO: refactor with `<Button />`
export default function ButtonWithLoader({
	children,
	theme,
	isLoaderVisible,
	...props
}: StripeButtonProps) {
	return (
		<button
			className={clsx(
				"flex items-center justify-between w-full py-4 md:py-2 px-4 rounded-lg text-center tracking-wide duration-200 select-none",
				themes[theme],
			)}
			disabled={isLoaderVisible}
			role="link"
			{...props}
		>
			{/* filler div to align elements inside this flex container */}
			<div className="w-4" />
			<span>{children}</span>
			{/* we use the class `invisible` rather than the prop `hidden` because `hidden` removes the element completely, breaking up the layout of the button */}
			<Image
				className={isLoaderVisible ? "" : "invisible"}
				src="/images/svg/loading-spinner-ring.svg"
				width={16}
				height={16}
				alt="Loading..."
			/>
		</button>
	);
}
