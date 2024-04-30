import Image from "next/image";

export default function StripeInlineLogo() {
	return (
		<Image
			className="inline h-4 align-text-bottom"
			src="/images/logo/stripe.white.svg"
			width={40}
			height={16}
			alt="Stripe"
		/>
	);
}
