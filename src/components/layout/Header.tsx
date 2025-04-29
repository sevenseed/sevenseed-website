"use client";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { GridPattern } from "../GridPattern";
import LanguageSwitcher from "../LanguageSwitcher";
import Image from "next/image";
import logo from "@/images/logo.svg";
import { Button } from "../Button";

const navigation = [
	{ name: "Funding", href: "/funding" },
	{ name: "Incorporate", href: "/incorporate" },
];

const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			<nav
				className="mx-auto flex w-full max-w-7xl items-center justify-between p-6 lg:px-8 mb-16 z-20"
				aria-label="Global"
			>
				<GridPattern
					patternTransform="translate(0 80)"
					className="text-slate-900/10 w-full inset-0 absolute pointer-events-none mask-image-gradient-to-b from-black to-transparent"
				/>
				<a href="/" className="-m-1.5 p-1.5">
					<span className="sr-only">Seven Seed</span>
					<Image
						className="h-12 w-auto"
						src={logo}
						alt="Seven Seed"
						priority
					/>
				</a>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12 items-center">
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="text-sm font-semibold leading-6 text-gray-900"
						>
							{item.name}
						</a>
					))}
					<LanguageSwitcher />
					<Button href="/contact" variant="solid" color="blue">
						Contact Us
					</Button>
				</div>
			</nav>
			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className="fixed inset-0 z-10" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 space-y-6">
					<div className="flex items-center justify-between">
						<a href="/" className="-m-1.5 p-1.5">
							<span className="sr-only">Seven Seed</span>
							<Image
								className="h-12 w-auto"
								src={logo}
								alt="Seven Seed"
							/>
						</a>
						<button
							type="button"
							className="self-end -m-2.5 rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="flow-root space-y-2">
						<LanguageSwitcher />
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
							>
								{item.name}
							</a>
						))}
						<a
							href="/start"
							className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
						>
							Get started
						</a>
					</div>
				</Dialog.Panel>
			</Dialog>
		</>
	);
};

export default Header;
