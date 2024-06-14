import Image from "next/image";

export default function Loader({ size = 16, isLoaderVisible = true, themed = false }) {
	return (
		<>
			{/* we use the class `invisible` rather than the prop `hidden` because `hidden` removes the element completely, breaking up the layout of the button */}
			<Image
				className={isLoaderVisible ? "" : "invisible"}
				src={themed ? "/images/svg/loading-spinner-ring-themed.svg" : "/images/svg/loading-spinner-ring.svg"}
				width={size}
				height={size}
				alt="Loading..."
			/>
		</>
	);
}
