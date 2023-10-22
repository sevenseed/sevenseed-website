import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	return (
		<div className="navbar flex justify-center gap-20 z-50 bg-transparent absolute">
			<ul className="menu menu-horizontal px-1 gap-10">
				<li>
					<Link href="/partners">Partenaire</Link>
				</li>
				<li>
					<Link href="/team">Team</Link>
				</li>
			</ul>
			<ul className="menu menu-horizontal px-1 gap-10">
				<li className="text-3xl">
					<Link href="/">Home</Link>
				</li>
			</ul>
			<ul className="menu menu-horizontal px-1 gap-10">
				<li>
					<Link href="/policy">Policy</Link>
				</li>
				<li>
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
