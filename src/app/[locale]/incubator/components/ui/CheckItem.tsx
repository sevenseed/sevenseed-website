import type React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

interface CheckItemProps {
	title?: string;
	children: React.ReactNode;
}

export default function CheckItem({ title, children }: CheckItemProps) {
	return (
		<div className="flex items-start">
			<div className="bg-blue-100 rounded-full p-1 mr-4 shrink-0 mt-1">
				<CheckIcon className="h-5 w-5 text-blue-600" />
			</div>
			<div>
				{title && <span className="font-medium text-gray-900">{title}</span>}{" "}
				{children}
			</div>
		</div>
	);
}
