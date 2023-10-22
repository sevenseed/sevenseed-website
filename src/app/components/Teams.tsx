import React from "react";
import Image from "next/image";
import data from "../members.json";

const Teams = () => {
	const members = data.members;

	return (
		<div className="flex-col w-9/12 m-auto mb-20 z-50 relative">
			<h2 className="text-secondary">The Team</h2>
			<div className="grid grid-cols-3 justify-center gap-16 mt-10 ">
				{members.map((member) => (
					<div className="avatar flex-col items-center ">
						<div className="w-44 rounded-full  shadow-2xl">
							<Image
								src={`/images/${member.image}`}
								alt=""
								width="150"
								height="150"
							/>
						</div>
						<div className=" flex-col mt-5 h-20 w-full">
							<h5 className="font-bold text-2xl">{member.name}</h5>
							<p className="text-gray-500">{member.role1}</p>
							<p className="text-gray-500">{member.role2}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Teams;
