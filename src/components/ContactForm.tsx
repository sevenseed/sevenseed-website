"use client";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "./Button";

const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
if (!FORM_ID) throw new Error("Contact form ID not found in environment");

const RequiredMark = () => (
	<span className="font-normal text-gray-400 ml-3">required</span>
);

function ContactForm() {
	const [state, handleSubmit] = useForm(FORM_ID!);

	if (state.succeeded) {
		return (
			<div className="flex flex-col rounded-lg p-10 bg-gray-100/50 backdrop-blur-lg gap-y-3 text-center">
				<p className="text-lg font-semibold">Message received!</p>
				<p>
					Our customer support team will get back to you within 1 business
					day.
				</p>
			</div>
		);
	}

	return (
		<form
			className="flex flex-col rounded-lg p-8 bg-gray-100/50 backdrop-blur-lg gap-y-3"
			onSubmit={handleSubmit}
		>
			<input name="subject" type="hidden" value="Contact form from Seven Seed" />
			<div className="flex flex-col gap-y-1">
				<span className="font-semibold pl-1">
					Name
					<RequiredMark />
				</span>
				<div className="flex gap-x-2 gap-y-1 flex-wrap sm:flex-nowrap">
					<div className="flex flex-col w-full space-y-1">
						<label htmlFor="name" className="pl-1">
							First name
						</label>
						<input
							id="firstName"
							type="text"
							name="firstName"
							className="rounded-md border p-1 px-2 focus-visible:outline-2 focus-visible:outline-primary-300"
							placeholder="John"
							required
						/>
						<ValidationError
							prefix="FirstName"
							field="firstName"
							errors={state.errors}
						/>
					</div>
					<div className="flex flex-col w-full space-y-1">
						<label htmlFor="name" className="pl-1">
							Last name
						</label>
						<input
							id="lastName"
							type="text"
							name="lastName"
							className="rounded-md border p-1 px-2 focus-visible:outline-2 focus-visible:outline-primary-300"
							placeholder="Doe"
							required
						/>
						<ValidationError
							prefix="LastName"
							field="lastName"
							errors={state.errors}
						/>
					</div>
				</div>
			</div>
			<div className="flex flex-col w-full space-y-1">
				<label htmlFor="email" className="font-semibold pl-1">
					Email
					<RequiredMark />
				</label>
				<input
					id="email"
					type="email"
					name="email"
					className="rounded-md border p-1 px-2 focus-visible:outline-2 focus-visible:outline-primary-300"
					placeholder="hello@example.com"
					required
				/>
				<ValidationError prefix="Email" field="email" errors={state.errors} />
			</div>
			<div className="flex flex-col w-full space-y-1">
				<label htmlFor="phone" className="font-semibold pl-1">
					Phone
				</label>
				<input
					id="phone"
					type="tel"
					name="phone"
					className="rounded-md border p-1 px-2 focus-visible:outline-2 focus-visible:outline-primary-300"
					placeholder="+32 555 123 456"
				/>
				<ValidationError prefix="Phone" field="phone" errors={state.errors} />
			</div>
			<div className="flex flex-col w-full gap-y-1">
				<label htmlFor="message" className="font-semibold pl-1">
					Message
					<RequiredMark />
				</label>
				<textarea
					id="message"
					name="message"
					className="rounded-md border p-1 px-2 focus-visible:outline-2 focus-visible:outline-primary-300"
					rows={4}
					placeholder="I have a question about Seven Seed..."
					required
				/>
				<ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
				/>
			</div>
			<Button
				variant="solid"
				color="blue"
				type="submit"
				disabled={state.submitting}
				className="mt-1"
			>
				Submit
			</Button>
		</form>
	);
}

export default ContactForm;
