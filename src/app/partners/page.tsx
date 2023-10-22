import React from "react";
import Image from "next/image";
import data from "../partners.json";

const partners = () => {
	const partners = data.partners;
	return (
		<div className="h-screen  pt-44 gap-20 flex flex-col">
			<div className="z-50 relative flex flex-col gap-20">
				<div className="text-center">
					<h1 className="text-secondary">Seven Seed Perks Program</h1>
					<p className="text-gray-500">
						Significant discounts for our members. Always relevant.
					</p>
				</div>

				<div className="flex justify-center text-center">
					<p>
						50+ partners in 30 different categories <br /> • Banking •
						Insurances • Hiring • Payments • Websites • Travel & Mobility{" "}
						<br />
						Cloud • Marketing • Taxes & Bookkeeping • Consulting • HR •
						Compliance • E-commerce • Tooling
					</p>
				</div>
				<div className="grid grid-cols-6 justify-center items-center justify-items-center gap-x-16  m-auto w-8/12 ">
					{partners.map((partner) => (
						<Image
							src={`/images/${partner.image}`}
							alt=""
							width="150"
							height="150"
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default partners;
