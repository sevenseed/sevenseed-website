"use client";

import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("@/components/ContactForm"), {
	ssr: false,
	loading: () => (
		<div className="flex flex-col rounded-lg p-8 bg-gray-100/50 backdrop-blur-lg gap-y-3 animate-pulse">
			<div className="h-10 bg-gray-200 rounded" />
			<div className="h-10 bg-gray-200 rounded" />
			<div className="h-10 bg-gray-200 rounded" />
			<div className="h-24 bg-gray-200 rounded" />
		</div>
	),
});

const ContactPage = () => {
	return (
		<div className="flex flex-col max-w-2xl mx-auto gap-y-4 px-4 mb-8">
			<div className="space-y-2">
				<h2 className="font-display text-5xl font-extrabold tracking-tight text-gray-900 sm:text-center">
					Get in touch
				</h2>
				<p className="leading-7 text-gray-600 text-lg text-balance sm:text-center">
					Have questions about Seven Seed, our initiatives, or potential
					collaborations? Reach out and we&apos;ll respond within 1
					business day.
				</p>
			</div>
			<ContactForm />
		</div>
	);
};

export default ContactPage;
