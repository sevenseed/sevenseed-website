import React from "react";
import { FaBeer, FaWpforms, FaPenNib } from "react-icons/fa";
import { MdPermIdentity } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { RiGovernmentFill } from "react-icons/ri";
import { LuPackageOpen } from "react-icons/lu";

const features = [
	{
		name: "Step 1",
		description: `Customer fills in a form with basic details about the company.
       An AI chatbot asks follow-up questions and gathers info.`,
		icon: FaWpforms,
	},
	{
		name: "Step 2",
		description: `We verify the customer's identity directly from their phone (KYC).`,
		icon: MdPermIdentity,
	},
	{
		name: "Step 3",
		description: `Financial plan & formation act are created using template-based GenAI (HITL).`,
		icon: GiArtificialIntelligence,
	},
	{
		name: "Step 4",
		description: `The customer e-signs the documents and meets with the notary online.`,
		icon: FaPenNib,
	},
	{
		name: "Step 5",
		description: `The file is submitted to the government and is quickly processed.`,
		icon: RiGovernmentFill,
	},
	{
		name: "Step 6",
		description: `We send a welcome package with company details & bonus perks.`,
		icon: LuPackageOpen,
	},
];

const Journey = () => {
	return (
		<div className="h-full w-full" style={{ backgroundColor: "#EFF5FF" }}>
			<div className=" py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<p className="mt-2 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
							Customer Journey
						</p>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							From idea to company in seven days.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
							{features.map((feature) => (
								<div key={feature.name} className="relative pl-16">
									<dt className="text-base font-semibold leading-7 text-gray-900">
										<div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
											<feature.icon
												className="h-6 w-6 text-white"
												aria-hidden="true"
											/>
										</div>
										{feature.name}
									</dt>
									<dd className="mt-2 text-base leading-7 text-gray-600">
										{feature.description}
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Journey;
