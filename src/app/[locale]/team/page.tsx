import React from "react";
import Link from "next/link";
import Image from "next/image";

import founderImage from "@/images/avatars/jerome-leclanche.jpg";

const teamMembers = [
	{
		name: "Jerome Leclanche",
		role: "Founder",
		description: "Managing Director",
		image: founderImage,
		contact: {
			label: "Linkedin",
			href: "https://linkedin.com/in/jleclanche",
		},
	},
	{
		name: "Dwight Schrute",
		role: "Assistant to the Regional Manager",
		description: "Beets, bears, Battlestar Galactica",
		image: "https://ozgrozer.github.io/100k-faces/0/0/000983.jpg",
		contact: {
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/dwight-schrute-3a3b4b/",
		},
	},
	{
		name: "Jim Halpert",
		role: "Salesman",
		description: "Likes Pam",
		image: "https://ozgrozer.github.io/100k-faces/0/4/004096.jpg",
		contact: {
			label: "Twitter",
			href: "https://twitter.com/jimhalpert",
		},
	},
	{
		name: "Pam Beesly",
		role: "Receptionist",
		description: "Does art",
		image: "https://ozgrozer.github.io/100k-faces/0/5/005833.jpg",
		contact: {
			label: "Email",
			href: "mailto:mail@pam.com",
		},
	},
	{
		name: "Ryan Howard",
		role: "Temp",
		description: "Went to business school",
		image: "https://ozgrozer.github.io/100k-faces/0/6/006461.jpg",
		contact: {
			label: "GitHub",
			href: "https://github.com/ryanhoward",
		},
	},
];
export default function TeamPage() {
	return (
		<div className="flex flex-col items-center">
			{/* Adjust title size for mobile */}
			<h1 className="my-6 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 text-center">
				Meet the Team
			</h1>
			<div className="flex flex-wrap m-4 gap-8 lg:gap-16 justify-center">
				{teamMembers.map((member) => {
					return (
						<div key={member.name} className="flex flex-col items-center">
							<Image
								src={member.image}
								alt={member.name}
								width={250}
								height={250}
								className="rounded-full"
							/>
							<h1 className="mt-4 text-xl tracking-tight text-slate-700">
								{member.name}
							</h1>
							<h2>{member.role}</h2>
							<p>{member.description}</p>
							<Link
								href={member.contact.href}
								className="text-blue-600 hover:underline"
							>
								{member.contact.label}
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
}
