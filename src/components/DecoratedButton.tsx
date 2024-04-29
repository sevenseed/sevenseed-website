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
};

export default function DecoratedButton({
	children,
	theme,
	isLoaderVisible,
	...props
}: StripeButtonProps) {
	return (
		<form className="w-full rounded-lg text-center text-sm overflow-hidden">
			<section>
				<button
					className={clsx(
						"flex items-center justify-between w-full duration-200 py-2 px-4 tracking-wide",
						themes[theme],
					)}
					disabled={isLoaderVisible}
					role="link"
					{...props}
				>
					{/* filler div to align elements inside this flex container */}
					<div />
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
			</section>
		</form>
	);
}
