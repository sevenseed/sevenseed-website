import Image from "next/image";
import React from "react";
import "../shapes.css";

const Easier = () => {
	return (
		<div
			className="w-full flex justify-center content-center items-center  h-screen gap-10 relative"
			style={{ backgroundColor: "#fff" }}
		>
			<div className="flex flex-col text-center gap-10">
				<h1 className="text-3xl">
					Seven Seed makes creating a Belgian company <br /> simpler, easier
					and cheaper.
				</h1>
				<p className="text-slate-400">
					The process is simplified, streamlined, entirely managed online,{" "}
					<br /> and automated from start to finish.​​ <br /> We make it easy
					for everyone, even non-Belgian residents.​
				</p>
				<strong>
					<h6>
						Our long-term mission: <br /> Reduce the cost and time by 90%.​
					</h6>
				</strong>
			</div>
			<div className="circle"></div>
			<div className="circle2"></div>
			<div className="circle3"></div>
			<div className="circle4"></div>
			<div className="square"></div>
			<div className="square2"></div>
			<div className="square3"></div>
			<div className="square4"></div>
			<div className="triangle"></div>
			<div className="triangle2"></div>
			<div className="triangle3"></div>
			<div className="triangle4"></div>
		</div>
	);
};

export default Easier;
