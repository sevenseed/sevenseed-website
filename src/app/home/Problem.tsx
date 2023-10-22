import Image from "next/image";
import React from "react";

const Problem = () => {
	return (
		<div
			className="w-full h-screen m-auto flex flex-col justify-center items-center p-20"
			style={{ backgroundColor: "#EFF5FF" }}
		>
			<h1 className="text-secondary">The Problem</h1>
			<h5 className="text-gray-400 m-5">
				Creating a company in Belgium is paintful. <br /> The country is far
				behind most of Europe
			</h5>
			<Image alt="" src="/images/graph.png" width="700" height="700" />
		</div>
	);
};

export default Problem;
