import { BanknotesIcon } from "@heroicons/react/24/outline";
import BenefitBlock from "./ui/BenefitBlock";

export default function ProgramBenefitsSection() {
	return (
		<section className="py-20 relative">
			{/* Curved lines background */}
			<div className="absolute inset-0 overflow-hidden opacity-5">
				<svg
					width="100%"
					height="100%"
					viewBox="0 0 800 800"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M100,350 C200,250 300,450 400,350 C500,250 600,450 700,350"
						fill="none"
						stroke="#2563eb"
						strokeWidth="2"
					/>
					<path
						d="M100,450 C200,350 300,550 400,450 C500,350 600,550 700,450"
						fill="none"
						stroke="#2563eb"
						strokeWidth="2"
					/>
					<path
						d="M100,550 C200,450 300,650 400,550 C500,450 600,650 700,550"
						fill="none"
						stroke="#2563eb"
						strokeWidth="2"
					/>
				</svg>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<h2 className="text-3xl font-bold text-center mb-4">
					Everything You Need to Land, Launch, and Lead
				</h2>
				<p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
					Join a hand-picked cohort of 12-15 US-based startups for an
					intensive, hands-on program.
				</p>

				<BenefitBlock
					title="Seamless Company Formation"
					label="Company Setup"
					description="We handle it all – legal setup, financial plan, statutes, registered address, VAT, compliance. Hit the ground running."
					imageSrc="/images/features/formation.svg"
					imageAlt="Company formation"
					features={[
						"Complete legal entity setup",
						"Financial plan development",
						"VAT and compliance handling",
					]}
					imageRight={false}
				/>

				<BenefitBlock
					title="Relocation Assistance"
					label="Relocation"
					description="Moving continents is complex. We offer guidance on visa processes, housing advice, and cultural integration support. Your soft landing guaranteed."
					imageSrc="/images/features/relocation.svg"
					imageAlt="Relocation assistance"
					features={[
						"Visa and immigration process guidance",
						"Housing assistance",
						"Cultural integration support",
					]}
					imageRight={true}
				/>

				<BenefitBlock
					title="Strategic Guidance"
					label="Mentorship"
					description="1-on-1 coaching tailored to your startup. Refine strategy, nail your fundraising narrative, and navigate the European landscape."
					imageSrc="/images/features/networking.svg"
					imageAlt="Strategic guidance"
					features={[
						"Personalized mentorship",
						"Fundraising strategy",
						"European market navigation",
					]}
					imageRight={false}
				/>

				<BenefitBlock
					title="EU Funding Access"
					label="Funding"
					description="Get expert help identifying and applying for lucrative European grants and subsidies. Tap into millions in non-dilutive funding."
					imageSrc="/images/features/European.svg"
					imageAlt="EU funding access"
					features={[
						"Grant identification and application",
						"Subsidy program navigation",
						"Non-dilutive funding opportunities",
					]}
					imageRight={true}
				/>

				<BenefitBlock
					title="Banking Setup"
					label="Banking"
					description="We'll help you navigate the European banking system and set up your business accounts with trusted financial institutions."
					imageSrc="/images/features/office.svg"
					imageAlt="EU funding access"
					features={[
						"Business account setup with European banks",
						"Up to 2000 € in Stripe credit",
						"Financial services guidance",
					]}
					imageRight={false}
				/>
			</div>
		</section>
	);
}
